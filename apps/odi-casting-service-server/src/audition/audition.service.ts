import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditionServiceBase } from "./base/audition.service.base";

@Injectable()
export class AuditionService extends AuditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
