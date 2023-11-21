import { Controller, Param, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findUserList() {
    return await this.userService.findUserList();
  }

  @Get("/:id")
  async findUserById(@Param("id") id: number): Promise<User | null> {
    return await this.userService.findUserById(id);
  }
}
