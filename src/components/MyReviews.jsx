import { useQuery } from "@apollo/client/react";
import { FlatList, Text, View } from "react-native";
import ReviewItem from "./ReviewItem";
import { ME } from "../graphql/queries";

const ItemSeparator = () => <View style={{height: 10}} />;

const MyReviews = () => {
    const { data, loading } = useQuery(ME,{
        variables: {
            includeReviews: true,
        }

        
    })
    if(loading) {
        return <Text>Loading</Text>
    }

    const reviewNodes = data?.me?.reviews ? data.me.reviews.edges.map(edge => edge.node) : []
    return (
        <FlatList
            data={reviewNodes}
            renderItem={({item}) => <ReviewItem review={item}/>}
            ItemSeparatorComponent={ItemSeparator}
        />
    )
        

}

export default MyReviews;