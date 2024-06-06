import * as graphql from "@nestjs/graphql";
import { ActorResolverBase } from "./base/actor.resolver.base";
import { Actor } from "./base/Actor";
import { ActorService } from "./actor.service";

@graphql.Resolver(() => Actor)
export class ActorResolver extends ActorResolverBase {
  constructor(protected readonly service: ActorService) {
    super(service);
  }
}
