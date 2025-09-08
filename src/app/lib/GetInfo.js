// theo maurino

export function convertMmDdYyyyToDate(dateStr) {
    const parts = dateStr.split('/');

    // month is 0 indexed
    const month = parseInt(parts[0]) - 1;
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    return new Date(year, month, day); // returns date at 00:00:00 hours
}


export async function getNextShowNameAndDate() {

    try {

        const res = await fetch('../api/sheet-pages', {
            method : "GET",
            headers : {'Content-Type' : 'application/json'}
        });

        const data = await res.json();
        console.log(`RESPONSE IN GETNEXTSHOW : ${JSON.stringify(data)}`);

        const pages = data["pages"];
        const today = new Date();
        let ps;

        let nextKnown;

        // console.log(pages);
        for (let p of pages) {
            let parts = p.split('_');
            let d;

            // the thing about times is garbage and should never exist...
            if (parts.length === 2) {d = parts[1]} else continue; // needs the format we've specified

            if (convertMmDdYyyyToDate(d) > today) {
                nextKnown = convertMmDdYyyyToDate(d); // more efficient ways to do this but lets be honest
                ps = parts;
                break;
            }

        }

        if (!nextKnown) {
            throw new Error("Received pages, but none are properly dated later than today.")
        }

        // now we have MM:DD:YYYY
        // we return as string, along with date object

        if (pages.includes(["schedule", ps[1]].join("_"))) {
            // then there is a 'schedule' version, which is official.
            // IF WE DECIDE THAT THEY WILL JUST RENAME THE PAGE FROM SIGNUP_XXX TO SCHEDULE_XXX THIS PART CAN BE DELETED
                // this would be better for the 'finalized' variable
            ps = ["schedule", ps[1]]; // all else stays the same
        }


        // fixed -- no longer looks at time here
        return {
            "next_date" : ps[1],
            "date_obj" : nextKnown,
            "finalized" : (ps[0].toLowerCase() === "schedule"),
            "sheetName" : ps.join('_')
        }



    } catch (e) {
        console.error("AN ERROR OCCURRED WHILE TRYING TO GET NEXT SHOW DATE : ", e)
        return {
            "next_date" : "",
            "date_obj" : new Date(),
            "finalized" : false,
            "sheet_name" : ""
        }
    }

}

export function getPerformersFromRawSheetData(rawSheetData) {
    // ok then this should work.
    // GET THE PERFORMERS IN ORDER
    const idxOfPerformerHeaders = 5; // hard code - change if we change schema
    const performersInOrder = [];
    // CAN ADD TIME COL HERE TOO IF WE WANT IT
    const idxOfName = rawSheetData["body"]["data"]["valueRanges"][0]["values"][idxOfPerformerHeaders].indexOf("Name");

    for (let row of rawSheetData["body"]["data"]["valueRanges"][0]["values"].slice(idxOfPerformerHeaders + 1)) {
        // as object we can include time too if different
        // LATER
        performersInOrder.push({
            name : row[idxOfName],
        });
    }

    return performersInOrder;
}

export async function getNextShowData(sheetName, finalized=false) {

    try {

        let res = await fetch(`../api/schedule?sheetName=${sheetName}`, {
            method : "GET",
            headers : {'Content-Type': 'application/json'},

        });
        

        const sheetData = await res.json();


        if (!sheetData["success"]) {
            throw new Error(`Getting data from sheet named ${sheetName} failed.`)
        }

        // console.log("THIS IS THE VALUE BEING USED IN GETNEXTSHOWDATA" , JSON.stringify(sheetData))

        const performersInOrder = getPerformersFromRawSheetData(sheetData);

        // get show metadata
        const idxEventbrite = 0;
        const idxMaxPerformers = 1;
        const idxStartTime = 2;
        const idxShowName = 3;

        const eventbrite = sheetData["body"]["data"]["valueRanges"][0]["values"][idxEventbrite][1] || "https://www.eventbrite.com/o/the-prattic-115453600301";
        const maxPerformers = sheetData["body"]["data"]["valueRanges"][0]["values"][idxMaxPerformers][1] || 15;
        const startTime = sheetData["body"]["data"]["valueRanges"][0]["values"][idxStartTime][1] || "9:00";
        const showName = sheetData["body"]["data"]["valueRanges"][0]["values"][idxShowName][1] || "Standup Tight 3";


        const nextShow =  {

            performers : performersInOrder,
            showName,
            eventbrite,
            maxPerformers,
            startTime,
            finalized,
            sheetName,

        };

        console.log(`returning next show : ${JSON.stringify(nextShow)}`);

        return nextShow;

        


    } catch (e) {
        console.error("Failed to get performers for next show: ", e);
        return {};
    }
}

export async function getAllFutureShows() {

    try {

        const res = await fetch('../api/sheet-pages', {
            method : "GET",
            headers : {'Content-Type' : 'application/json'}
        });

        const data = await res.json();

        const pages = data["pages"];
        const today = new Date();

        // we are looking for all possible 'signup' pages in the FUTURE

        let futures = pages.filter((page) => {
            if (page.startsWith("signup")) {
                // for every existing SIGNUP page, allow the chance to signup
                let parts = page.split('_');

                // the thing about times is garbage and should never exist...
                let d = (parts.length === 2) ? parts[1] : parts[0]; // expects [ type_date ] but will work with just [ date ], though it won't know what kind it is .

                if (convertMmDdYyyyToDate(d) > today) {
                    // return page;
                    // LATER --- RETURN FULL PAGE NAME IF NOT JUST A STANDUP NIGHT
                    return d;
                }
                
            }
        });

        // now futures contains all future signup pages
            // for right now we're just gonna give the dates. might add a 'showname' field later.
            // LATER -- ADD SHOWNAME FIELD
        
            // right now futures === a list of dates

        console.log(`RETURNING ${futures}`)
        return futures;



    } catch (e) {
        console.error("AN ERROR OCCURRED WHILE TRYING TO ACCESS ALL NEXT SHOWS : ", e)
        return []
    }

}

export async function PostSignUp(signUpEvent) {

    // signupevent --> {post_time, performance_name, name, email, phone, notes, sheetName } 
    const res = await fetch('../api/schedule', {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(signUpEvent),
    });

    const data = res.json();

    // console.log(JSON.stringify(data));
    if (data.status === 200) {
        // console.log("Success");
        return 200;
    } else if (data.status === 500) {
        // console.log("Failure")
        return 500;
    }


}