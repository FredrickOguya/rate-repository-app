import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  first = 5,
  searchKeyword, 
  orderBy, 
  orderDirection 
}) => {
  const variables = {
    first,
    searchKeyword,
    orderBy,
    orderDirection
  };

  const { 
    data, 
    loading, 
    fetchMore, 
    ...result  
  } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if(!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
        
      }
    })
  }


  return {
    repositories: data?.repositories,
    fetchMore,
    handleFetchMore,
    loading,
    result
  };
};

export default useRepositories;