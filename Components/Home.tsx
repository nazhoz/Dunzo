
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Alert,KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

type HomeProps = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (text: string) => {
    const isValid = /^\d{10}$/.test(text);
    setIsValidPhoneNumber(isValid);
    setPhoneNumber(text);
  };

  const validateAndNavigate = () => {
    if (isValidPhoneNumber) {
      navigation.navigate('Daily');
    } else {
      // The phone number is not valid, show an error alert
      Alert.alert('Invalid Phone Number', 'Please enter your Phone Number.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={{ width: 400, height: 500 }} source={require('./images/dunzo.webp')} />
      <View style={styles.inputs}>
        <TextInput
          style={[styles.input, !isValidPhoneNumber && styles.inputError]}
          placeholder="+91 Enter Your Number"
          placeholderTextColor="black"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <TouchableOpacity style={styles.touch} onPress={validateAndNavigate}>
          <Text>Go to Dunzo</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    elevation:0.5,
    paddingHorizontal: 10,
    color:'black',
  },
  inputError: {
    borderColor: 'red',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  touch: {
    backgroundColor: 'lightgreen',
    padding: 10,
    elevation:1
  },
});

export default Home;



