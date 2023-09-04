import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { useCart} from '../context/shop-context'



const Orders = () => {
const {addToCart,decreaseQuantity,totalAmount}=useCart()

  const handleIncreaseQuantity = (itemId :string) => {
    addToCart(itemId);
};

  const {cartItems}=useCart()

  const taxRate = 0.05;

  const calculateTotalAmountWithTax = () => {
    const subtotal = cartItems.reduce((total, item ) => total + item.price * item.quantity, 0);
    const taxAmount = subtotal * taxRate;
    const handlingCharge = 5;
    const totalWithTax = subtotal + taxAmount + handlingCharge;
    return totalWithTax;
  };


  return (
    <View style={{backgroundColor:'rgb(245, 245, 240)'}}>
      
      <View style={{height:80, backgroundColor:'rgb(0, 204, 0)', borderBottomLeftRadius: 10,borderBottomRightRadius: 10,justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:30, fontWeight:'700', marginLeft:20}}>Your Orders</Text>
      </View>
      <ScrollView>
      <View style={{ alignItems:'center',height:"100%",marginBottom:150}}>
        
        {
          cartItems.map((item) =>{
            return(
            <View key={item.id} style={{ marginTop:20, width:350, flexDirection:'row', height:180, alignItems:'center', justifyContent:'space-around', elevation:15, backgroundColor:'white', borderRadius:5}}>
              <View>
              <Image style={{width:100, height:100}} source={item.image}></Image>
              </View>
              <View style={{justifyContent:'space-evenly', height:140}}>
              <View style={{width:190, height:60, justifyContent:'space-around', alignItems:'center', marginRight:15}}>                      
              <Text style={{color:'black', fontSize:12}}>{item.title}</Text>
              <Text style={{color:'grey' ,fontSize:12}}>{item.item}</Text>
              <Text style={{color:'black', fontWeight:'800', marginTop:10}}>₹{item.price * item.quantity}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', width:130, marginLeft:20,}}>
                <TouchableOpacity onPress={()=>decreaseQuantity(item.id)}><Text style={{ textAlign:'center', fontWeight:'400', color:'white', fontSize:25, elevation:8, width:40, backgroundColor:'rgb(0, 204, 0)', borderRadius:10}}>-</Text></TouchableOpacity>
                <Text style={{width:30, height:25,color:"rgb(0, 204, 0)", textAlign:'center'}}>{item.quantity}</Text>
                <TouchableOpacity onPress={()=>handleIncreaseQuantity(item.id)}><Text style={{ textAlign:'center', fontWeight:'400', color:'white', fontSize:25, elevation:8, width:40, backgroundColor:'rgb(0, 204, 0)', borderRadius:10}}>+</Text></TouchableOpacity>
              </View>
              </View>
            </View>
            )
          })
        }       
        <View style={{backgroundColor:'white', width:'85%', height:200, marginTop:20, borderRadius:6, elevation:3}}>
        <View style={{flexDirection:'row',width:180, height:50, justifyContent:'space-around', alignItems:'center'}}>
          <Image style={{width:20, height:20}} source={require('./images/bill/bill.png')}></Image>
          <Text style={{color:'black', fontWeight:'700'}}>Payment details</Text>
        </View>
        <View style={{justifyContent:'space-around', height:140}}>
          <View style={{borderBottomWidth:0.3,flexDirection:'row',justifyContent:'space-between', marginRight:5}}>
          <Text style={{color:'black',fontWeight:'600', marginLeft:5}}>Item Total </Text>
          <Text style={{color:'black', fontWeight:'600', width:90}}>₹ {totalAmount().toFixed(2)}</Text>
          </View>
        <View  style={{borderBottomWidth:0.3,flexDirection:'row',justifyContent:'space-between', marginRight:5}}>
        <Text style={{color:'black',fontWeight:'600' , marginLeft:5}}>Tax ({(taxRate * 100).toFixed(0)}%) </Text>
        <Text style={{color:'black',fontWeight:'600', width:90}}>₹ {(calculateTotalAmountWithTax() - totalAmount()).toFixed(2)}</Text>
        </View>
        <View style={{borderBottomWidth:0.3,flexDirection:'row',justifyContent:'space-between', marginRight:5}}>
        <Text style={{ color: 'black',fontWeight:'600', marginLeft:5}}>Handling Charge </Text>
        <Text style={{color:'black',fontWeight:'600', width:90}}>₹ 5</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between', marginRight:5}}>
        <Text style={{color:'black',fontWeight:'600', marginLeft:5}}>To Pay (WithTax)</Text>
        <Text style={{color:'black',fontWeight:'600', width:90}}> ₹ {calculateTotalAmountWithTax().toFixed(2)} </Text>
        </View>
        
        </View>
        </View>
        <View>
          <TouchableOpacity style={{ marginTop:35, width:200, height:40, borderRadius:8, justifyContent:'center', alignItems:'center', backgroundColor:'rgb(0, 204, 0)'}}>
            <Text style={{color:'white', fontWeight:'900'}}>Pay  (₹ {calculateTotalAmountWithTax().toFixed(2)})</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})