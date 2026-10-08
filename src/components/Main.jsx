import {  StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import  RepositoryListContainer  from './RepositoryList';

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
                 element={<RepositoryListContainer />}
                />


                <Route
                 path='/signin'
                 element={<SignIn />}
                />

                <Route
                 path='/repositories/:id'
                 element={<SingleRepository />}
                />
            </Routes>
            
        </View>
    );
};

export default Main;

