import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const books=[
  {title:"physics by Ragni"},
  {title:"physics by Vamika"},
  {title:"physics by Vanshika"},
  {
    title:"physics by Riya"
  }
]

const authors=[
  {
    name:"Ragni"
  },
   {
    name:"Vamika"
  },
   {
    name:"Vanshika"
  }
]

const typeDefs = `
union SearchResult = Book | Author

type Book {
  title: String!
}

type Author {
  name: String!
}

type Query {
  search(contains: String): [SearchResult!]
}
`;  

const resolvers = {
  SearchResult:{
     __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
   search: (parent, args) => {
  let { contains } = args;
  let result = [];

  for (let i = 0; i < books.length; i++) {

    let bookName = books[i].title.split("by ")[1];

    for (let j = 0; j < authors.length; j++) {

      if (bookName === authors[j].name) {

        if (
          books[i].title.includes(contains) ||
          authors[j].name.includes(contains)
        ) {
          result.push(books[i]);
          result.push(authors[j]);
        }
      }
    }
  }

  return result;
}
  }
};

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server started");