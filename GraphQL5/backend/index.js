import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Dummy data
let users = [
  { id: "1", name: "Ragni", age: 21 },
  { id: "2", name: "Nagpal", age: 22 },
];

// Schema
const typeDefs = `
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    hello: String
    users: [User]
  }

  type Mutation {
    addUser(name: String, age: Int): User
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL 🚀",
    users: () => users,
  },

  Mutation: {
    addUser: (_, { name, age }) => {
      const newUser = {
        id: Date.now().toString(),
        name,
        age,
      };

      users.push(newUser);
      return newUser;
    },
  },
};

// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});