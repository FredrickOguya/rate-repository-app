import { StyleSheet, View, Text, Image, Pressable, Linking } from 'react-native';
import theme from '../themes';

const formatCount = (count) => {
    if (count < 1000) {
        return count.toString();
    }

    return `${(count / 1000).toFixed(1)}k`;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
    },
    top: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    content: {
        flex: 1,
        marginLeft: 15,
    },
    repositoryName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        marginBottom: 10,
    },
    language: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        color: 'white',
        padding: 5,
        borderRadius: 4,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    stat: {
        alignItems: 'center',
    },
    statValue: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const RepositoryItem = ({ repository, showGitHubButton = true }) => {
    return (
        <View testID='repositoryItem' style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.avatar}
                    source={{ uri: repository.ownerAvatarUrl }}
                />

                <View style={styles.content}>
                    <Text style={styles.repositoryName}>
                        {repository.fullName}
                    </Text>

                    <Text style={styles.description}>
                        {repository.description}
                    </Text>

                    <Text style={styles.language}>
                        {repository.language}
                    </Text>
                </View>
            </View>

            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={styles.statValue}>
                        {formatCount(repository.stargazersCount)}
                    </Text>
                    <Text>Stars</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statValue}>
                        {formatCount(repository.forksCount)}
                    </Text>
                    <Text>Forks</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statValue}>
                        {repository.reviewCount}
                    </Text>
                    <Text>Reviews</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statValue}>
                        {repository.ratingAverage}
                    </Text>
                    <Text>Rating</Text>
                </View>
            </View>
             {showGitHubButton && (
                <Pressable 
                    style={styles.button}
                    onPress={() => Linking.openURL(repository.url)}
                >
                        
                <Text style={styles.buttonText}>open in Github</Text>
                </Pressable>
            )}
        </View>
    );
};



export default RepositoryItem;