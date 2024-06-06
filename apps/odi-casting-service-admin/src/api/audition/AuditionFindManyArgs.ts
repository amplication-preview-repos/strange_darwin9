import { AuditionWhereInput } from "./AuditionWhereInput";
import { AuditionOrderByInput } from "./AuditionOrderByInput";

export type AuditionFindManyArgs = {
  where?: AuditionWhereInput;
  orderBy?: Array<AuditionOrderByInput>;
  skip?: number;
  take?: number;
};
