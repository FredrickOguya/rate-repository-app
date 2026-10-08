import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
    const { data,error,  loading, refetch } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    const repository = data?.repository;

    return { repository, loading, refetch, error };
}

export default useRepository;