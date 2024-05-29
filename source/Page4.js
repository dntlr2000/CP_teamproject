import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, Answer, Wrong } from './myButton';
import problem_img4 from "./imgs/problem_img4.png";

export const Page4_1 = ({ setPage, stock, setStock }) => {
    const page = 4;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10 }}>
                문제 4: 정답을 구하여라!
            </Text>
            {page === 4 && (
                <Image
                    source={problem_img4}
                    style={{ width: 300, height: 100 }}
                />
            )}
        </View>
    );
};

export const Page4_2 = ({ setPage, stock, setStock }) => {
    const page = 4;
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Wrong stock={stock} setStock={setStock} style={{ width: '48%' }}>13</Wrong>
                <Wrong stock={stock} setStock={setStock} style={{ width: '48%' }}>14</Wrong>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Answer setPage={setPage} page={page} style={{ width: '48%' }}>12</Answer>
                <Wrong stock={stock} setStock={setStock} style={{ width: '48%' }}>15</Wrong>
            </View>
        </View>
    );
};
