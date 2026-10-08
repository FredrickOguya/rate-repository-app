import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({orderBy, orderDirection}) => {
    const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
        variables: {
            orderBy,
            orderDirection
        },
        fetchPolicy: 'cache-and-network',
    });

    const repositories = data?.repositories || { edges: [] };

    return {
        repositories,
        loading,
        refetch
    };
};



export default useRepositories;