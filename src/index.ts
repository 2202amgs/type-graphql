import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import * as Express from 'express';
import { createConnection } from 'typeorm';


@Resolver()
class HelloResplver {
    @Query(() => String)
    async hello() {
        return 'Hello World'
    }
}

const main = async () => {
    await createConnection();
    const schema = await buildSchema({
        resolvers: [HelloResplver],
    });

    const apollo = new ApolloServer({schema});

    const app = Express();
    
    await apollo.start();

    apollo.applyMiddleware({app});

    app.listen(4000, ()=>{
        console.log('Server is runing on port: 4000');
    });
}

main();