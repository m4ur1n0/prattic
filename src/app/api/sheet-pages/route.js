// import { withCors } from "@/app/lib/cors";
import { getCreds } from "@/app/lib/GoogleSheets";
import { google } from "googleapis";


export async function GET() {

    try {

        const {sheetId, credentials} = getCreds();
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ['https://www.googleapis.com/auth/spreadsheets']
        })

        const sheets = google.sheets({version : 'v4', auth});

        const response = await sheets.spreadsheets.get({
            spreadsheetId : sheetId,
            fields : 'sheets.properties.title'
        });

        const pages = response.data.sheets.map((sheet) => sheet.properties.title);

        

        return new Response(
            JSON.stringify({
                pages
            }),
            {
                status : 200
            }
        );


    } catch (e) {
        console.error("FAILED TO GET SPREADSHEET PAGES: ", e);

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