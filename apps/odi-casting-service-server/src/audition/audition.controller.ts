import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditionService } from "./audition.service";
import { AuditionControllerBase } from "./base/audition.controller.base";

@swagger.ApiTags("auditions")
@common.Controller("auditions")
export class AuditionController extends AuditionControllerBase {
  constructor(protected readonly service: AuditionService) {
    super(service);
  }
}
