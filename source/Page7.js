import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Wrong, AnswerHover, WrongHover } from './myButton';

export const Page7_1 = ({ setPage, stock, setStock }) => {
    const page = 7;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            검은 버튼을 눌러라!
        </Text>
        </View>
    );
};

export const Page7_2 = ({ setPage, stock, setStock }) => {
    const page = 7;
    return (
        <View>
            <Wrong stock={stock} setStock={setStock}>버튼</Wrong>
            <Wrong stock={stock} setStock={setStock} style={styles.green}>버튼</Wrong>
            <WrongHover stock={stock} setStock={setStock} style={styles.black} hoverStyle={styles.purple}>버튼</WrongHover>
            <AnswerHover setPage={setPage} page={page} style = {styles.purple} hoverStyle={styles.black}>버튼</AnswerHover>
        </View>
    );
};

const styles = {
    white: {
        backgroundColor: '#ffffff',
    },
    black: {
        backgroundColor: '#000000'
    },
    purple: {
        backgroundColor: '#CC99FF'
    },
    green: {
        backgroundColor: '#009900'
    },
    blackText: {
        color: 'black'
    }
}
