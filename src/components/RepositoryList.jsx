import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 10,
    height: 5
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryListContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { repositories } = useRepositories(searchKeyword);
  return <>
    <TextInput
      style={styles.searchInput}
      value={searchKeyword}
      onChangeText={setSearchKeyword}
    />
    <RepositoryList repositories={repositories} />
  </> 
};

export { RepositoryList };

export default RepositoryListContainer;