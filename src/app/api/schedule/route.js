import { getCreds } from "@/app/lib/GoogleSheets";
import { google } from "googleapis";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";




export async function POST(req) {
    // this is how they will POST sign-ups to the SIGN-UP sheet

    try {
        const body = await req.json();
        // const {name, post_time, performance_date, email, phone, notes} = body;
        const {post_time, performance_name, name, email, phone, notes, sheetName } = body;

        const {sheetId, credentials} = getCreds();


        // console.log(JSON.stringify(credentials));

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({version : 'v4', auth});

        const range = `${sheetName}!A1:Z`; // just grab all cols 

        let appendResult = await sheets.spreadsheets.values.append({
            spreadsheetId : sheetId,
            range,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[
                    post_time,
                    performance_name,
                    name,
                    email,
                    phone,
                    notes
                ]]
            }
        });

        // if we are dealing with a waitlist scenario, indicate that by highlighting the rows and bolding the text
        if (performance_name === "WAITLIST") {

            // get the sheetID for this page (numeric)
            const sheetMeta = await sheets.spreadsheets.get({
                spreadsheetId: sheetId,
            });
              
            const targetSheet = sheetMeta.data.sheets.find(
                s => s.properties.title === sheetName
            );

            const numericSheetId = targetSheet.properties.sheetId;
            const updatedRange = appendResult.data.updates.updatedRange;
            const matches = updatedRange.match(/\d+/g);
            console.log(matches);
            const rowNumber = parseInt(matches[matches.length - 1]);

            // apply bold and highlight formatting to row
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: sheetId,
                requestBody: {
                    requests: [
                    {
                        repeatCell: {
                        range: {
                            sheetId: numericSheetId,
                            startRowIndex: rowNumber - 1,
                            endRowIndex: rowNumber,
                        },
                        cell: {
                            userEnteredFormat: {
                              textFormat: { bold: true },
                              backgroundColor: { red: 1, green: 0.92, blue: 0.92 } // pale red
                            }
                        },
                        fields: "userEnteredFormat(textFormat,backgroundColor)"
                        }
                    }
                    ]
                }
            })

        }

        return new Response(
            JSON.stringify({
                success : true
            }),
            {
                status : 200
            }
        );

    } catch (err) {
        console.error(`Signup Error : ${err}`);
        return new Response(
            JSON.stringify({
                error : 'Internal Error (service)'
            }),
            {
                status : 500
            }
        );
    }

}


export async function GET(req) {

    try {
        // need to pass the sheetName as the body of the request
        const {searchParams} = new URL(req.url);
        const sheetName = decodeURIComponent(searchParams.get("sheetName"));

        console.log("SHEET NAME : ", sheetName);

        const {sheetId, credentials} = getCreds();

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({version : 'v4', auth});


        // EDIT NEEDED
            // this is grabbing ALL cols -- won't be necessary
            // likewise, this is assuming the signups tab will always be called just 'signups'
                // have to check with the prattic men for this
        
        const ranges = [`${sheetName}!A1:Z`];

        const vals = await sheets.spreadsheets.values.batchGet({
            spreadsheetId : sheetId,
            ranges
        });

        if (vals) {

            // console.log(JSON.stringify(vals));

            return new Response(
                JSON.stringify({
                    success : true,
                    body : vals
                }),
                {
                    status : 200
                }
            );

        } else {
            throw new Error("Getting sheets values failed.");
        }


    } catch (err) {
        console.error(`GET Error : ${err}`);
        return new Response(
            JSON.stringify({
                error : 'Internal Error (service)'
            }),
            {
                status : 500
            }
        );
    }

}