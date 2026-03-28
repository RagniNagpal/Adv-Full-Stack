// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// let posts = [
//   { id: "1", title: "First Post", content: "Hello World!", likes: 10 },
//   { id: "2", title: "Second Post", content: "GraphQL is cool", likes: 5 }
// ];

// const typeDefs = `#graphql
//   # Post type
//   type Post {
//     id: ID!
//     title: String
//     content: String
//     likes: Int
//   }

//   # Queries
//   type Query {
//     Posts: [Post]           # return all posts
//     Post(id: ID!): Post     # return single post by id
//   }

//   # Mutations
//   type Mutation {
//     addPost(title: String!, content: String!, likes: Int = 0): Post
//     deletePost(id: ID!): String
//     updatePost(id: ID!, title: String, content: String, likes: Int): Post
//     setLikes(id: ID!, value: Int!): Post
//     incrementLikes(id: ID!, by: Int = 1): Post
//   }
// `;

// const resolvers = {
//   Query: {
//     // Get all posts
//     Posts: () => posts,

//     // Get single post by id
//     Post: (_, args) => posts.find(p => p.id === args.id)
//   },

//   Mutation: {
//     // Add new post
//     addPost: (_, args) => {
//       const newPost = {
//         id: (posts.length + 1).toString(),
//         title: args.title,
//         content: args.content,
//         likes: args.likes
//       };
//       posts.push(newPost);
//       return newPost;
//     },

//     // Delete post by id
//     deletePost: (_, args) => {
//       const beforeSize = posts.length;
//       posts = posts.filter(p => p.id !== args.id);
//       return posts.length < beforeSize ? "Post deleted successfully" : "Post not found";
//     },

//     // Update post (partial update possible)
//     updatePost: (_, args) => {
//       const post = posts.find(p => p.id === args.id);
//       if (!post) return null;

//       if (args.title !== undefined) post.title = args.title;
//       if (args.content !== undefined) post.content = args.content;
//       if (args.likes !== undefined) post.likes = args.likes;

//       return post;
//     },

//     setLikes: (_, args) => {
//       const post = posts.find(p => p.id === args.id);
//       if (!post) return null;

//       post.likes = args.value;
//       return post;
//     },

//     incrementLikes: (_, args) => {
//       const post = posts.find(p => p.id === args.id);
//       if (!post) return null;

//       post.likes += args.by;
//       return post;
//     }
//   }
// };


// const server = new ApolloServer({ typeDefs, resolvers });

// async function startServer() {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 }
//   });

//   console.log(`🚀 Server ready at ${url}`);
// }

// startServer();


// import { ApolloServer } from '@apollo/server';     // helps in creating apolo server for graphQL
// import { startStandaloneServer } from '@apollo/server/standalone';

// let users=[
//     {
//         id:"1",          
//         name:"ragni",
//         email:"ragni@gmail.com",
//         phone:12345678
//     },
//      {
//         id:"2",
//         name:"vamika",
//         email:"vamika@gmail.com",
//         phone:12345678
//     },
//      {
//         id:"3",
//         name:"vanshika",
//         email:"vanshika@gmail.com",
//         phone:12345678
//     },
//      {
//         id:"4",
//         name:"ttttt",
//         email:"ttttt@gmail.com",
//         phone:12345678
//     }
// ]

// let posts=[{
//     postId:"1",
//     likes:5,
//     content:"asdfghjk"
    
// },
// {
//     postId:"2",
//     likes:12,
//     content:"dfghjklkjhgk"
// },
// {
//     postId:"3",
//     likes:35,
//     content:"lkjgdchkvgkhlgfjhxg"
// }
// ]

// const typeDefs=`
//     # enitity schema
//     type User{
//         id:ID!        #ID is the type and ! is for not null
//         name:String,
//         email:String,
//         phone:Int
//     }
//         type Post{
//         postId:ID!,
//         likes:Int,
//         content:String
//         }

//         #query type
//         type Query{
//             Users:[User],
//             User(id:ID!):User,         #id is an argument which will be provided by user
//             getAllPosts:[Post],
//             getPost(id:ID!):Post,
//         }
//         type Mutation{
//             addUser(id:ID!, name:String, email:String, phone:Int):User,
//             deleteUser(id:ID!):User,
//             updateUser(id:ID!, name:String, email:String, phone:Int):User,   
//             addPost(postId:ID!, likes:Int, content:String):Post,
//             deletePost(postId:ID!):Post,
//             updatePost(postId:ID!, likes:Int, content:String):Post


//         }
// `
// const resolvers={
//     Query:{
//         Users:()=>{
//             // dbCall=>dtata=>[users]
//             return users;
//         },
//         // resolver function has four arguments which are optional .There position are fixed as written
//         // parent,args,context,info
//         // args->arguments
//         // imagine args--->props-->{name:"vivek",id:"1"}
//         //_-->parent
//         User:(_,args)=>{
//             return users.find((u)=>u.id===args.id);
//         },
//         // to check this
//         // query userQuery($userId: ID!){
//         // User(id: $userId) {
//         //  name
    
//         // }
//         // }

//         // or

//         // query userQuery{
//         //     User(id:"1"){
//         //         name
//         //     }
//         // }

//         getAllPosts:()=>{
//             return posts; 
//         },

//         getPost:(_,args)=>{
//             let{postId}=args;
//             return posts.find((p)=>p.id===postId);
//         }
//     },

//     // resolver for mutation
//     Mutation:{
//         addUser:(_, args)=>{
//             let{id, name, email, phone}=args;
//             users.push({id, name, email, phone});
//             return users[users.length-1];
//         },

//         // To delete that user we first find out the index for that id usinf findIndex function 
//         // then use splice method to delete that index.
//         deleteUser:(_, args)=>{
//             let{id}=args;
//             const index = users.findIndex(user => user.id === id);
//             const deletedUser = users[index];
//         users.splice(index, 1);

//         return deletedUser;

            
//         },

//         updateUser:(_, args)=>{
//             let{id, name, email, phone}=args;
//             const user=users.find((u)=>u.id==id);
//              if (name) user.name = name;
//             if (email) user.email = email;
//             if (phone) user.phone = phone;

//             return user;
//         },
//         addPost:(_, args)=>{
//             let{postId, likes, content}=args;
//             posts.push({postId:postId, likes:likes, content:content});
//             return posts[posts.length-1];
//         },
//         deletePost:(_, args)=>{
//             let{postId}=args;
//             let index=posts.findIndex(p=>p.postId=postId);
//             const deletedPost=posts[index];
//             posts.splice(index,1);
//             return deletedPost;
//         },
//         updatePost:(_,args)=>{
//             let{postId, likes, content}=args;
//             const post=posts.find((p)=>p.postId=postId);
//             if(likes) posts.likes=likes;
//             if(content) posts.content=content;
//             return post;
//         }
//     }
// }



// // The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);


import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


// ---------------- USERS DATA ----------------
let users = [
  { id: "1", name: "ragni", email: "ragni@gmail.com", phone: 12345678 },
  { id: "2", name: "vamika", email: "vamika@gmail.com", phone: 12345678 },
  { id: "3", name: "vanshika", email: "vanshika@gmail.com", phone: 12345678 }
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
  posts: [Post]   # One user → many posts
}

type Post{
  postId: ID!
  userId: ID!
  likes: Int
  content: String
}

type Query{
  Users: [User]
  User(id: ID!): User

  getAllPosts: [Post]
  getPost(postId: ID!): Post
}

type Mutation{
  addUser(id: ID!, name: String, email: String, phone: Int): User
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

    // Get all users
    Users: () => {
      return users;
    },

    // Get single user
    User: (_, args) => {
      return users.find(u => u.id === args.id);
    },

    // Get all posts
    getAllPosts: () => {
      return posts;
    },

    // Get single post
    getPost: (_, args) => {
      return posts.find(p => p.postId === args.postId);
    }
  },


  // ----------- RELATION RESOLVER -----------
  User: {

    // One user → many posts
    posts: (parent) => {
      return posts.filter(p => p.userId === parent.id);
    }
  },


  Mutation: {

    // Add User
    addUser: (_, args) => {

      const { id, name, email, phone } = args;

      users.push({ id, name, email, phone });

      return users[users.length - 1];
    },


    // Delete User
    deleteUser: (_, args) => {

      const index = users.findIndex(u => u.id === args.id);

      const deletedUser = users[index];

      users.splice(index, 1);

      return deletedUser;
    },


    // Update User
    updateUser: (_, args) => {

      const { id, name, email, phone } = args;

      const user = users.find(u => u.id === id);

      if (!user) return null;

      if (name) user.name = name;
      if (email) user.email = email;
      if (phone) user.phone = phone;

      return user;
    },


    // Add Post
    addPost: (_, args) => {

      const { postId, userId, likes, content } = args;

      posts.push({ postId, userId, likes, content });

      return posts[posts.length - 1];
    },


    // Delete Post
    deletePost: (_, args) => {

      const index = posts.findIndex(p => p.postId === args.postId);

      const deletedPost = posts[index];

      posts.splice(index, 1);

      return deletedPost;
    },


    // Update Post
    updatePost: (_, args) => {

      const { postId, likes, content } = args;

      const post = posts.find(p => p.postId === postId);

      if (!post) return null;

      if (likes !== undefined) post.likes = likes;
      if (content) post.content = content;

      return post;
    }
  }

};


// ---------------- SERVER ----------------
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// Start Server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);