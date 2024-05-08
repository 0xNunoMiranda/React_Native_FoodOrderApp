import { useLocalSearchParams } from 'expo-router';
import { View, Text }from 'react-native';

const ProductDetailsScreen = ()=>{
    const {id} = useLocalSearchParams();
    return(
        <View>
            
            <Text>ProductDetailScreen</Text>
            <Text>Id: {id}</Text>
            
        </View>
    )
}

export default ProductDetailsScreen;