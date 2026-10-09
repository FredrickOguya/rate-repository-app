import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $first: Int!
    $after: String
    $searchKeyword: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(
      first: $first
      after: $after
      searchKeyword: $searchKeyword
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      edges {
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
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const ME = gql`
    query Me($includeReviews: Boolean = false){
        me{
            id
            username

            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        user {
                            username
                        }
                        id
                        repository {
                            id
                            fullName
                        }
                        createdAt
                        text
                        rating
                    }
                }
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
  query Repository(
    $id: ID!
    $first: Int!
    $after: String
  ) {
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
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

