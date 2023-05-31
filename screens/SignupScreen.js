import React,{useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import tw from 'tailwind-react-native-classnames';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleNameChange = (text) => {
      setNames(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePhoneChange = (text) => {
      setPhone(text);
    };
  
    const handlePassChange = (text) => {
      setPass(text);
    };
 
    const handleProceed = ()=>{
        alert('Proceeding...');
    }

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
            <View style={styles.minicontainer}>
                <Text style={styles.text}>Supa<Text style={styles.span}>Menu</Text></Text>
                <View style={styles.microcontainer}>
                <Text style={styles.subtitles}>Welcome...</Text>
                <Text style={tw`text-gray-600`}>please fill in the information</Text>
                </View>
                <View style={styles.form}>
                <CustomInput placeholder="Full Name" icon="user" keyBoardType="default" onChangeText={handleNameChange}/>
                <CustomInput placeholder="Phone Number" icon="phone" keyBoardType='numeric' onChangeText={handlePhoneChange}/>
                <CustomInput placeholder="Your Email" icon="mail" keyBoardType="email-address" onChangeText={handleEmailChange}/>
                <CustomInput placeholder="Password" icon="lock" keyBoardType="default" HiddenText onChangeText={handlePassChange}/>
                <CustomButton text="Proceed" onPress={handleProceed} bg='#fc9403' color='white'/>
                <View style={styles.linecontainer}>
                    <View style={styles.line} />
                    <Text style={styles.linetext}>or</Text>
                    <View style={styles.line} />
                </View>
                <Text style={tw`text-gray-600`}>If you have a PMG account</Text>
                <CustomButton text="sign in" bg='#fc9403' color='white' onPress={()=>navigation.navigate('Login')}/>
                <Text>Already have an account? <Text style={tw`text-yellow-600 underline`} onPress={()=>navigation.navigate('Login')}>Signin</Text></Text>
                </View>
            </View>
            </View>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9403',
  },

  subcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    width:'100%',
    marginTop: 80,
    backgroundColor: '#ffff',
  },

  minicontainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },

  microcontainer:{
   alignItems:'center',
   paddingTop: 15
  },

  text:{
    fontSize:30,
    fontWeight:900,
  },

  span:{
    fontSize:30,
    fontWeight:900,
    color: '#fc9403'
  },

  subtitles:{
    color: '#222582',
    fontWeight: 800,
    fontSize: 16,
    marginBottom: 10
  },

  form:{
    flex: 1,
    alignItems: 'center',
    width:'100%',
    padding:20
  },

  linecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  linetext: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ccc',
    fontSize:20
  },

})

export default SignupScreen