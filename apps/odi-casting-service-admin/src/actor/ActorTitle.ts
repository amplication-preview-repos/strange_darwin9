import { Actor as TActor } from "../api/actor/Actor";

export const ACTOR_TITLE_FIELD = "id";

export const ActorTitle = (record: TActor): string => {
  return record.id?.toString() || String(record.id);
};
