import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button } from './myButton';

export const Menu_1 = ({ setPage, stock, setStock }) => {
    const page = 0;
    return (
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontSize: 40, margin: 10, font:'bold'}}>
            센스 퀴즈
            </Text>
            <Text style={{ fontSize: 30, margin: 10, font:'bold'}}>
            크로스플랫폼 7조
            </Text>
        </View>
    );
};

export const Menu_2 = ({ setPage, setStock }) => {
    const page = 0;
    return (
        <View>
            <Answer setPage={setPage} setStock={setStock}>게임 시작</Answer>
        </View>
    );
};

export const Answer = (props) => {
    const BasicText = 'Answer Button'
    const startGame = () => {
        props.setPage(1)
        props.setStock(3)
    }
    return <View>
        <Button onPress={startGame}
        style = {props.style} 
        textStyle = {props.textStyle}>
            {props.children||BasicText}</Button>
    </View>
}
