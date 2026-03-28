import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let posts = [
  { id: "1", title: "First Post", content: "Hello World!", likes: 10 },
  { id: "2", title: "Second Post", content: "GraphQL is cool", likes: 5 }
];

const typeDefs = `#graphql
  # Post type
  type Post {
    id: ID!
    title: String
    content: String
    likes: Int
  }

  # Queries
  type Query {
    Posts: [Post]           # return all posts
    Post(id: ID!): Post     # return single post by id
  }

  # Mutations
  type Mutation {
    addPost(title: String!, content: String!, likes: Int = 0): Post
    deletePost(id: ID!): String
    updatePost(id: ID!, title: String, content: String, likes: Int): Post
    setLikes(id: ID!, value: Int!): Post
    incrementLikes(id: ID!, by: Int = 1): Post
  }
`;

const resolvers = {
  Query: {
    // Get all posts
    Posts: () => posts,

    // Get single post by id
    Post: (_, args) => posts.find(p => p.id === args.id)
  },

  Mutation: {
    // Add new post
    addPost: (_, args) => {
      const newPost = {
        id: (posts.length + 1).toString(),
        title: args.title,
        content: args.content,
        likes: args.likes
      };
      posts.push(newPost);
      return newPost;
    },

    // Delete post by id
    deletePost: (_, args) => {
      const beforeSize = posts.length;
      posts = posts.filter(p => p.id !== args.id);
      return posts.length < beforeSize ? "Post deleted successfully" : "Post not found";
    },

    // Update post (partial update possible)
    updatePost: (_, args) => {
      const post = posts.find(p => p.id === args.id);
      if (!post) return null;

      if (args.title !== undefined) post.title = args.title;
      if (args.content !== undefined) post.content = args.content;
      if (args.likes !== undefined) post.likes = args.likes;

      return post;
    },

    setLikes: (_, args) => {
      const post = posts.find(p => p.id === args.id);
      if (!post) return null;

      post.likes = args.value;
      return post;
    },

    incrementLikes: (_, args) => {
      const post = posts.find(p => p.id === args.id);
      if (!post) return null;

      post.likes += args.by;
      return post;
    }
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();