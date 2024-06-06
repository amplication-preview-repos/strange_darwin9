import { Module } from "@nestjs/common";
import { AuditionModuleBase } from "./base/audition.module.base";
import { AuditionService } from "./audition.service";
import { AuditionController } from "./audition.controller";
import { AuditionResolver } from "./audition.resolver";

@Module({
  imports: [AuditionModuleBase],
  controllers: [AuditionController],
  providers: [AuditionService, AuditionResolver],
  exports: [AuditionService],
})
export class AuditionModule {}
