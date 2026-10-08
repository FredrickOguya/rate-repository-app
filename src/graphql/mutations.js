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

export {
   AUTHENTICATE,
   CREATE_REVIEW
}