import { Audition as TAudition } from "../api/audition/Audition";

export const AUDITION_TITLE_FIELD = "id";

export const AuditionTitle = (record: TAudition): string => {
  return record.id?.toString() || String(record.id);
};
