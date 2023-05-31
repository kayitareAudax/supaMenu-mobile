import React from 'react'
import { Image, StyleSheet, View,Text,TouchableOpacity } from 'react-native'
import drinkImage from '../assets/image.png'
import colors from '../utils/constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'

const DrinkCard = ({drink,handleClicks}) => {
    const [counter,setCounter]=useState(0);
    const [price,setPrice]=useState(drink.price)
    handleClicks(price)
  return (
    <View style={styles.container}>
        <View style={styles.imageCont}>
            <Image source={drink.image} resizeMode='cover' style={styles.image}/>
        </View>
        <View style={styles.contents}>
            <View style={styles.ingredients}>
            {drink.ingredients.map((item,idx)=>(
                <Text style={styles.ingredient}>{item} {idx!=drink.ingredients.length-1?null:','}</Text>
            ))}
            </View>
            <Text style={styles.name}>{drink.name}</Text>
            <View style={styles.bottom}>
            <Text style={styles.amount}>Frw {price*counter}</Text>
            <View>
                <View style={styles.incrementor}>
                    <TouchableOpacity><Icon name='minus'  onPress={()=>setCounter(counter-1)} style={ styles.incrementorIcon}/></TouchableOpacity>
                    <Text>{counter}</Text>
                    <TouchableOpacity>
                    <Icon name='plus'  onPress={()=>setCounter(counter+1)} style={ styles.incrementorIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:colors.grayLike,
        borderRadius:8,
        display:'flex',
        flexDirection:'row',
        paddingVertical:3,
        height:100,
        marginBottom:14
    },
    imageCont:{
        width:'20%',
        borderRadius:12,
        height:'85%',
        marginVertical:7,
        marginLeft:5
    },
    image:{
        width:'100%',
        height:'100%'
    },
    contents:{
        width:'75%',
        marginLeft:40,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',

    },
    ingredients:{
        display:'flex',
        flexDirection:'row',
        marginBottom:3
    },
    ingredient:{
        fontSize:11,
        fontWeight:'500',
        color:'gray',
        marginBottom:4
    },
    name:{
        fontSize:14,
        marginBottom:5,
        color:'gray',
        fontWeight:'bold'
    },
    bottom:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // width:'100%',
        marginBottom:5,
        marginRight:3
    },
    amount:{
        fontSize:24,
        color:colors.yellowColor,
        fontWeight:700,
        marginRight:40
        
    },
    incrementor:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:4,
        backgroundColor:'#fff'
    },
    incrementorIcon:{
        fontSize:15,
        color:colors.yellowColor,
        marginHorizontal:9,
        fontWeight:'400'
    },
    incrementorText:{
        fontSize:18,
        fontWeight:'bold',
    }
})
export default DrinkCard
