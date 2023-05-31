import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../utils/constants/colors'
import mtn from '../assets/kind.png'
import MobileProvider from '../components/MobileProvider'

const CheckoutScreen = () => {
    const providers=[{image:mtn,name:'MTN Mobile Money'},{image:mtn,name:'Airtel Money'},{image:mtn,name:'Card'}]
    return (
        <View style={styles.all}>
            <View style={styles.topBar}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={styles.backBtn}>
                        <Icon name='chevron-left' style={styles.backIcon} />
                    </TouchableOpacity>
                    {/* <View style={styles.header}> */}
                    <View style={styles.header}>
                        <Text style={styles.checkoutText}>Checkout</Text>
                        <View style={styles.amountCont}>
                            <Text style={styles.amount}>Frw 16,000</Text>
                            <Text style={styles.vat}>including VAT(18%)</Text>
                        </View>
                        {/* </View> */}
                    </View>
                </View>
            </View>
                <View style={styles.touchables}>
                    <TouchableOpacity style={styles.credit}>
                        <Text style={styles.creditText}>Credit card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mobile}><Text style={styles.mobileText}>Mobile & Cash</Text></TouchableOpacity>
                </View>
                <View style={styles.providers}>
                    <FlatList style={styles.list} data={providers} renderItem={({item})=>(
                        <MobileProvider provider={item}/>
                    )}/>
                    <Text style={styles.notice}>We will send you an order details to your email after the successful payment</Text>
                <TouchableOpacity style={styles.paymentBtn}>
                    <Icon name='lock' style={styles.paymentIcon}></Icon>
                    <Text style={styles.paymentText}>Pay for the order</Text>
                </TouchableOpacity>
                </View>
                
        </View>
    )
}
const styles = StyleSheet.create({
    all: {
        marginVertical: 20,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    topBar: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        shadowColor: colors.greenColor,
        shadowOffset: { width: 4, height: 3 }
    },
    headerContent: {
        marginLeft: 10
    },
    backBtn: {
        marginTop: 20,
        width: '12%',
        backgroundColor: colors.grayLike,
        paddingVertical: 7,
        paddingHorizontal: 1,
        borderRadius: 5,
        textAlign: 'center'

    },
    backIcon: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
        color: colors.greenColor
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 20
    },
    checkoutText: {
        fontSize: 25,
        fontWeight: '600',
        color: colors.blackText
    },
    amountCont: {
        display: "flex",
        flexDirection: 'column',
        marginRight: 9
    },
    amount: {
        color: colors.greenColor,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 8
    },
    vat: {
        color: colors.grayText,
        fontSize: 16,
        fontWeight: '500'
    },
    touchables: {
        marginTop:-15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        marginLeft:40,
        borderRadius: 10,
        backgroundColor: colors.greenColor,
        width: '80%'
    },
    credit: {
        backgroundColor: 'white',
        width: '50%',
        paddingVertical: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems:'center',
        justifyContent:'center'

    },
    creditText: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        // alignItems:'center'
    },
    mobile: {
        width: '50%',
        paddingVertical: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    mobileText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'
    },
    providers:{
        marginTop:40,
        marginLeft:10,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    list:{
        marginLeft:20
    },
    notice:{
        color:'gray',
        marginLeft:20,
        opacity:0.8,
        flexWrap:'wrap',
        fontSize:14,
        marginTop:30,
        width:'80%'
    },
    paymentBtn:{
        textAlign:'center',
        paddingVertical:12,
        borderRadius:10,
        marginVertical:10,
        backgroundColor:colors.greenColor,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    paymentIcon:{
        color:'white',
        fontSize:19,
        fontWeight:'bold',
        marginRight:10
    },
    paymentText:{
        color:'white',
        fontSize:19,
        fontWeight:'700',
        textAlign:'center',
    }
})
export default CheckoutScreen
