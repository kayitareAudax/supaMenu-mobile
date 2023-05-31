import React from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import colors from '../utils/constants/colors'

const MobileProvider = ({provider}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageCont}>
        {/* <Image source={provider.image} resizeMode='cover'></Image> */}
        </View>
        <Text style={styles.name}>{provider.name}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:100,
        marginBottom:15
    },
    imageCont:{
        backgroundColor:'gray',
        width:'40%',
        height:'100%',

    },
    image:{
        width:'100%',
    },
    name:{
        fontSize:19,
        fontWeight:'500',
        color:colors.blackText,
        marginLeft:20
    }

})
export default MobileProvider
