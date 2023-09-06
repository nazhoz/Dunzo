import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useCart} from '../context/shop-context';
import { Linking } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';


const Orders = ({navigation}) => {
  const {addToCart, decreaseQuantity, totalAmount,removeFromCart} = useCart();

  const handleIncreaseQuantity = itemId => {
    addToCart(itemId);
  };

  


  const {cartItems} = useCart();

  const taxRate = 0.05;

  const calculateTotalAmountWithTax = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const taxAmount = subtotal * taxRate;
    const handlingCharge = 5;
    const totalWithTax = subtotal + taxAmount + handlingCharge;
    return totalWithTax;
  };

  const sendPaymentDetailsToWhatsApp = () => {
    const message = `Payment Details:
  Item Total: ₹${totalAmount().toFixed(2)}
  Tax (${(taxRate * 100).toFixed(0)}%): ₹${(
      calculateTotalAmountWithTax() - totalAmount()
    ).toFixed(2)}
  Handling Charge: ₹5
  To Pay (With Tax): ₹${calculateTotalAmountWithTax().toFixed(2)}
  
  Item Information:
  ${cartItems
    .map(
      item => `
  - ${item.title}
    Item: ${item.item}
    Price: ₹${(item.price * item.quantity).toFixed(2)}
    Quantity: ${item.quantity}
  `,
    )
    .join('\n')}`;

    const whatsappMessageURI = `whatsapp://send?text=${encodeURIComponent(message)}`;

    Linking.openURL(whatsappMessageURI)
      .then(() => console.log('WhatsApp opened successfully'))
      .catch(error => console.error('Error opening WhatsApp:', error));
  };


  return (
    <View style={{backgroundColor: 'rgb(245, 245, 240)'}}>
      <View
        style={{
          height: 80,
          backgroundColor: 'rgb(0, 204, 0)',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Your Orders
        </Text>
      </View>
  
      <ScrollView>
        <View style={{alignItems: 'center', marginBottom: 150}}>
          {cartItems.length === 0 ? (
            <View
              style={{
                height: 700,
                width: 400,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 200, height: 200, opacity: 0.7}}
                source={require('../Assets/cart/shopping.png')}></Image>
              <Text style={{color: 'black', fontSize: 20, fontWeight: '800'}}>
                Cart is Empty
              </Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                Add To Cart From Home
              </Text>
              <View
                style={{
                  marginTop: 60,
                  backgroundColor: 'lightgreen',
                  width: 100,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 3,
                  borderRadius: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{}}>
                  <Text
                    style={{color: 'black', fontSize: 14, fontWeight: '900'}}>
                    Go Back
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              {cartItems.map(item => {
                return (
                  <View
                    key={item.id}
                    style={{
                      marginTop: 20,
                      width: 350,
                      flexDirection: 'row',
                      height: 150,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      elevation: 2,
                      backgroundColor: 'white',
                      borderRadius: 5,
                    }}>
                    <View>
                      <Image
                        style={{width: 80, height: 80}}
                        source={item.image}></Image>
                    </View>
                    <View style={{justifyContent: 'space-evenly', height: 140}}>
                      <View
                        style={{
                          width: 190,
                          height: 60,
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginRight: 15,
                        }}>
                        <Text style={{color: 'black', fontSize: 12}}>
                          {item.title}
                        </Text>
                        <Text style={{color: 'grey', fontSize: 12}}>
                          {item.item}
                        </Text>
                        <Text
                          style={{
                            color: 'rgb(0, 204, 0)',
                            fontWeight: '800',
                            marginTop: 10,
                          }}>
                          ₹{item.price * item.quantity}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          width: 130,
                          marginLeft: 35,
                          borderRadius: 10,
                          backgroundColor: 'rgb(221, 255, 204)',
                          elevation: 2,
                        }}>
                        <TouchableOpacity
                          onPress={() => decreaseQuantity(item.id)}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontWeight: '400',
                              color: 'black',
                              fontSize: 25,
                              width: 40,
                            }}>
                            -
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            width: 30,
                            height: 25,
                            color: 'rgb(0, 204, 0)',
                            textAlign: 'center',
                          }}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleIncreaseQuantity(item.id)}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontWeight: '400',
                              color: 'black',
                              fontSize: 20,
                              width: 40,
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{marginRight:15}}>
                    <TouchableOpacity
                          onPress={() => removeFromCart(item.id)}>
                          <Image source={require('../Assets/delete/trash.png')}></Image>
                    </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
              <View
                style={{
                  backgroundColor: 'white',
                  width: '85%',
                  height: 200,
                  marginTop: 20,
                  borderRadius: 6,
                  elevation: 3,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 180,
                    height: 50,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('./images/bill/bill.png')}></Image>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    Payment details
                  </Text>
                </View>
                <View style={{justifyContent: 'space-around', height: 140}}>
                  <View
                    style={{
                      borderBottomWidth: 0.3,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: 5,
                      }}>
                      Item Total{' '}
                    </Text>
                    <Text
                      style={{color: 'black', fontWeight: '600', width: 90}}>
                      ₹ {totalAmount().toFixed(2)}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.3,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: 5,
                      }}>
                      Tax ({(taxRate * 100).toFixed(0)}%){' '}
                    </Text>
                    <Text
                      style={{color: 'black', fontWeight: '600', width: 90}}>
                      ₹{' '}
                      {(calculateTotalAmountWithTax() - totalAmount()).toFixed(
                        2,
                      )}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.3,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: 5,
                      }}>
                      Handling Charge{' '}
                    </Text>
                    <Text
                      style={{color: 'black', fontWeight: '600', width: 90}}>
                      ₹ 5
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: 5,
                      }}>
                      To Pay (WithTax)
                    </Text>
                    <Text
                      style={{color: 'black', fontWeight: '600', width: 90}}>
                      {' '}
                      ₹ {calculateTotalAmountWithTax().toFixed(2)}{' '}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    marginTop: 35,
                    width: 200,
                    height: 40,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(0, 204, 0)',
                    elevation: 4,
                  }}
                  onPress={sendPaymentDetailsToWhatsApp}>
                  <Text style={{color: 'white', fontWeight: '900'}}>
                    Pay (₹ {calculateTotalAmountWithTax().toFixed(2)})
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
