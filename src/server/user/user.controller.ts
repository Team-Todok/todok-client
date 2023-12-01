import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Patch,
  Delete,
} from "@nestjs/common";
import { UserService } from "./user.service";
import * as DTO from "./dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findUserList() {
    return await this.userService.findUserList();
  }

  @Post()
  async createUser(@Body() body: DTO.CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @Get("/:id")
  async findUserById(@Param("id") id: number) {
    return await this.userService.findUserById(id);
  }

  @Patch("/:id")
  async updateUserById(
    @Param("id") id: number,
    @Body() body: DTO.UpdateUserDto
  ) {
    return await this.userService.updateUserById(id, body);
  }

  @Delete("/:id")
  async deleteUserById(@Param("id") id: number) {
    return await this.userService.deleteUserById(id);
  }
}
