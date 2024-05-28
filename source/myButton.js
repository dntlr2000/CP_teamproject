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

export const TimeLimit = (props) => {
    const [time, setTime] = useState(props.time)

    //
    setTimeout(() => {
        setTime(time - 1)
    }, 1000)
    useEffect(() => {
        if (time === 0) { 
            props.setStock(props.stock - 1);
            setTime(props.time)
        }
    }, [time]);
    
    /* //테스트 중. 이후 위를 지우든 아래를 지우든 할 것.
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(prevTime => prevTime - 1)
        }, 1200);
        return () => clearTimeout(timer) 
    }, [time])
    useEffect(() => {
        if (time === 0) {
            props.setStock(props.stock = props.stock - 1) 
            setTime(props.time)
        }
    }, [time, props])
    */
    return<Text style={{fontSize: 25, fontWeight: 'bold'}}> 제한 시간: {time}초 </Text>
  }
