import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $searchKeyword: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(
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
