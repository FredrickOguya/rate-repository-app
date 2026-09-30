import {  StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e4e8'
    },
    language: {
        alignSelf: 'flex-start',
        backgroundColor: '#0366d6',
        padding: 5,
        borderRadius: 4
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route
                 path='/'
                 element={<RepositoryList />}
                />

                <Route
                 path='/signin'
                 element={<SignIn />}
                />
            </Routes>
            
        </View>
    );
};

export default Main;

