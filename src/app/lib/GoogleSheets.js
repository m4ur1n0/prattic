export function getCreds() {
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

    return {sheetId, credentials};
    
}