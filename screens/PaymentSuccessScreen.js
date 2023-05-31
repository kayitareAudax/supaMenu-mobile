import React from 'react'
import { StyleSheet, TouchableOpacity, View,Text,Image } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
import orderSucces from '../assets/order-success.png'
import logo_dark from '../assets/logo_dark.png'
import colors from '../utils/constants/colors'
import { useNavigation } from '@react-navigation/native'
const PaymentSuccessScreen = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.whole}>
    <View style={styles.all}>
        <View style={styles.avatar}>
            <Image resizeMode='cover' style={styles.avatarImg} source={orderSucces}></Image>
        </View>
        <View style={styles.contents}>
            <Text style={styles.successText}>Payment Success, Yayy</Text>
            <Text style={styles.notice}>We will send order details and invoice in your contact no and registered email</Text>
            <TouchableOpacity style={styles.detailsBtn}>
                <Text style={styles.detailsText}>Check Details</Text>
                <Icon name='arrow-right' style={styles.detailsIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Review")} style={styles.download}><Text style={styles.downloadText}>Download Invoice</Text></TouchableOpacity>
            <Image source={logo_dark}></Image>
        </View>
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    whole:{
        backgroundColor:'black',
    },
    all:{
        marginTop:40,
        marginLeft:40,
        display:'flex',
        height:'100%',
        flexDirection:'column'
    },
    avatar:{
        marginLeft:'20%',
        width:'50%',
        height:300
    },
    avatarImg:{
        width:'100%',
        height:'100%'
    },
    contents:{
        width:'85%',
        display:'flex',
        flexDirection:'column',
        marginTop:40
    },
    successText:{
        color:colors.yellowColor,
        fontSize:22,
        marginBottom:10,
        marginLeft:15
    },
    notice:{
        color:'white',
        flexWrap:'wrap',
        marginBottom:25
    },
    detailsBtn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    detailsIcon:{
        marginLeft:10,
        color:colors.yellowColor,
        fontSize:17,
        fontWeight:'800',

    },
    detailsText:{
        fontSize:17,
        fontWeight:'600',
        color:colors.yellowColor,
    },
    download:{
        backgroundColor:colors.yellowColor,
        paddingVertical:20,
        alignItems:'center',
        borderRadius:12,
        marginTop:30
    },
    downloadText:{
        color:'white',
        fontSize:19,
        textAlign:'center',
        fontWeight:'700'
    }
})
export default PaymentSuccessScreen
