import * as graphql from "@nestjs/graphql";
import { AuditionResolverBase } from "./base/audition.resolver.base";
import { Audition } from "./base/Audition";
import { AuditionService } from "./audition.service";

@graphql.Resolver(() => Audition)
export class AuditionResolver extends AuditionResolverBase {
  constructor(protected readonly service: AuditionService) {
    super(service);
  }
}
