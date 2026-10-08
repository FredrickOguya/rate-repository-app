import { gql } from "@apollo/client";

const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput!){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;

const CREATE_USER = gql`
    mutation CreateUser($user: CreateUserInput!) {
        createUser(user: $user) {
            id
            username
        }
    }
`;

export {
   AUTHENTICATE,
   CREATE_REVIEW,
   CREATE_USER
}