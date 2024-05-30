import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

export const Page1_1 = ({ setPage, stock, setStock }) => {
    const page = 1;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            문제 1: 뱀파이어는 세상에서 제일 행복하다. 왜일까?
        </Text>
        </View>
    );
};

export const Page1_2 = ({ setPage, stock, setStock }) => {
    const page = 1;
    return (
        <View>
            <Wrong stock={stock} setStock={setStock}>피가 맛있다</Wrong>
            <Wrong stock={stock} setStock={setStock}>늙지 않는다</Wrong>
            <Wrong stock={stock} setStock={setStock}>돈 많은 귀족이다</Wrong>
            <Answer setPage={setPage} page={page}>해 피해야 한다</Answer>
        </View>
    );
};
