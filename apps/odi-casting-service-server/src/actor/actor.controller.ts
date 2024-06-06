import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActorService } from "./actor.service";
import { ActorControllerBase } from "./base/actor.controller.base";

@swagger.ApiTags("actors")
@common.Controller("actors")
export class ActorController extends ActorControllerBase {
  constructor(protected readonly service: ActorService) {
    super(service);
  }
}
