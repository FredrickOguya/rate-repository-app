import {   FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from '../hooks/useRepository'
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
})

const ItemSeparator = () => <View style={styles.separator}></View>

const SingleRepository = () => {
    const { id } = useParams();

    const { repository, loading } = useRepository(id)

    if (loading) {
        return <View />
    }

    if(!repository) {
        return <View />
    }

    const reviews = repository.reviews.edges.map(edge => edge.node)


    return (         
        <FlatList
            data={reviews}
            renderItem={({item}) => (
                <ReviewItem review={item} />
            )}
            ListHeaderComponent={
                <RepositoryItem
                    repository={repository}
                    showGitHubButton={true} 
                />
            }
            ItemSeparatorComponent={ItemSeparator}
        />
    )
}

export default SingleRepository;

