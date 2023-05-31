import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../utils/constants/colors'

const CheckoutScreen = () => {
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
        marginTop:-20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
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
    }
})
export default CheckoutScreen
