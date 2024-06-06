import { Meeting as TMeeting } from "../api/meeting/Meeting";

export const MEETING_TITLE_FIELD = "id";

export const MeetingTitle = (record: TMeeting): string => {
  return record.id?.toString() || String(record.id);
};
