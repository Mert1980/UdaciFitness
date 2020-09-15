export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";
export const SELECT_DATE = "SELECT_DATE";

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  };
}

export function addEntry(entry) {
  console.log("entry ", entry);
  return {
    type: ADD_ENTRY,
    entry,
  };
}

export function selectDate(date) {
  console.log("date ", date);
  return {
    type: SELECT_DATE,
    date,
  };
}
