import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { useState, useEffect } from 'react'

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
    },
    input: {
        width: 400,
        height: 80,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#CCFFFF',
        color: '#000066',
        fontSize: 24
    }
}

export const Answer = (props) => {
    const BasicText = 'Answer Button'
    return <View>
        <Button onPress={()=>props.setPage(props.page+1)}
        style = {props.style} 
        textStyle = {props.textStyle}>
            {props.children||BasicText}</Button>
    </View>
}

export const Wrong = (props) => {
    const BasicText = 'Wrong Button'
    return <View>
        <Button onPress={()=>props.setStock(props.stock - 1)}
        style = {styles.white} 
        textStyle = {styles.blackText}>
            {props.children||BasicText}</Button>
    </View>
}

export const Input = (props) => {
    const [text, setText] = useState('')
    useEffect(() => {
        if (text === props.answer) { 
            props.setPage(props.page + 1);
        }
    }, [text]);
    return <View>
        <TextInput
            style={styles.input}
            placeholder = {props.children||'이곳에다 입력'}
            onChangeText={(text) => {setText(text)}}
        />
    </View>
}
