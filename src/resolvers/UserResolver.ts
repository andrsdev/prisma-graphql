import { User } from 'src/entities/User';
import { Resolver, Query } from 'type-graphql';

@Resolver(User)
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'world';
  }
}
