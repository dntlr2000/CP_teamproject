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
    },

    hoverColor: {
        backgroundColor: '#CC99FF'
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
        style = {props.style} 
        textStyle = {props.textStyle}>
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
    setTimeout(() => {
        setTime(time - 1)
    }, 1000)
    useEffect(() => {
        if (time === 0) { 
            props.setStock(props.stock - 1);
            setTime(props.time)
        }
    }, [time]);

    return<Text style={{fontSize: 25, fontWeight: 'bold'}}>제한 시간: {time}초</Text>
  }

  //일단은 1회용으로 만들었으나 재활용이나 위에 덮어쓸 가능성이 있으므로 이 밑에다 생성
  export const ButtonHover = (props) => {
    const BasicText = 'Basic Button(Hover)'
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return <View>
        <TouchableOpacity 
        style = {[styles.basic, props.style, hovered && props.hoverStyle]} 
        onPress = {props.onPress}
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        >
            <Text style = {[styles.text, props.textStyle]}>{props.children||BasicText}</Text>
        </TouchableOpacity>
    </View>
    }

  export const AnswerHover = (props) => {
    const BasicText = 'Answer Button(Hover)'
    return <View>
        <ButtonHover onPress={()=>props.setPage(props.page+1)}
        style = {props.style} 
        textStyle = {props.textStyle}
        hoverStyle =  {props.hoverStyle}>
            {props.children||BasicText}</ButtonHover>
    </View>
}

export const WrongHover = (props) => {
    const BasicText = 'Wrong Button(Hover)'
    return <View>
        <ButtonHover onPress={()=>props.setStock(props.stock - 1)}
        style = {props.style} 
        textStyle = {props.textStyle}
        hoverStyle =  {props.hoverStyle}>
            {props.children||BasicText}</ButtonHover>
    </View>
}
