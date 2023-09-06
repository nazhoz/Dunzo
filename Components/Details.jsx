import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { Beverages, Dairy, Data, Datas, Homecare, Personal, Snacks, meat, open, popular, rice } from '../Products';

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

return (

        // ---------------------------------------product details-----------------------------------

    <View style={styles.container}>
        <View style={{ width:'100%', height:50, justifyContent:'center'}}>
        <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{}}>
                <Image style={{marginLeft:10}} source={require('./images/back/arrow.png')}></Image>
                </TouchableOpacity>
        </View>
        <View>
        <Image style={styles.image} source={selectedItem.image} />
        <Text style={styles.title}>{selectedItem.title}</Text>
        <Text style={styles.itemInfo}>{selectedItem.item}</Text>
        <Text style={styles.price}>Price: ₹{selectedItem.price}</Text>
        </View>

        {/* -------------------------------------relatedproducts--------------------------------------- */}

        <View style={styles.relatedProductsContainer}>
        <Text style={styles.relatedProductsTitle}>Related Products</Text>
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
            <Text style={styles.relatedProductTitle}>{item.title}</Text>
            <Text style={styles.relatedProductPrice}>Price: ₹{item.price}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
    
    </View>
)
}

export default Details

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        color:'black'
    },
    itemInfo: {
        fontSize: 16,
        marginBottom: 10,
        color:'black'
    },
    price: {
        fontSize: 18,
        color: 'green',
    },
    relatedProductsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
      },
      relatedProductsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      relatedProductItem: {
        marginRight: 10,
        alignItems: 'center',
      },
      relatedProductImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      relatedProductTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      relatedProductPrice: {
        fontSize: 14,
        color: 'green',
      },

})