import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import createApolloClient from "./src/utils/apolloClient";
import {ApolloProvider} from '@apollo/client/react'

const apolloClient = createApolloClient();

const App = () => {
  return(
    <>
        <StatusBar style="auto"/>
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                 <Main />
            </ApolloProvider>
        </NativeRouter>
    </>
);
};

export default App;