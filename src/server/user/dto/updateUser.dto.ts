import { PartialType } from "@nestjs/mapped-types";
import CreateUserDto from "./createUser.dto";

export default class UpdateUserDto extends PartialType(CreateUserDto) {}
