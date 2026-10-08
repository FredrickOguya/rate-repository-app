import {   View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from '../hooks/useRepository'
import RepositoryItem from "./RepositoryItem";

const SingleRepository = () => {
    const { id } = useParams();

    const { repository, loading } = useRepository(id)

    if (loading) {
        return <View />
    }

    if(!repository) {
        return <View />
    }



    return (
        <View>
            <RepositoryItem
             repository={repository}
             showGitHubButton={true} 
            />

            
        </View>
    )
}

export default SingleRepository;

