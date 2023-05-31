import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import DrinkCard from '../components/DrinkCard'
import colors from '../utils/constants/colors'
import drinkImage from '../assets/image.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import Menu from '../components/Menu'
import { useState } from 'react'
const CartScreen = () => {
    const [total,setTotal]=useState(0);
    const handleClicks=(data)=>{
        setTotal(data)
    }
    const navigation=useNavigation()
    const drinks = [{ id: 1, image: drinkImage, ingredients: ['Coffe', 'sugar', 'chocolate'], name: 'Tom Yummy - 12.5', price: 5000 }, { id: 2, image: drinkImage, ingredients: ['Coffe', 'sugar', 'chocolate'], name: 'Tom Yummy - 12.5', price: 5000 }, { id: 3, image: drinkImage, ingredients: ['Coffe', 'sugar', 'chocolate'], name: 'Tom Yummy - 12.5', price: 5000 }]
    return (
        <View>
        <View style={styles.all}>
            <TouchableOpacity style={styles.iconBtn}>
                <Icon name='chevron-left' style={styles.backIcon}></Icon>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.kigali}>Choose Kigali</Text>
                <Text style={styles.drinksText}>Drinks</Text>

            </View>
            <View style={styles.drinks}>
                <FlatList data={drinks} keyExtractor={(item => item.id)} renderItem={({ item }) => (
                    <DrinkCard drink={item} handleClicks={handleClicks}/>
                )}>
                    <DrinkCard />
                </FlatList>
            </View>
            <TouchableOpacity style={styles.more}><Text style={styles.moreText}>more drinks</Text>
            <Icon name='arrow-right' style={styles.moreIcon}/>
            </TouchableOpacity>
            <View style={styles.total}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.money}>Frw {total}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigae("Facture")} style={styles.checkout}><Text style={styles.checkoutText}>Proceed to Checkout</Text></TouchableOpacity>
        </View>
        <Menu/>
        </View>
    )
}
const styles = StyleSheet.create({
    all: {
        width: '85%',
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    iconBtn: {
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
        color: colors.yellowColor
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    kigali: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        marginBottom: 6
    },
    drinksText: {
        color: colors.yellowColor,
        fontWeight: '400',
        fontSize: 24,
        marginBottom: 6
    },
    drinks: {
        display: 'flex',
        flexDirection: 'column',

    },
    more: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    moreText: {
        color: colors.yellowColor,
        fontWeight: '600',
        fontSize: 16,
    },
    moreIcon: {
        color: colors.yellowColor,
        fontSize: 14,
        marginLeft:15,
        fontWeight: '500'
    },
    total: {
        marginVertical:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    totalText: {
        fontWeight:'bold',
        fontSize:17,
    },
    money: {
        color:colors.yellowColor,
        fontWeight:'bold',
        fontSize:17
    },
    checkout: {
        backgroundColor:colors.yellowColor,
        borderRadius:10,
        textAlign:'center',
        paddingVertical:20

    },
    checkoutText: {
        color:'white',
        fontSize:17,
        fontWeight:'800',
        textAlign:'center'
    }
})
export default CartScreen
