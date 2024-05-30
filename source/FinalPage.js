import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import {FinalAnswer} from './myButton';

export const Final_1 = ({ setPage, stock, setStock }) => {
    const page = 99;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            엔딩 보기 싫으면 절대로 누르지마
        </Text>
        </View>
    );
};

export const Final_2 = ({ setPage, stock, setStock }) => {
    const page = 99;
    return (
        <View>
            <FinalAnswer setPage={setPage} setStock={setStock}>절대로! 누르지마!</FinalAnswer>
        </View>
    );
};