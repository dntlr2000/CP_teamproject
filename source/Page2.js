import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

export const Page2_1 = ({ setPage, stock, setStock }) => {
    const page = 2;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            하얀 버튼을 눌러라!
        </Text>
        </View>
    );
};

export const Page2_2 = ({ setPage, stock, setStock }) => {
    const page = 2;
    return (
        <View>
            <Wrong stock={stock} setStock={setStock}>#ffffff</Wrong>
            <Wrong stock={stock} setStock={setStock}>흰 버튼</Wrong>
            <Answer setPage={setPage} page={page} style = {styles.white} textStyle = {styles.blackText}>이거 아님</Answer>
            <Wrong stock={stock} setStock={setStock}>하얀색 버튼</Wrong>
        </View>
    );
};

const styles = {
    white: {
        backgroundColor: '#ffffff',
    },
    blackText: {
        color: 'black'
    }
}
