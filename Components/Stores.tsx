import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react'

const Stores = () => {
  return (
    <View>
      <View style={styles.home}>
            <View style={styles.search} >   
            <TextInput style={styles.inputfield} placeholder='Search' placeholderTextColor='black'></TextInput>
            <Image style={styles.navimage} source={require('./images/Home/search.png')} ></Image>
            </View>
        <TouchableOpacity>
        <Image style={styles.navimages} source={require('./images/Home/login.png')}></Image>
        </TouchableOpacity>    
        </View> 
        <View style={{backgroundColor:'white'}}>
          <View style={{marginTop:20}}>
            <Text style={{color:'black', fontSize:15, fontWeight:'800', marginLeft:25}}>Essentials delivered to your doorstep</Text>
          </View>
          <ScrollView>
            <View style={{justifyContent:'space-evenly',backgroundColor:'white', height:500}}>
              <View style={{flexDirection:'row' ,marginTop:20}}>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:15, borderRadius:5, }} source={require('../Assets/stores/storeone.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:10, borderRadius:5}} source={require('../Assets/stores/storetwo.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:10, borderRadius:5}} source={require('../Assets/stores/storethree.png')}></Image>
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',marginTop:20 }}>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:15 , borderRadius:5}} source={require('../Assets/stores/storefour.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:10, borderRadius:5 }} source={require('../Assets/stores/storefive.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:120, height:180, marginLeft:10 , borderRadius:5}} source={require('../Assets/stores/storesix.png')}></Image>
              </TouchableOpacity>
              </View>
            </View>

            <View style={{marginTop:20, }}>
              <View style={{flexDirection:"row", height:300, justifyContent:'space-evenly'}}>
                <View style={{ height:90, width:90, alignItems:'center', justifyContent:'space-evenly', elevation:3, backgroundColor:'white', borderRadius:10}}>
                  <Image source={require('../Assets/str/store.png')}></Image>
                  <Text style={{color:'black'}}>Shop</Text>
                </View>
                <View style={{ height:90, width:90, alignItems:'center', justifyContent:'space-evenly', elevation:3, backgroundColor:'white', borderRadius:10}}>
                  <Image source={require('../Assets/str/shop.png')}></Image>
                  <Text style={{color:'black'}}>Store</Text>
                </View>
                <View style={{ height:90, width:90, alignItems:'center', justifyContent:'space-evenly', elevation:3, backgroundColor:'white', borderRadius:10}}>
                  <Image source={require('../Assets/str/protection.png')}></Image>
                  <Text style={{color:'black'}}>Health</Text>
                </View>
                <View style={{height:90, width:90, alignItems:'center', justifyContent:'space-evenly', elevation:3, backgroundColor:'white', borderRadius:10}}>
                  <Image source={require('../Assets/str/surprise.png')}></Image>
                  <Text style={{color:'black'}}>Gifts</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
    </View>
  )
}

export default Stores

const styles = StyleSheet.create({
  home:{
    backgroundColor:"rgb(220, 255, 204)",
    height:70,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:10
},
navimage:{
        
},
navimages:{
    marginRight:20,
    width:40,
    height:40
},
search:{
  flexDirection:'row',
  backgroundColor:'white',
  width:'70%',
  elevation:4,
  alignItems:'center',
  justifyContent:'space-around',
  borderRadius:10,
  marginLeft:20
},
inputfield:{
  // backgroundColor:'red',
  width:'80%',
  color:'black'
},
})