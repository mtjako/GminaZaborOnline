import { ApolloClient, InMemoryCache, createHttpLink, gql, useQuery } from "@apollo/client";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    },
};

const cache = new InMemoryCache({
    resultCaching: false,
});

const link = createHttpLink({
    // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
    uri: "https://admin.gminazabor.info/graphql",
});

export const client = new ApolloClient({
    cache,
    link,
    defaultOptions: defaultOptions,
});

//--- QUERIES ---

const ALLPOSTS = gql`
query getAllPosts($town: String!) {
  posts (where: {categoryName: $town}){
    nodes {
      title
      slug
      databaseId
      featuredImage {
        node {
          srcSet(size: POST_THUMBNAIL)
        }
      }
      author {
        node {
          name
          url
          avatar {
            url
          }
          roles {
            nodes {
              name
            }
          }
        }
      }
      date
    }
  }
}
`

export async function getAllPosts(town){
    const {data, loading, error} = await client.query({
      variables: {
        town
      },
      query: ALLPOSTS
    });
    return data.posts.nodes;
}

const POST = gql`
query getPost($slug: ID!) {
  post(idType: SLUG, id: $slug) {
    title
    slug
    content
    categories {
      nodes {
        name
      }
    }
    featuredImage {
      node {
        srcSet
      }
    }
  }
}
`;

export async function getPost(slug){
    const {data, loading, error} = await client.query({
        variables: {
          slug
        },
        query: POST
    });
    return data.post;
}