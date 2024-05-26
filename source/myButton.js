import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react'

export const Button = (props) => {
    const BasicText = 'Basic Button'
    return <View>
        <TouchableOpacity style = {[styles.basic, props.style]} onPress = {props.onPress}>
            <Text style = {[styles.text, props.textStyle]}>{props.children||BasicText}</Text>
        </TouchableOpacity>
    </View>
    }
    

const styles = {
    basic: {
        backgroundColor: '#3498db',
        padding: 16,
        margin : 10,
        borderRadius: 8,
        width: 400,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        color: 'white'
    }
}

export const Answer = (props) => {
    const BasicText = 'Answer Button'
    return <View>
        <Button onPress={()=>props.setPage(props.page+1)}>{props.children||BasicText}</Button>
    </View>
}

export const Wrong = (props) => {
    const BasicText = 'Wrong Button'
    return <View>
        <Button onPress={()=>props.setStock(props.stock - 1)}>{props.children||BasicText}</Button>
    </View>
}

