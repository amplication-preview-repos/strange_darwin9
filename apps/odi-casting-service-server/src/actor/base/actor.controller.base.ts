/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ActorService } from "../actor.service";
import { ActorCreateInput } from "./ActorCreateInput";
import { Actor } from "./Actor";
import { ActorFindManyArgs } from "./ActorFindManyArgs";
import { ActorWhereUniqueInput } from "./ActorWhereUniqueInput";
import { ActorUpdateInput } from "./ActorUpdateInput";

export class ActorControllerBase {
  constructor(protected readonly service: ActorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Actor })
  async createActor(@common.Body() data: ActorCreateInput): Promise<Actor> {
    return await this.service.createActor({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Actor] })
  @ApiNestedQuery(ActorFindManyArgs)
  async actors(@common.Req() request: Request): Promise<Actor[]> {
    const args = plainToClass(ActorFindManyArgs, request.query);
    return this.service.actors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Actor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async actor(
    @common.Param() params: ActorWhereUniqueInput
  ): Promise<Actor | null> {
    const result = await this.service.actor({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Actor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateActor(
    @common.Param() params: ActorWhereUniqueInput,
    @common.Body() data: ActorUpdateInput
  ): Promise<Actor | null> {
    try {
      return await this.service.updateActor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Actor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteActor(
    @common.Param() params: ActorWhereUniqueInput
  ): Promise<Actor | null> {
    try {
      return await this.service.deleteActor({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}