import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Beverages, Dairy, Data, Datas, Homecare, Personal, Snacks, meat, open, popular, rice } from '../Products';
import { useCart } from '../context/shop-context';

const Details = ({route,navigation}) => {
    const {itemId}= route.params;

    const allDatas=[
        ...Data,
        ...Datas,
        ...popular,
        ...open,
        ...Personal,
        ...rice,
        ...Dairy,
        ...Snacks,
        ...Beverages,
        ...Homecare,
        ...meat,
    ]

    const selectedItem = allDatas.find((item) => item.id === itemId);

    if (!selectedItem) {
        return (
        <View>
            <Text style={{color:'black'}}>Item not found.</Text>
        </View>
        );
    }

    const getRelatedProducts = (selectedItem, allDatas) => {
        const relatedProducts = allDatas.filter((item) => item.cat === selectedItem.cat && item.id !== selectedItem.id);
        return relatedProducts;
      };
    
      const relatedProducts = getRelatedProducts(selectedItem, allDatas);


      const { addToCart, cartItems,decreaseQuantity } = useCart();

      const renderItemButton = (item) => {
        const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    
        if (cartItem) {
          return (
            <View style={{ width:120,borderRadius: 9, backgroundColor: 'rgb(0, 204, 0)',flexDirection:'row',justifyContent:'space-around',padding:6, alignItems:'center' }}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Text style={{ fontSize: 15, color: 'white',width:25,textAlign:'center',}}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 12, color: 'white',marginLeft:10 }}>{cartItem.quantity}</Text>
              <TouchableOpacity onPress={() => addToCart(item.id)}>
                <Text style={{ fontSize: 15, color: 'white',width:25,marginLeft:20,textAlign:'center'}}>+</Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <TouchableOpacity style={{width:100}} onPress={() => addToCart(item.id)}>
              <Text style={{fontWeight:'900',fontSize:18, color:'white'}}>+</Text>
            </TouchableOpacity>
          );
        }
      }; 

return (

        // ---------------------------------------product details-----------------------------------

    <View style={styles.container}>
        <View style={{ width:'100%', height:50, justifyContent:'center', elevation:1}}>
        <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{}}>
                <Image style={{marginLeft:10}} source={require('./images/back/arrow.png')}></Image>
        </TouchableOpacity>
        </View>
        <ScrollView>

        <View style={{width:'100%'}}>
        <View style={{alignItems:'center'}}>
        <Image style={styles.image} source={selectedItem.image} />
        </View>   
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{justifyContent:'space-around', marginLeft:15}}>
        <Text style={styles.title}>{selectedItem.title}</Text>
        <Text style={styles.itemInfo}>{selectedItem.item}</Text>
        <Text style={styles.price}> ₹{selectedItem.price}</Text>
        </View>       
        <View  style={{justifyContent:'space-around', marginRight:45}}>
        <TouchableOpacity onPress={() => {addToCart(selectedItem.id);}}>
        <Text style={{color:'green',}}>{renderItemButton(selectedItem)}</Text>
        </TouchableOpacity>
        </View>
        </View>            
        </View>

        
        <View style={{borderTopWidth:0.5,marginTop:10}}>
        <View style={{marginTop:20,height:300, justifyContent:'space-around'}}>
            <View style={{marginLeft:15}}>
            <Text style={{color:"black",fontSize:17,fontWeight:'700'}}>Important Information</Text>
            </View>
            <View style={{marginLeft:15}}>
                <Text style={{color:"grey"}}> Country of origin : India</Text>
            </View>
            <View style={{marginLeft:15}}>
            <Text style={{color:"grey"}}>Shelf life :{selectedItem.shelf}</Text>
            </View>
            <View style={{marginLeft:15, marginRight:15}}>
            <Text style={{color:"grey",fontSize:13}}>{selectedItem.desc}</Text>
            </View>
        </View>


         {/* -------------------------------------relatedproducts--------------------------------------- */}

        <View style={styles.relatedProductsContainer}>
        <Text style={{color:'black', marginTop:20,fontSize:18,fontWeight:'700'}}>Frequently Bought Together</Text>
        <FlatList
        data={relatedProducts}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.relatedProductItem}
            onPress={() => {
                navigation.push('Details', { itemId: item.id });
            }}
            >
            <Image style={styles.relatedProductImage} source={item.image} />
            <Text style={{color:'black', fontSize:12, fontWeight:'800'}}>{item.title}</Text>
            <Text style={{color:'black', fontSize:12, fontWeight:'800'}}>{item.item}</Text>
            <Text style={styles.relatedProductPrice}>₹{item.price}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
    </View>
    </ScrollView>
    
    </View>
)
}

export default Details

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
        color:'black'
    },
    itemInfo: {
        fontSize: 14,
        marginBottom: 10,
        color:'grey'
    },
    price: {
        fontSize: 18,
        color: 'green',
    },
    relatedProductsContainer: {
        marginTop: 20,
        height:250,
        gap:30,
        backgroundColor:'#f2f2f2'
      },
      relatedProductItem: {
        marginRight: 10,
        alignItems: 'center',
      },
      relatedProductImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft:30,
        marginRight:20
      },
      relatedProductPrice: {
        fontSize: 14,
        color: 'green',
        fontWeight:'800'
      },

})