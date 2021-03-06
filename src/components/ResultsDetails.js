import React , {useState } from "react";
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
  return (
  <View style={styles.container}>
  <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
    <Text style={styles.nameStyle}>{result.name}</Text>
    <Text style={styles.ratingStyle}>{result.rating}, Stars, {result.review_count} Reviews</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  ratingStyle: {}
});

export default ResultsDetails;