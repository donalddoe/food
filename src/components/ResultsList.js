import React , {useState } from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";
import Spinner from "./Animation";

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={10}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow', {id: item.id})}}>
          <ResultsDetails result={item} />
          </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15, 
    marginBottom: 5

  }
});

export default withNavigation(ResultsList);