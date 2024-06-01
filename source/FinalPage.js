import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import {FinalAnswer} from './myButton';

export const Final_1 = ({ setPage, stock, setStock }) => {
    const page = 99;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            당신이 이 프로젝트에 등급을 매긴다면 몇 등급을 매기시겠습니까?
        </Text>
        </View>
    );
};

export const Final_2 = ({ page, setPage, stock, setStock }) => {

    return (
        <View>
            <FinalAnswer setPage={setPage} setStock={setStock} page={page}>A+</FinalAnswer>
        </View>
    );
};
