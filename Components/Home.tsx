import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Alert, KeyboardAvoidingView, ScrollView,Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [showWarning, setShowWarning] = useState(false); 
  

  const handlePhoneNumberChange = (text: string) => {
    const isValid = /^\d{10}$/.test(text);
    setIsValidPhoneNumber(isValid);
    setPhoneNumber(text);
    if (showWarning && text.length > 0) {
      setShowWarning(false);
    }
  };

  const validateAndNavigate = () => {
    if (isValidPhoneNumber) {
      
      navigation.navigate('Daily');
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter a valid Phone Number.',[
        { text: 'OK', onPress: () => setShowWarning(true) },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'height' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{ backgroundColor: 'rgb(179, 255, 179)', height: 560, width: 430, alignItems:'center', justifyContent:'center' }}>
          <Image style={{ width: 250, height: 250 }} source={require('./images/dunzo.webp')} />
          <Image source={require('./images/text/text.png')}></Image>
        </View>

        <View style={styles.inputs}>
          <View style={{marginLeft:15}}>
          <Text style={{color:'black', fontSize:19, fontWeight:'600'}}>Get started with Dunzo</Text>
          </View>
          <View style={{marginLeft:15}}>
            <Text style={{color:'grey',fontSize:14, fontWeight:'400',marginLeft:5}}>Enter Your Mobile Number</Text>
            <View style={{flexDirection:'row',borderWidth:1,borderColor: 'gray',width:350,alignItems:'center', height:48,borderRadius:10, justifyContent:'space-around', marginTop:10}}>
              <Image source={require('./images/text/phone.png')}></Image>
            <TextInput
            style={[styles.input, !isValidPhoneNumber && styles.inputError]}
            placeholder="+91"
            placeholderTextColor="black"
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            keyboardType="numeric"
          />
            </View>          
          </View>
          <View style={{flexDirection:'row',marginLeft:20,}}>
          <Text style={{color:'black',fontSize:15, fontWeight:'600'}}>I accept the</Text>
          <Text style={{color:'green',fontSize:15, fontWeight:'600'}}>Terms of use & Privacy Policy</Text>
          </View>
          
          <TouchableOpacity
            style={[styles.touch, isValidPhoneNumber ? styles.validButton : styles.invalidButton]}
            onPress={validateAndNavigate}
            disabled={!isValidPhoneNumber}
          >
            <Text style={{fontSize:17, fontWeight:'800',color:'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
        {showWarning && <Text style={styles.warningText}>Please enter a valid Phone Number.</Text>}

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 290,
    height: 40,   
    paddingHorizontal: 10,
    color: 'black',
  },
  inputError: {
    borderColor: 'red',
  },
  inputs: {
    justifyContent: 'space-around',
    width: '100%',
    height: 250,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  touch: {
    padding: 10,
    elevation: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width:360,
    marginLeft:22,
    borderRadius:20
  },
  validButton: {
    backgroundColor: 'lightgreen',
  },
  invalidButton: {
    backgroundColor: 'rgb(166, 166, 166)',
  },
  warningText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Home;



