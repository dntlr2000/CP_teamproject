import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Input, TimeLimit } from './myButton';

export const Page4_1 = ({ setPage, stock, setStock }) => {
    const page = 4;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
             비밀번호를 입력해라! 
        </Text>
        <TimeLimit time={9} stock = {stock} setStock={setStock}/>
        </View>
    );
};

export const Page4_2 = ({ setPage, stock, setStock }) => {
    const page = 4;
    return (
        <View>
            <Text style = {{fontSize: 20}}>password: 34 / (9 + 12) - 28 + 882 - 12 {'\n\n'} </Text>
            <Input setPage={setPage} page={page} answer = '비밀번호'>비밀번호를 입력하세요.</Input>
        </View>
    );
};
