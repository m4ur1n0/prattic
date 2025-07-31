import { google } from "googleapis";
import path from 'path'
import { readFileSync } from "fs";


export async function POST(req) {
    // this is how they will POST sign-ups to the SIGN-UP sheet

    try {
        const body = await req.json();
        // const {name, post_time, performance_date, email, phone, notes} = body;
        const {post_time, performance_date, name, email, phone, notes } = body;

        const sheetId = process.env.SHEET_ID;

        // service account credentials
        const base64creds = process.env.GOOGLE_SERVICE_ACCOUNT;

        if (!sheetId || !base64creds) {
            return new Response(
                JSON.stringify({
                    error : "MISSING ENV VARS."
                }),
                {
                    status : 500
                }
            );
        }

        // decode credentials
        const decoded = Buffer.from(base64creds, 'base64').toString('utf8');
        const credentials = JSON.parse(decoded);

        // console.log(JSON.stringify(credentials));

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({version : 'v4', auth});

        // EDIT NEEDED
            // this is grabbing ALL cols -- won't be necessary
            // likewise, this is assuming the signups tab will always be called just 'signups'
                // have to check with the prattic men for this

        const range = 'signups!A1:Z'; // just grab all cols 

        await sheets.spreadsheets.values.append({
            spreadsheetId : sheetId,
            range,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[
                    post_time,
                    performance_date,
                    name,
                    email,
                    phone,
                    notes
                ]]
            }
        });

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


export async function GET() {

    try {

        const sheetId = process.env.SHEET_ID;
        const base64creds = process.env.GOOGLE_SERVICE_ACCOUNT;

        if (!sheetId || !base64creds) {
            return new Response(
                JSON.stringify({
                    error : "MISSING ENV VALUES."
                }),
                {
                    status : 500
                }
            );
        }

        const decoded = Buffer.from(base64creds, 'base64').toString('utf8');
        const credentials = JSON.parse(decoded);

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({version : 'v4', auth});


        // EDIT NEEDED
            // this is grabbing ALL cols -- won't be necessary
            // likewise, this is assuming the signups tab will always be called just 'signups'
                // have to check with the prattic men for this
        
        const ranges = ["schedule!A1:Z"];

        const vals = await sheets.spreadsheets.values.batchGet({
            spreadsheetId : sheetId,
            ranges
        });

        if (vals) {

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