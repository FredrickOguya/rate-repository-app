import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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
  const [orderBy, setOrderBy ] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC')

  const { repositories } = useRepositories({orderBy,orderDirection});

  return (
    <>
      <Picker 
        onValueChange={(value) => {
          if (value === 'latest'){
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
          }
          if (value === 'highest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC')
          }
          if (value === 'lowest') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC')
        }
          
        }}
      >
        <Picker.Item label="Select an Item..." style={{color: 'grey'}}/>
        <Picker.Item label="Latest Repositories" value="latest"/>
        <Picker.Item label="Highest rated repositories" value="highest"/>
        <Picker.Item label="Lowest rated repositories" value="lowest"/>
      </Picker>
      <RepositoryList repositories={repositories} />
    </>
  )
};

export { RepositoryList };

export default RepositoryListContainer;