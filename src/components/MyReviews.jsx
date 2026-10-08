import { useMutation, useQuery } from "@apollo/client/react";
import { FlatList, Text, View, Alert, Pressable, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";
import { ME } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  actions: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    gap: 10
  },

  button: {
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    width: 'auto'
  },

  viewButton: {
    backgroundColor: '#2563eb',
  },

  deleteButton: {
    backgroundColor: '#dc2626',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const ItemSeparator = () => <View style={{height: 10}} />;

const MyReviews = () => {
    const { data, loading, refetch } = useQuery(ME,{
        variables: {
            includeReviews: true,
        },


        
    })
    const navigate = useNavigate()
    const [deleteReview] = useMutation(DELETE_REVIEW)
    const confirmDelete = (review) => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        deleteReview({
                            variables: {
                                id: review.id
                            },
                        });

                        await refetch();
                    }
                }
            ]
        )
    }
    if(loading) {
        return <Text>Loading</Text>
    }

    const reviewNodes = data?.me?.reviews ? data.me.reviews.edges.map(edge => edge.node) : []
    return (
        <FlatList
            data={reviewNodes}
            renderItem={({item}) =>(
                <View >
                    <ReviewItem review={item}/>
                    <View style={styles.actions}>
                       <Pressable style={[styles.button, styles.viewButton]} onPress={() => navigate(`/repositories/${item.repository.id}`)}>
                            <Text style={styles.buttonText}>View repository</Text>
                        </Pressable>

                        <Pressable style={[styles.button,styles.deleteButton]} onPress={() => confirmDelete(item)}>
                            <Text style={styles.buttonText}>Delete review</Text>
                        </Pressable> 
                    </View>
                    
                </View>
                 
                )}
            ItemSeparatorComponent={ItemSeparator}
        />
    )
        

}

export default MyReviews;