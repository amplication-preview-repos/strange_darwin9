import { ActorWhereInput } from "./ActorWhereInput";
import { ActorOrderByInput } from "./ActorOrderByInput";

export type ActorFindManyArgs = {
  where?: ActorWhereInput;
  orderBy?: Array<ActorOrderByInput>;
  skip?: number;
  take?: number;
};
