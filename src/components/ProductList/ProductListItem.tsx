import { StyleSheet,View, Image, Text, Pressable,Button, Alert } from "react-native";
import { Product } from "../../types";
import { Link } from "expo-router";
import React from "react";

export const defaultPizzaImage =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product : Product;
};



const ProductListItem = ({product}:ProductListItemProps)=>{
    return(
        <Link href={`/${product.id}`} asChild>
          <Pressable  style={styles.container}>
            <Image source={{uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{product.id}</Text>
            <Button onPress={()=>{
              Alert.alert('Alert Title', 'My Alert Msg', [
                {
                  text: 'Ask',
                  onPress: () => console.log('Ask '),
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                {text: 'aOK', onPress: () => console.log('->OK Pressed')},
              ]);
            }} style={styles.title} title={product.name} />
          </Pressable>
        </Link>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      padding:10,
      borderRadius:20,
      maxWidth: '50%'
    },
    image:{
      width:'90%',
      aspectRatio: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  

  export default ProductListItem;