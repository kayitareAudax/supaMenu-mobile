import React from 'react'
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.all}>
        <View style={styles.avatar}>
            <Image></Image>
        </View>
        <View style={styles.contents}>
            <Text>Payment Success, Yayy</Text>
            <Text>We will send order details and invoice in your contact no and registered email</Text>
            <TouchableOpacity>
                <Text>Check Details</Text>
                <Icon name='arrow-right'/>
            </TouchableOpacity>
            <TouchableOpacity><Text>Download Invoice</Text></TouchableOpacity>
            {/* logo */}
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    all:{},

})
export default PaymentSuccessScreen
