import { Module } from "@nestjs/common";
import { ActorModuleBase } from "./base/actor.module.base";
import { ActorService } from "./actor.service";
import { ActorController } from "./actor.controller";
import { ActorResolver } from "./actor.resolver";

@Module({
  imports: [ActorModuleBase],
  controllers: [ActorController],
  providers: [ActorService, ActorResolver],
  exports: [ActorService],
})
export class ActorModule {}
