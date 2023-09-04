import { StyleSheet, Text, View , ScrollView, Image,Button } from 'react-native'
import React, {useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Beverages, Dairy, Data, Datas, Homecare, Personal, Snacks, curated, meat, open, popular, rice } from '../Products'
import { NavigationProp } from '@react-navigation/native'
import LoginPage from './LoginPage'
import { useCart } from '../context/shop-context'

type AllProps={
    navigation: NavigationProp<any>
};

const All: React.FC<AllProps> = ({navigation}) => {
    const loginPress = () =>{
        navigation.navigate('LoginPage')
    }
    const [isLoginVisible, setLoginVisible] = useState(false);

const openLogin = () => {
    setLoginVisible(true);
};

const closeLogin = () => {
    setLoginVisible(false);
};

const { addToCart, cartItems, decreaseQuantity } = useCart();
console.log(cartItems);



const renderItemButton = (item) => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      return (
        <View style={{ width:60,borderRadius: 9, padding: 5, flexDirection: 'row', backgroundColor: 'rgb(0, 204, 0)', justifyContent: 'space-between', marginTop:30, alignItems:'center' }}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Text style={{ fontSize: 15, color: 'white',width:13}}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, color: 'white', marginRight:5 }}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => addToCart(item.id)}>
            <Text style={{ fontSize: 15, color: 'white',width:13}}>+</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.Add} onPress={() => addToCart(item.id)}>
          <Text style={{fontWeight:'900',fontSize:18, color:'white'}}>+</Text>
        </TouchableOpacity>
      );
    }
  };  



return (
    <View style={styles.main}>
        <LoginPage isVisible={isLoginVisible} onClose={closeLogin}/>
        <View style={styles.home}>
            <View style={styles.search} >   
            <TextInput style={styles.inputfield} placeholder='Search' placeholderTextColor='black'></TextInput>
            <Image style={styles.navimage} source={require('./images/Home/search.png')} ></Image>
            </View>
        <TouchableOpacity onPress={openLogin}>
        <Image style={styles.navimages} source={require('./images/Home/login.png')}></Image>
        </TouchableOpacity>    
        </View> 

        <ScrollView style={styles.homescroll}>
            <View style={styles.homefirstpart}>
                <Image style={{width:370, height:230, borderRadius:15, }} source={require('./images/Home/grocery.webp')}></Image>
            </View>

            <View style={{backgroundColor:'white'}}>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>In Spotlight</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Data.map(items=>(
                        <View style={styles.mapitems} key={items.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={items.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{items.title}</Text>
                            <Text style={styles.mapkg}> {items.item}</Text>
                            <Text style={styles.maprs}>₹{items.price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=> addToCart(items.id)}>
                            {renderItemButton(items)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>

                <ScrollView horizontal style={{marginTop:10, backgroundColor:'white', height:180,}}>
                    <Image style={{width:370, height:150, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/eight.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/two.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/three.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/four.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/five.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/six.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/seven.png')}></Image>
                    <Image style={{width:370, height:150, borderRadius:15 , marginLeft:20 , marginTop:15}} source={require('./images/Home/one.png')}></Image>
                </ScrollView>
                </View>
                <View style={{marginTop:10, backgroundColor:'white', height:180,}}>
                    <View>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold', marginLeft:10}}>Freshness Hacks</Text>
                    </View>
            <ScrollView horizontal >
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/adone.png')}></Image>
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/adtwo.png')}></Image>
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/adthree.png')}></Image>
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/adfour.png')}></Image>
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15}} source={require('./images/Home/adfive.png')}></Image>
            <Image style={{width:300, height:120, borderRadius:15, marginLeft:20, marginTop:15 , marginRight:20}} source={require('./images/Home/adsix.png')}></Image>
            </ScrollView>
            </View>


                    {/* Shop by category */}



            <View style={{height:520, backgroundColor:'white', marginTop:10, justifyContent:'space-around'}}>
                <View>
                    <Text style={{color:'black', marginLeft:10 , fontSize:20, fontWeight:'bold'}}>Shop By Category</Text>
                </View>
                <View>

                    <View style={{flexDirection:'row', height:150, justifyContent:'space-around', alignItems:'center'}}>

                        <View style={{ justifyContent:'space-evenly', alignItems:'center', width:90, height:130, borderRadius:6}}>
                            <View style={{ backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                                <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>50% OFF</Text>
                                <Image style={{width:80, height:80 ,  borderRadius:5}} source={require('./images/Home/beverages.png')}></Image>
                            </View>                        
                        <Text style={{color:'black',fontWeight:'bold'}}>Beverages</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>54% OFF</Text>
                            <Image style={{width:80, height:80,  borderRadius:5}} source={require('./images/Home/dal.png')}></Image>
                            </View>             
                        <Text style={{color:'black',fontWeight:'bold'}}>Atta,Dal</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>59% OFF</Text>
                            <Image style={{width:80, height:80, borderRadius:5}} source={require('./images/Home/oil.png')}></Image>
                            </View>      
                        <Text style={{color:'black',fontWeight:'bold'}}>Dry Fruits</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>50% OFF</Text>
                            <Image style={{width:80, height:80, borderRadius:5}} source={require('./images/Home/corn.png')}></Image>
                            </View>
                    
                        <Text style={{color:'black',fontWeight:'bold'}}>Breakfasts</Text>
                        </View> 
                    
                    </View>

                    <View style={{flexDirection:'row', height:150, justifyContent:'space-around', alignItems:'center'}}>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>50% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/excel.png')}></Image>
                            </View>                       
                        <Text style={{color:'black',fontWeight:'bold'}}>Cleaning</Text>
                        </View> 

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>24% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/silk.png')}></Image>
                            </View>                       
                        <Text style={{color:'black',fontWeight:'bold'}}>Desserts</Text>
                        </View> 

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>25% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/maggi.png')}></Image>
                            </View>              
                        <Text style={{color:'black',fontWeight:'bold'}}>Instant Item</Text>
                        </View> 

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>50% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/parchute.png')}></Image>
                            </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Personal</Text>
                        </View>  
                        
                    </View>

                    <View style={{flexDirection:'row', height:150, justifyContent:'space-around', alignItems:'center'}}>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>28% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/centerfresh.png')}></Image>
                            </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Sweats</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>30% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/breadpacks.png')}></Image>
                            </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Breads</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>10% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/pedigree.png')}></Image>
                            </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Pet Care</Text>
                        </View>

                        <View style={{ justifyContent:'space-around', alignItems:'center' , width:90, height:130, borderRadius:6}}>
                            <View style={{backgroundColor:'rgb(242, 242, 242)',alignItems:'center',height:100}}>
                            <Text style={{color:'rgb(204, 0, 204)', fontSize:12, fontWeight:'bold', backgroundColor:'white', borderWidth:0.3, width:70,textAlign:'center', borderColor:'rgb(204, 0, 204)', borderRadius:2}}>50% OFF</Text>
                            <Image style={{width:80, height:80 , backgroundColor:'rgb(242, 242, 242)', borderRadius:5}} source={require('./images/Home/babycare.png')}></Image>
                            </View>
                        <Text style={{color:'black',fontWeight:'bold'}}>Baby Care</Text>
                        </View>
                        
                    </View>               
                </View>
                
            </View>

                        {/* -----------------------Ad Banner------------------------ */}

            <View style={{backgroundColor:'white',marginTop:10, height:180, width:410, justifyContent:'center', alignItems:'center'}}>
                <Image style={{width:360, height:140, borderRadius:5}} source={require('./images/Home/offer.png')}></Image>
            </View>

                    {/* ----------------------------Quick Bites--------------------------------- */}

            <View  style={styles.scndmap}>
            <Text style={{color:'black', marginTop:10, marginLeft:10, fontSize:20, fontWeight:'bold'}}>Quick Bites</Text>
            <ScrollView horizontal>
                
                {
                    Datas.map(allitem=>(
                        <View style={[
                            styles.item,
                            {backgroundColor:allitem.color}
                        ]} key={allitem.id}>
                        
                            <View style={styles.laystext}>
                            <Text style={{color:'black', fontWeight:'bold'}}>{allitem.title}</Text>
                            <Text style={{color:'green'}}>{allitem.item}</Text>
                            </View>                            
                            <View>
                            <Image style={{width:150, height:150}} source={allitem.image}/>
                            </View>
                            <View style={{ width:'100%', height:40, justifyContent:'space-between', alignItems:'center',flexDirection:'row'}}>
                            <Text style={{color:'black', marginLeft:15, fontWeight:'bold'}}>₹{allitem.price}</Text>
                            <TouchableOpacity style={styles.Adds} onPress={()=> addToCart(allitem.id)}>
                            <Text style={{color:'white',fontSize:20, alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>+</Text>  
                            </TouchableOpacity>                     
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            </View>

                    {/* -------------------Most Popular--------------------------- */}

            <View style={{backgroundColor:'white', marginTop:8}}>
            <View style={styles.scndpart}>
                    <Text style={styles.spot}>Most Popular</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                    {
                        popular.map(allpop=>(
                            <View style={styles.mapitems} key={allpop.id}>
                                <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={allpop.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{allpop.title}</Text>
                            <Text style={styles.mapkg}> {allpop.item}</Text>
                            <Text style={styles.maprs}>₹{allpop.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(allpop.id)}>
                            {renderItemButton(allpop)}
                            </TouchableOpacity>                           
                            </View>
                            </View>
                        )
                        )
                    }
                </ScrollView>
                <View  style={{height:200, justifyContent:'space-evenly'}}>
                    <View>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>They love it Fresh</Text>
                    </View>

                    <View>
                    <ScrollView horizontal>
                        <Image style={{width:360, height:120, borderRadius:11, marginLeft:15}} source={require('./images/Home/ajith.png')}></Image>
                        <Image style={{width:420, height:120, borderRadius:11 , marginLeft:15}} source={require('./images/Home/sarath.png')}></Image>
                        <Image style={{width:360, height:120, borderRadius:11 , marginLeft:15}} source={require('./images/Home/anathu.png')}></Image>
                        <Image style={{width:360, height:120, borderRadius:11 , marginLeft:15, marginRight:15}} source={require('./images/Home/anshid.png')}></Image>               
                    </ScrollView>
                    </View>
                </View>
            </View>

                    {/* --------------------------Open A Pack------------------------------- */}

            <View style={styles.openhead}>
                <View>
                    <Text style={{color:'black',fontSize:20, fontWeight:'600'}} >Open A Pack</Text>
                </View>
                <View>
                    <ScrollView horizontal>
                        {
                            open.map(opitem=>(
                                <View key={opitem.id} style={[
                                    styles.openapack,{backgroundColor:opitem.color},
                                ]}>
                                    <View style={{ width:'100%', height:80, justifyContent:'space-between'}}>
                                        <View>
                                        <Text style={{color:'rgb(109, 109, 70)'}}>{opitem.head}</Text>
                                        </View>
                                        <View>                                        
                                        <Text style={{color:'black', fontSize:16,fontWeight:'600'}}>{opitem.title}</Text>
                                        <Text style={{color:'black', fontSize:16,fontWeight:'600'}}>{opitem.tit}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={{width:120, height:120}} source={opitem.image}/>
                                    </View>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%'}}>                                        
                                        <View>
                                        <Text style={{color:'black', fontWeight:'bold'}}>₹{opitem.price}</Text>
                                        <Text style={{color:'green'}}>{opitem.item}</Text>
                                        </View>
                                        <View style={{ height:45, alignItems:'center', justifyContent:'space-between'}}>
                                        <TouchableOpacity style={{elevation:5,backgroundColor:'white' , width:65, height:30, alignItems:"center", justifyContent:"center", borderRadius:15, }} onPress={()=> addToCart(opitem.id)}>
                                        <Text style={{ color:'green', fontWeight:'bold'}}>+ ADD</Text>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:8, color:'rgb(109, 109, 70)'}}>{opitem.var}</Text>
                                        </View>                                      
                                    </View>

                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>

                {/* ---------------------------Curated For Your Needs----------------------------- */}
            
            <View style={{backgroundColor:'white', marginTop:10, height:220, justifyContent:'space-evenly' }}>
                <View>
                    <Text style={{color:'black', fontSize:20, fontWeight:'500'}}>Curated for Your needs</Text>
                </View>
                <View>
                <ScrollView horizontal>
                    {
                        curated.map(curitems=>(

                            <View key={curitems.id} style={{width:110, height:130, justifyContent:'space-around', alignItems:'center', marginLeft:15, marginRight:15}}>
                            <View style={[{backgroundColor:curitems.color}, styles.curateditems]}>
                                <Image style={{width:55, height:55}} source={curitems.image}></Image>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text style={{color:'black', fontWeight:'bold'}}>{curitems.head}</Text>
                                <Text style={{color:'black', fontWeight:'bold'}}>{curitems.title}</Text>
                            </View>
                            </View>
                        ))
                    }                   
                </ScrollView>
                </View>
            </View>

            {/* -----------------------Ad Banner----------------------------- */}
            <View style={{height:210, backgroundColor:'white', marginTop:10, }}>
                <ScrollView horizontal>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                    <Image style={{width:380, height:155,marginLeft:15,borderRadius:10}} source={require('./images/Home/ad/offerone.png')}></Image>
                    <Image style={{width:380, height:155 ,marginLeft:15,borderRadius:10}} source={require('./images/Home/ad/offertwo.png')}></Image>
                    <Image style={{width:380, height:155,marginLeft:15, borderRadius:10}} source={require('./images/Home/ad/offerthree.png')}></Image>
                    <Image style={{width:380, height:155,marginLeft:15,borderRadius:10}} source={require('./images/Home/ad/offerfour.png')}></Image>
                    <Image style={{width:380, height:155,marginLeft:15,borderRadius:10}} source={require('./images/Home/ad/offerfive.png')}></Image>
                    <Image style={{width:380, height:155,marginLeft:15,marginRight:15,borderRadius:10}} source={require('./images/Home/ad/offersix.png')}></Image>
                    </View>
                </ScrollView>
            </View>

            {/* -------------------personal Care----------------------------                 */}
            
            <View style={{height:360, backgroundColor:'white', marginTop:8}}>
                <View>
                    <Image style={{width:60, height:60}} source={require('./images/Home/personalcare.png')}></Image>
                </View>
            <View style={styles.scndpart}>
                    <Text style={styles.spot}>In Spotlight</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Personal.map(peritem=>(
                        <View style={styles.peritems} key={peritem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={peritem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{peritem.title}</Text>
                            <Text style={styles.maptitle}>{peritem.head}</Text>
                            <Text style={styles.mapkg}> {peritem.item}</Text>
                            <Text style={styles.maprs}>₹{peritem.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(peritem.id)}>
                            {renderItemButton(peritem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                    {/* ----------------------rice------------------------------- */}
            
                <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                <Image style={{width:35, height:35}} source={require('./images/Home/rice/rice.png')}></Image>
                </View>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>Atta, Dal & Rice</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    rice.map(riitem=>(
                        <View style={styles.peritems} key={riitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={riitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{riitem.title}</Text>
                            <Text style={styles.maptitle}>{riitem.head}</Text>
                            <Text style={styles.mapkg}> {riitem.item}</Text>
                            <Text style={styles.maprs}>₹{riitem.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(riitem.id)}>
                            {renderItemButton(riitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                {/* --------------------------Dairy----------------------------------- */}

                <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                    <Image style={{width:35, height:35}} source={require('./images/Home/Dairy/whitebread.png')}></Image>
                </View>
            <View style={styles.scndpart}>
                    <Text style={styles.spot}>Dairy, Bread & Eggs</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Dairy.map(daiitem=>(
                        <View style={styles.peritems} key={daiitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={daiitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{daiitem.title}</Text>
                            <Text style={styles.maptitle}>{daiitem.head}</Text>
                            <Text style={styles.mapkg}> {daiitem.item}</Text>
                            <Text style={styles.maprs}>₹{daiitem.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(daiitem.id)}>
                            {renderItemButton(daiitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                {/* ---------------------------Snacks---------------------------------------- */}

                <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                    <Image style={{width:35, height:35}} source={require('./images/Home/cookies/cookies.png')}></Image>
                </View>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>Snacks and Biscuits</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Snacks.map(snaitem=>(
                        <View style={styles.peritems} key={snaitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:70, height:70}}  source={snaitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{snaitem.title}</Text>
                            <Text style={styles.maptitle}>{snaitem.head}</Text>
                            <Text style={styles.mapkg}> {snaitem.item}</Text>
                            <Text style={styles.maprs}>₹{snaitem.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(snaitem.id)}>
                            {renderItemButton(snaitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                {/* -------------------------------Beverages---------------------------------------- */}

                <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                    <Image style={{width:35, height:35}} source={require('./images/Home/bever/winebottles.png')}></Image>
                </View>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>Beverage Store</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Beverages.map(bevitem=>(
                        <View style={styles.peritems} key={bevitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:80, height:80}}  source={bevitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{bevitem.title}</Text>
                            <Text style={styles.maptitle}>{bevitem.head}</Text>
                            <Text style={styles.mapkg}> {bevitem.item}</Text>
                            <Text style={styles.maprs}>₹{bevitem.price}</Text>
                            </View>
                            <TouchableOpacity  onPress={()=> addToCart(bevitem.id)}>
                            {renderItemButton(bevitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                    {/* -----------------------HomeCare----------------------------------- */}

                    <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                    <Image style={{width:35, height:35}} source={require('./images/Home/cleaning/cleaner.png')}></Image>
                </View>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>Home Care</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    Homecare.map(hoitem=>(
                        <View style={styles.peritems} key={hoitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:80, height:80}}  source={hoitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{hoitem.title}</Text>
                            <Text style={styles.maptitle}>{hoitem.head}</Text>
                            <Text style={styles.mapkg}> {hoitem.item}</Text>
                            <Text style={styles.maprs}>₹{hoitem.price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=> addToCart(hoitem.id)}>
                            {renderItemButton(hoitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

                    {/* --------------------------meat----------------------------------------- */}

                    <View style={styles.bodycontent}>
                <View style={{marginLeft:20}}>
                    <Image style={{width:35, height:35}} source={require('./images/Home/meat/steak.png')}></Image>
                </View>
                <View style={styles.scndpart}>
                    <Text style={styles.spot}>Meat</Text>
                    <TouchableOpacity>
                    <Text style={styles.spots}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{backgroundColor:'white'}}>
                    {
                    meat.map(meitem=>(
                        <View style={styles.peritems} key={meitem.id}>
                            <View style={{alignItems:'center'}}>
                            <Image style={{width:80, height:80}}  source={meitem.image}/>
                            </View>
                            <View style={styles.mapcontent}>
                            <View>
                            <Text style={styles.maptitle}>{meitem.title}</Text>
                            <Text style={styles.maptitle}>{meitem.head}</Text>
                            <Text style={styles.mapkg}> {meitem.item}</Text>
                            <Text style={styles.maprs}>₹{meitem.price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=> addToCart(meitem.id)}>
                            {renderItemButton(meitem)}
                            </TouchableOpacity>                           
                            </View>
                            
                        </View>
                    )
                    )
                    }
                </ScrollView>
            </View>

            {/* ---------------------------------ad---------------------------------------- */}

            <View style={{backgroundColor:'white', alignItems:'center', width:'100%', height:200}}>
                <View style={{backgroundColor:'rgb(204, 255, 230)', flexDirection:'row', width:'90%', height:150, borderRadius:10}}>
                <View style={{ width:250, justifyContent:'space-around', height:130, marginLeft:20, marginTop:10}}>
                    <View>
                    <Text style={{color:'black', fontSize:16, fontWeight:'700'}}>Tell Us What You Want</Text>
                    </View>
                    <View>
                        <Text style={{color:'black', fontSize:12}}>Suggest Products that you want</Text>
                        <Text style={{color:'black', fontSize:12}}>us to make available to shop or</Text>
                        <Text style={{color:'black', fontSize:12}}> feature to add on Dunzo Daily</Text>
                    </View>
                    <View>
                        <Text style={{color:'green', fontSize:13, fontWeight:'700'}}>I HAVE A SUGGESTION</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Image style={{width:120, height:120}} source={require('./images/Home/dunzo/suggestion.png')}></Image>
                </View>
                </View>
            </View>


        </ScrollView>
    </View>
)
}

export default All

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
    homefirstpart:{
        backgroundColor:"white",
        height:260,
        alignItems:'center',
        justifyContent:'center',
    },
    homescroll:{
        flexGrow:1,
    },
    spot:{
        color:'black',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:20,
    },
    spots:{
        color:'green',
        marginRight:20
    },
    scndpart:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white'
    },
    main:{
        backgroundColor:'rgb(235, 235, 224)',
        height:'100%', 
    },
    maptitle:{
        color:'black',
        fontWeight:'bold',
    },
    mapkg:{
        color:'lightgrey' 
    },
    maprs:{
        color:'black', 
        fontWeight:'bold'
    },
    mapitems:{
        backgroundColor:'rgb(242, 242, 242)',
        marginLeft:15,
        height:200,
        justifyContent:"space-around",
        width:180,
        marginRight:15,
        elevation:2,
        borderRadius:7,
        marginTop:10
    },
    mapcontent:{
        // backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:80,
         width:"100%"
    },
    Add:{
        marginRight:15,
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 204, 0)',
        marginTop:30
    },
    Adds:{
        marginRight:15,
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 204, 0)',
    },
    scndmap:{
        height:330,
        backgroundColor:'white',
        marginTop:10
    },
    item: {
        width: 200,
        height: 250,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:25,
        marginRight:15,
        borderRadius:10,
        elevation:5
    },
    itemText: {
        color: 'white',
    },
    laystext:{
        // backgroundColor:'yellow',
        width:'90%',
    },
    openapack:{
        backgroundColor:'lightblue',
        width:270,
        marginLeft:15,
        height:280,
        marginRight:15,
        elevation:5,
        borderRadius:10,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    openhead:{
        backgroundColor:'white', 
        marginTop:8,
        height:380,
        justifyContent:'space-around',
        
    },
    curateditems:{
        width:80, 
        height:80, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:45,
        elevation:1
    },
    peritems:{
        backgroundColor:'rgb(242, 242, 242)',
        marginLeft:15,
        height:220,
        justifyContent:"space-around",
        width:220,
        marginRight:15,
        elevation:2,
        borderRadius:7,
        marginTop:25
    },
    bodycontent:{
        height:360,
        backgroundColor:'white',
        marginTop:8,
    
    },

})