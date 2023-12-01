import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as DTO from "./dto";

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  // find
  async findUserList() {
    const res = await this.db.user.findMany();
    return { users: res };
  }

  async findUserById(id: number) {
    return await this.db.user.findUnique({
      where: {
        id,
      },
    });
  }

  // create
  async createUser(body: DTO.CreateUserDto) {
    const data = await this.db.user.create({ data: body });
    return { message: "success", data };
  }

  // update
  async updateUserById(id: number, body: DTO.UpdateUserDto) {
    const data = await this.db.user.update({ where: { id }, data: body });
    return { message: "success", data };
  }

  //delete
  async deleteUserById(id: number) {
    const data = await this.db.user.delete({ where: { id } });
    return { message: "success", data };
  }
}
