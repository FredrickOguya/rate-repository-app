import {   FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from '../hooks/useRepository'
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { useState } from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
})

const ItemSeparator = () => <View style={styles.separator}></View>

const SingleRepository = () => {
    const { id } = useParams();

    const { 
        repository, 
        loading, 
        fetchMore 
    } = useRepository(id);

    const [loadingMore, setLoadingMore] = useState(false);


    if (loading) {
        return <View />
    }

    if(!repository) {
        return <View />
    }

    const reviews = repository.reviews.edges.map(edge => edge.node);

    const pageInfo = repository.reviews.pageInfo;

    const onEndReach = async () => {
        if (!pageInfo.hasNextPage || loadingMore){
            return;
        }

        setLoadingMore(true)

        try {
            await fetchMore({
                variables:{
                    id,
                    first: 2,
                    after: pageInfo.endCursor,
                },
            });
        } finally {
            setLoadingMore(false)
        }
    }


    return (         
        <FlatList
            data={reviews}
            renderItem={({item}) => (
                <ReviewItem review={item} />
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <RepositoryItem
                    repository={repository}
                    showGitHubButton={true} 
                />
            }
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default SingleRepository;

