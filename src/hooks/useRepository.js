import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
    const { 
        data,
        error,  
        loading, 
        refetch,
        fetchMore,
    } = useQuery(GET_REPOSITORY, {
        variables: {
             id,
             first: 2,
             after: null, 
            },
        fetchPolicy: 'cache-and-network',
    });

    const repository = data?.repository;

    return {
        repository, 
        loading, 
        refetch, 
        error,
        fetchMore,
    };
}

export default useRepository;