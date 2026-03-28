import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let users=[
  {
    name:"ragni",
    email:"rags@gamil.com",
    phone:1234567890
  },
  {
     name:"vamika",
    email:"vamika@gamil.com",
    phone:1234567891
  },
   {
     name:"vanshika",
    email:"vanshika@gamil.com",
    phone:1234567811
   }
]

const typeDefs=`
  type User{
    name:String
    email:String
    phone:Int
  }
    type Query{
      Users:[User]          
    }
`

const resolvers={
  Query:{
    Users:()=>{
      return users;
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready `);