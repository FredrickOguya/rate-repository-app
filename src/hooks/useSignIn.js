import { useApolloClient, useMutation } from "@apollo/client/react"
import { AUTHENTICATE } from "../graphql/mutations"
import AuthStorage from "../utils/authStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
    const authStorage = new AuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const response = await mutate({
            variables: {
                credentials: {
                    username,
                    password
                },
            },
        });
        

        const { accessToken } = response.data.authenticate;

        await authStorage.setAccessToken(accessToken);
        await apolloClient.resetStore();

        return response;
    };

    return [signIn, result];
}

export default useSignIn;