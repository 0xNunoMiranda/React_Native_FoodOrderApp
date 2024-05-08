import { View,FlatList } from 'react-native';
import ProductListItem from '@components/ProductList/ProductListItem';

const products =[
  {
    id:1,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:2,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:3,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:4,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:5,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:6,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:7,
    name:"teste",
    price:12.3,
    image:""
  },
  {
    id:8,
    name:"teste",
    price:12.3,
    image:""
  }
]

const product = products[0];

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]} /> */}
      <FlatList
        data={products}
        renderItem={
          ({item})=><ProductListItem product={item} />
        }
        numColumns={2}
        columnWrapperStyle = {{gap:10,padding:10}}
        contentContainerStyle = {{gap:10}}
      />
    </View>
  );
}

