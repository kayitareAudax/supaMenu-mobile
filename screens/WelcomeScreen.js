import React, { useEffect } from 'react';
import { View,Text,SafeAreaView,StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate('Facture');
      navigation.navigate('Signup');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={[tw`flex-1 items-center pt-44`,styles.container]}>
      <Text style={tw`text-4xl font-bold`}>Supa<Text style={tw`text-white`}>Menu</Text></Text>
    </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7941D',
  },
})

export default WelcomeScreen;
