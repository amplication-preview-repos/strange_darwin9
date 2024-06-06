/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActorWhereUniqueInput } from "./ActorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteActorArgs {
  @ApiProperty({
    required: true,
    type: () => ActorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ActorWhereUniqueInput)
  @Field(() => ActorWhereUniqueInput, { nullable: false })
  where!: ActorWhereUniqueInput;
}

export { DeleteActorArgs as DeleteActorArgs };
