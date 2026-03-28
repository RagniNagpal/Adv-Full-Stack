// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import jwt from "jsonwebtoken";

// //SECRET 
// const SECRET = "Ragni";

// // USERS DATA 
// let users = [
//   { id: "1", name: "ragni", email: "ragni@gmail.com", phone: 12345678, password: "123" },
//   { id: "2", name: "vamika", email: "vamika@gmail.com", phone: 12345678, password: "123" },
//   { id: "3", name: "vanshika", email: "vanshika@gmail.com", phone: 12345678, password: "123" }
// ];

// // POSTS DATA 
// let posts = [
//   { postId: "1", userId: "1", likes: 5, content: "First Post" },
//   { postId: "2", userId: "1", likes: 10, content: "Second Post" },
//   { postId: "3", userId: "2", likes: 7, content: "GraphQL Post" }
// ];

// //SCHEMA 
// const typeDefs = `#graphql

// type User{
//   id: ID!
//   name: String
//   email: String
//   phone: Int
//   password: String
//   posts: [Post]
// }

// type Post{
//   postId: ID!
//   userId: ID!
//   likes: Int
//   content: String
//   user: User
// }

// type Query{
//   Users: [User]
//   User(id: ID!): User

//   getAllPosts: [Post]
//   getPost(postId: ID!): Post
// }

// type Mutation{
//   addUser(id: ID!, name: String, email: String, phone: Int, password: String): User
//   login(email: String!, password: String!): String

//   deleteUser(id: ID!): User
//   updateUser(id: ID!, name: String, email: String, phone: Int): User

//   addPost(postId: ID!, userId: ID!, likes: Int, content: String): Post
//   deletePost(postId: ID!): Post
//   updatePost(postId: ID!, likes: Int, content: String): Post
// }
// `;

// // RESOLVERS 
// const resolvers = {

//   Query: {
//     Users: () => users,

//     User: (_, args) => {
//       return users.find(u => u.id === args.id);
//     },

//     getAllPosts: () => posts,

//     getPost: (_, args) => {
//       return posts.find(p => p.postId === args.postId);
//     }
//   },

//   //  RELATIONS 
//   User: {
//     posts: (parent) => {
//       return posts.filter(p => p.userId === parent.id);
//     }
//   },

//   Post: {
//     user: (parent) => {
//       return users.find(u => u.id === parent.userId);
//     }
//   },

//   Mutation: {

//     // LOGIN
//     login: (_, args) => {
//       const { email, password } = args;

//       const user = users.find(u => u.email === email);
//       if (!user) {
//         throw new Error("Email is wrong");
//       }

//       if (user.password !== password) {
//         throw new Error("Invalid password");
//       }

//       const token = jwt.sign({ id: user.id }, SECRET, {
//         expiresIn: "1h"
//       });

//       return token;
//     },

//     //  ADD USER
//     addUser: (_, args) => {
//       const { id, name, email, phone, password } = args;

//       const newUser = { id, name, email, phone, password };
//       users.push(newUser);

//       return newUser;
//     },

//     //  DELETE USER
//     deleteUser: (_, args) => {
//       const index = users.findIndex(u => u.id === args.id);

//       if (index === -1) return null;

//       const deletedUser = users[index];
//       users.splice(index, 1);

//       return deletedUser;
//     },

//     // UPDATE USER
//     updateUser: (_, args) => {
//       const { id, name, email, phone } = args;

//       const user = users.find(u => u.id === id);
//       if (!user) return null;

//       if (name !== undefined) user.name = name;
//       if (email !== undefined) user.email = email;
//       if (phone !== undefined) user.phone = phone;

//       return user;
//     },

//     //  ADD POST
//     addPost: (_, args) => {
//       const { postId, userId, likes, content } = args;

//       const newPost = { postId, userId, likes, content };
//       posts.push(newPost);

//       return newPost;
//     },

//     //  DELETE POST
//     deletePost: (_, args) => {
//       const index = posts.findIndex(p => p.postId === args.postId);

//       if (index === -1) return null;

//       const deletedPost = posts[index];
//       posts.splice(index, 1);

//       return deletedPost;
//     },

//     //  UPDATE POST
//     updatePost: (_, args) => {
//       const { postId, likes, content } = args;

//       const post = posts.find(p => p.postId === postId);
//       if (!post) return null;

//       if (likes !== undefined) post.likes = likes;
//       if (content !== undefined) post.content = content;

//       return post;
//     }
//   }
// };

// //  SERVER 
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Start Server
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀 Server ready at: ${url}`);




import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import jwt from "jsonwebtoken";

// ---------------- SECRET ----------------
const SECRET = "Ragni";

// ---------------- USERS DATA ----------------
let users = [
  { id: "1", name: "ragni", email: "ragni@gmail.com", phone: 12345678, password: "123" },
  { id: "2", name: "vamika", email: "vamika@gmail.com", phone: 12345678, password: "123" },
  { id: "3", name: "vanshika", email: "vanshika@gmail.com", phone: 12345678, password: "123" }
];

// ---------------- POSTS DATA ----------------
let posts = [
  { postId: "1", userId: "1", likes: 5, content: "First Post" },
  { postId: "2", userId: "1", likes: 10, content: "Second Post" },
  { postId: "3", userId: "2", likes: 7, content: "GraphQL Post" }
];

// ---------------- SCHEMA ----------------
const typeDefs = `#graphql

type User{
  id: ID!
  name: String
  email: String
  phone: Int
  password: String
  posts: [Post]
}

type Post{
  postId: ID!
  userId: ID!
  likes: Int
  content: String
  user: User
}

type Query{
  Users: [User]
  User(id: ID!): User

  getAllPosts: [Post]
  getPost(postId: ID!): Post
}

type Mutation{
  addUser(id: ID!, name: String, email: String, phone: Int, password: String): User
  login(email: String!, password: String!): String

  deleteUser(id: ID!): User
  updateUser(id: ID!, name: String, email: String, phone: Int): User

  addPost(postId: ID!, userId: ID!, likes: Int, content: String): Post
  deletePost(postId: ID!): Post
  updatePost(postId: ID!, likes: Int, content: String): Post
}
`;

// ---------------- RESOLVERS ----------------
const resolvers = {

  Query: {
    Users: () => users,

    User: (_, args) => users.find(u => u.id === args.id),

    getAllPosts: () => posts,

    getPost: (_, args) => posts.find(p => p.postId === args.postId)
  },

  // -------- RELATIONS --------
  User: {
    posts: (parent) => posts.filter(p => p.userId === parent.id)
  },

  Post: {
    user: (parent) => users.find(u => u.id === parent.userId)
  },

  Mutation: {

    // 🔐 LOGIN
    login: (_, args) => {
      const { email, password } = args;

      const user = users.find(u => u.email === email);
      if (!user) throw new Error("Email is wrong");

      if (user.password !== password) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ id: user.id }, SECRET, {
        expiresIn: "1h"
      });

      return token;
    },

    // ➕ ADD USER
    addUser: (_, args) => {
      const { id, name, email, phone, password } = args;

      const newUser = { id, name, email, phone, password };
      users.push(newUser);

      return newUser;
    },

    // ❌ DELETE USER
    deleteUser: (_, args, context) => {

      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const index = users.findIndex(u => u.id === args.id);
      if (index === -1) return null;

      const deletedUser = users[index];
      users.splice(index, 1);

      return deletedUser;
    },

    // 🔄 UPDATE USER
    updateUser: (_, args, context) => {

      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const { id, name, email, phone } = args;

      if (context.user.id !== id) {
        throw new Error("You can update only your account");
      }

      const user = users.find(u => u.id === id);
      if (!user) return null;

      if (name !== undefined) user.name = name;
      if (email !== undefined) user.email = email;
      if (phone !== undefined) user.phone = phone;

      return user;
    },

    // ➕ ADD POST (Protected)
    addPost: (_, args, context) => {

      if (!context.user) {
        throw new Error("Unauthorized - Please login");
      }

      const { postId, userId, likes, content } = args;

      if (context.user.id !== userId) {
        throw new Error("You can only create your own posts");
      }

      const newPost = { postId, userId, likes, content };
      posts.push(newPost);

      return newPost;
    },

    // ❌ DELETE POST (Owner only)
    deletePost: (_, args, context) => {

      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const post = posts.find(p => p.postId === args.postId);
      if (!post) return null;

      if (post.userId !== context.user.id) {
        throw new Error("Not allowed");
      }

      const index = posts.findIndex(p => p.postId === args.postId);
      posts.splice(index, 1);

      return post;
    },

    // 🔄 UPDATE POST (Owner only)
    updatePost: (_, args, context) => {

      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const { postId, likes, content } = args;

      const post = posts.find(p => p.postId === postId);
      if (!post) return null;

      if (post.userId !== context.user.id) {
        throw new Error("Not allowed");
      }

      if (likes !== undefined) post.likes = likes;
      if (content !== undefined) post.content = content;

      return post;
    }
  }
};

// ---------------- SERVER ----------------
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ---------------- CONTEXT (AUTH) ----------------
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },

  context: async ({ req }) => {
    const token = req.headers.authorization || "";

    if (!token) return { user: null };

    try {
      const decoded = jwt.verify(token, SECRET);
      return { user: decoded }; // { id }
    } catch {
      return { user: null };
    }
  }
});

console.log(`🚀 Server ready at: ${url}`);