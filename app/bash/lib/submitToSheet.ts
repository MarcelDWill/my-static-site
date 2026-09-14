// Shared submission helper for all Bash planning forms.
//
// Everything posts to the same Google Apps Script Web App endpoint that
// already powers the RSVP form. Each payload carries a `type` field
// (e.g. "rsvp", "dateVote", "cityVote", "activityVote", "flightSighting",
// "idea") so the Apps Script can route rows into separate sheet tabs
// (see the Google Sheets restructuring described on the planning page).
// Until that routing is added on the Apps Script side, everything will
// land in whatever sheet/tab the script currently writes to.
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbySHGSNkMecioGPFd5d4OoAA20bEkLVoEDpaq4pKf8daVbFcTRXLIawAWK5mUB5EttGkQ/exec";

export async function submitToSheet(
  type: string,
  data: Record<string, unknown>
) {
  await fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors", // Apps Script web apps don't return readable CORS responses
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ type, submittedAt: new Date().toISOString(), ...data }),
  });
}
