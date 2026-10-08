import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client/react';
import { ME } from '../graphql/queries';
import AuthStorage from '../utils/authStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
    },
    tab: {
        padding: 15,
    },
    tabText: {
        color: 'white',
        fontSize: 16,
    },
});

const AppBar = () => {
    const { data } = useQuery(ME)
    const apolloClient = useApolloClient();
    const authStorage = new AuthStorage();

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/" component={Pressable} style={styles.tab}>
                    <Text style={styles.tabText}>Repositories</Text>
                </Link>

                

                {data?.me ? (
                    <>
                        <Link to={"/createreview" } component={Pressable} style={styles.tab}>
                            <Text style={styles.tabText}>Create Review</Text>
                        </Link>
                        <Pressable onPress={signOut} style={styles.tab}>
                            <Text style={styles.tabText}>Sign out</Text>
                        </Pressable>

                    </>
                    
                ) : (
                    <>
                    <Link to="/signin" component={Pressable} style={styles.tab}>
                        <Text style={styles.tabText}>Sign in</Text>
                    </Link>
                    <Link to="/signup" component={Pressable} style={styles.tab}>
                        <Text style={styles.tabText}>Sign up</Text>
                    </Link>
                    </>
                    
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;