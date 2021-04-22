import { User } from 'src/entities/User';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver(User)
export class UserResolver {
  @Query(() => String)
  hello(): string {
    return 'world';
  }

  //Testing eslint
  @Query(() => [User])
  async users(): Promise<User[]> {
    return prisma.user.findMany();
  }

  @Mutation(() => Boolean)
  async create(
    @Arg('name') name: string,
    @Arg('email') email: string
  ): Promise<boolean> {
    try {
      await prisma.user.create({
        data: {
          name: name,
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
