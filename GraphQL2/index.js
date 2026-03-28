import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// In-memory "database"
let users = [
  { id: "1", name: "ragni", email: "rags@gmail.com", phone: 1234567890 },
  { id: "2", name: "vamika", email: "vamika@gmail.com", phone: 1234567891 },
  { id: "3", name: "vanshika", email: "vanshika@gmail.com", phone: 1234567811 }
];

// GraphQL Schema
const typeDefs = `#graphql
  # User type
  type User {
    id: ID!        # ! means field cannot be null
    name: String
    email: String
    phone: Int
  }

  # Queries
  type Query {
    Users: [User]           # return all users
    User(id: ID!): User     # return single user by id
  }

  # Mutations
  type Mutation {
    addUser(name: String!, email: String!, phone: Int!): User
    deleteUser(id: ID!): String
    updateUser(id: ID!, name: String, email: String, phone: Int): User
  }
`;

// Resolvers
const resolvers = {

  Query: {

    // Get all users
    Users: () => {
      return users;
    },

    // Get a single user by id
    User: (_, args) => {
      return users.find(u => u.id === args.id);
    }

  },

  Mutation: {

    // Add new user
    addUser: (_, args) => {
      // Push new user into array
      users.push({
        id: String(users.length + 1),  // generate new id
        name: args.name,
        email: args.email,
        phone: args.phone
      });

      // Return last inserted user
      return users[users.length - 1];
    },

    // Delete user by id
    deleteUser: (_, args) => {
      // Keep all users except the one with matching id
      users = users.filter(u => u.id !== args.id);
      return "User deleted successfully";
    },

    // Update user (partial update possible)
    updateUser: (_, args) => {
      // Find user by id
      const user = users.find(u => u.id === args.id);

      // If user not found, return null
      if (!user) return null;

      // Update only fields provided
      if (args.name !== undefined) user.name = args.name;
      if (args.email !== undefined) user.email = args.email;
      if (args.phone !== undefined) user.phone = args.phone;

      // Return updated user
      return user;
    }

  }
};

// Start Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 Server ready at ${url}`);
}

// Run server
startServer();