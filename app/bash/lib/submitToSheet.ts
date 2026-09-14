// Shared submission helper for all Bash planning forms.
//
// Everything posts to the "Bash: Japan 2027 Planning" Google Apps Script
// Web App endpoint. Each payload carries a `type` field (e.g. "rsvp",
// "dateVote", "cityAndActivityVote", "flightSighting", "cardTable",
// "birthdayEventIdea") which the Apps Script uses to route rows into
// separate sheet tabs.
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby5o73twop7ZHzc3uJtMYERmSk4MFUyfBxeCsdp2-fQMgFRPW9G0S2X7mVHJ_1oa2Xqzw/exec";

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
