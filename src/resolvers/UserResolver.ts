import { User } from 'src/entities/User';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => Boolean)
  async createUser(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('name', { nullable: true }) name?: string
  ): Promise<boolean> {
    try {
      const hashedPassword = await hash(password, 12);
      await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg('email') email: string,
    @Arg('name', { nullable: true }) name?: string
  ): Promise<boolean> {
    try {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          name,
        },
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('email') email: string): Promise<boolean> {
    try {
      await prisma.user.delete({
        where: {
          email: email,
        },
      });
    } catch (err) {
      console.error(err);
      return false;
    }
    return true;
  }
}
