import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

export const Page6_1 = ({ setPage, stock, setStock }) => {
    const page = 6;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            지금이 몇 번째 문제더라?
        </Text>
        </View>
    );
};

export const Page6_2 = ({ setPage, stock, setStock }) => {
    const page = 6;
    return (
        <View>
            <Wrong stock={stock} setStock={setStock}>5</Wrong>
            <Answer setPage={setPage} page={page}>6</Answer>
            <Wrong stock={stock} setStock={setStock}>7</Wrong>
            <Wrong stock={stock} setStock={setStock}>8</Wrong>
        </View>
    );
};