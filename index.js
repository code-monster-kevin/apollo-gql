const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const products = [
    {
      img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
      title: 'Breakfast',
      author: 'jill111'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
      title: 'Burgers',
      author: 'director90'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
      title: 'Camera',
      author: 'Danson67'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
      title: 'Morning',
      author: 'fancycrave1'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
      title: 'Hats',
      author: 'Hans'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
      title: 'Honey',
      author: 'fancycravel'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
      title: 'Vegetables',
      author: 'jill111'
    },
    {
      img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
      title: 'Water Plant',
      author: 'Bkrtmad'
    }
  ];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Product" type can be used in other type declarations.
  type Product {
    img: String
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    products: [Product]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve products from the "products" array above.
const resolvers = {
    Query: {
      products: () => products,
    },
  };
  
  // In the most basic sense, the ApolloServer can be started
  // by passing type definitions (typeDefs) and the resolvers
  // responsible for fetching the data for those types.
  const server = new ApolloServer({ typeDefs, resolvers });
  
  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });