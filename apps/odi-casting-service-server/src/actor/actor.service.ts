import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActorServiceBase } from "./base/actor.service.base";

@Injectable()
export class ActorService extends ActorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
