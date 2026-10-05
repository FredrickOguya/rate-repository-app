import { gql } from "@apollo/client";

const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput!){
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;

export {
   AUTHENTICATE
}