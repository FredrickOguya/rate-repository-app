import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

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
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to="/" component={Pressable} style={styles.tab}>
                    <Text style={styles.tabText}>Repositories</Text>
                </Link>

                <Link to="/signin" component={Pressable} style={styles.tab}>
                    <Text style={styles.tabText}>Sign in</Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;