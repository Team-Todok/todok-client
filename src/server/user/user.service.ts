import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

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
}
