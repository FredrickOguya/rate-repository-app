import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges{
            node {
                id
                fullName
                description
                language
                forksCount
                stargazersCount
                ratingAverage
                reviewCount
                ownerAvatarUrl
                url
            }
        }
    }
}
`;

export const ME = gql`
    query {
        me{
            id,
            username
        }
    }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      reviews {
        edges {
            node {
                text
                rating
                createdAt
                user {
                    username
                }
            }
        }
      }
    }
  }
`;
