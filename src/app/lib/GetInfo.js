// theo maurino

function convertMmDdYyyyToDate(dateStr) {
    const parts = dateStr.split('/');

    // month is 0 indexed
    const month = parseInt(parts[0]) - 1;
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    return new Date(year, month, day); // returns date at 00:00:00 hours
}


export async function getNextShow() {

    try {

        const res = await fetch('../api/sheet-pages', {
            method : "GET",
            headers : {'Content-Type' : 'application/json'}
        });

        const data = await res.json();

        const pages = data["pages"];
        const today = new Date();
        let ps;

        let nextKnown;

        console.log(pages);
        for (let p of pages) {
            let parts = p.split('_');


            let d = (parts.length === 2) ? parts[1] : parts[2]; // expects type_date OR type_date_time and NOTHING else.

            if (convertMmDdYyyyToDate(d) > today) {
                nextKnown = convertMmDdYyyyToDate(d); // more efficient ways to do this but lets be honest
                ps = parts;
                break;
            }

        }

        if (!nextKnown) {
            throw new Error("Received pages, but none are properly dated later than today.")
        }

        if (ps.length > 2) {
            // then we also have a time that isn't the default.
            let timeStr = ps[2];
            let timeP = timeStr.split(':');

            // set hour and minute of next known date
            nextKnown.setHours(parseInt(timeP[0]));
            nextKnown.setMinutes(parseInt(timeP[1]));
        } else {
            // set time to 9:00 PM
            nextKnown.setHours(21);
            nextKnown.setMinutes(0);
        }

        // now we have MM:DD:YYYY:HH:mm
        // we return as string, along with date object

        return {
            "next_date" : ps[1],
            "next_time" : String(nextKnown.getHours()) + ":" + String(nextKnown.getMinutes()),
            "date_obj" : nextKnown,
            "finalized" : ps[0].toLowerCase() === "schedule" ? true : false
        }



    } catch (e) {
        console.error("AN ERROR OCURRED WHILE TRYING TO GET NEXT SHOW DATE : ", e)
        return {
            "next_date" : "",
            "next_time" : "",
            "date_obj" : new Date(),
            "finalized" : false
        }
    }

}