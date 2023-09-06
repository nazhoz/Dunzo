import React, { createContext, useContext, useState, useEffect } from 'react';
import { Beverages, Dairy, Data, Datas, Homecare, Personal, Snacks, meat, open, popular, rice } from '../Products';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context for the cart
export const CartContext = createContext();

const allProducts = [
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

];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = allProducts.find(product => product.id === productId);

    if (productToAdd) {
      const existingItem = cartItems.find(item => item.id === productId);
      if (existingItem) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
      }
    }
  };
  const decreaseQuantity = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0
    );
  };


  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };


  const totalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

// --------------------------------------async storage---------------------------------------------

  const saveCartToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('@MyCart:key', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart data: ', error);
    }
  };

  // Function to retrieve cart data from AsyncStorage
  const retrieveCartFromAsyncStorage = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('@MyCart:key');
      if (storedCart !== null) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error retrieving cart data: ', error);
    }
  };

  // Load cart data from AsyncStorage when the component mounts
  useEffect(() => {
    retrieveCartFromAsyncStorage();
  }, []);

  // Save cart data to AsyncStorage whenever the cartItems state changes
  useEffect(() => {
    saveCartToAsyncStorage();
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart,decreaseQuantity,totalAmount,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

