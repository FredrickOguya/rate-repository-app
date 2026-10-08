import { View, Text, StyleSheet } from "react-native"
import theme from "../themes"
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    ratingContainer: {
        margin: 15,
        width: 50,
        height: 50,
        borderColor: theme.colors.primary,
        borderWidth: 3,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
        },
    rating: {
        fontWeight: 'bold'
    },
    content: {
        margin: 10
    },
    username: {
        fontWeight: 'bold',
    },
    date: {
        marginBottom: 5
    },
    text: {

    }
})
const ReviewItem = ({review}) => {

    const date = new Date(review.createdAt)
    return <View style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                    {review.rating}
                </Text>
            </View>
            <View style={styles.content}>
                    <Text style={styles.username}>
                    {review.user.username}
                    </Text>
                    <Text style={styles.date}>
                        {date.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })}
                    </Text>
                    <Text style={styles.text}>
                        {review.text}
                    </Text>
            </View>

    </View>
}

export default ReviewItem