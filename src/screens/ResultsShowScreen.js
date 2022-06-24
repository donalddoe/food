import React ,{ useState, useEffect} from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import Spinner from "../components/Animation";


const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id')

  const getResult = async (id) => {
   const response = await yelp.get(`/${id}`);
   setResult(response.data);
  }

  useEffect(() => {
    getResult(id)
  }, []);


  if(!result) {
    return <Spinner />
  }
  return (
    <>
      <Text style={styles.nameStyle}>Location: {result.location ? result.location.address1: 'Location not known'}</Text>
    <Text  style={styles.nameStyle}>Tel: {result.display_phone}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({item}) => {
        
       return (
        <>
       <Image style={styles.image} source={{ uri: item }} />
       </>
       )
      }}
       />
    </>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200, 
    alignSelf: 'center',
    marginTop: 5
  },
  nameStyle: {
    textAlign: 'center',
    marginBottom: 5
  }
})

export default ResultsShowScreen;
