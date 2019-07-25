import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class AppResolver {

    @Query()
    hello(): string {
        return `hello`
    }
}