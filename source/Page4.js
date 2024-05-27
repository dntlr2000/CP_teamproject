import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button, Answer, Wrong, Input } from './myButton';

export const Page4_1 = ({ setPage, stock, setStock }) => {
    const page = 1;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            비밀번호를 입력해라! 
        </Text>
        </View>
    );
};

export const Page4_2 = ({ setPage, stock, setStock }) => {
    const page = 4;
    return (
        <View>
            <Input setPage={setPage} page={page} answer = '비밀번호'>비밀번호를 입력하세요.</Input>
        </View>
    );
};