import Constants from 'expo-constants'
import { StyleSheet, View,Text } from "react-native"


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
    },
});
const RepositoryItem = ({ repository }) => {
    return (
        <View style={styles.container}>
            <Text>
                Full name: {repository.fullName}
            </Text>
            <Text>
                Description: {repository.description}
            </Text>
            <Text>
                Language: {repository.language}
            </Text>
            <Text>
                Stars: {repository.stargazersCount}
            </Text>
            <Text>
               Forks: {repository.forksCount}
            </Text>     
            <Text>
               Reviews: {repository.reviewCount}
            </Text>
            <Text>
               Rating: {repository.ratingAverage}
            </Text>
        </View>
    )
}

export default RepositoryItem;

