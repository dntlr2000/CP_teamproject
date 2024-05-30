import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, Answer, Wrong } from './myButton';
import problem_img9 from "./imgs/problem_img9.png";

export const Page9_1 = ({ setPage, stock, setStock }) => {
    const page = 9;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10 }}>
                정답을 구하여라!
            </Text>
            {page === 9 && (
                <Image
                    source={problem_img9}
                    style={{ width: 300, height: 100 }}
                />
            )}
        </View>
    );
};

export const Page9_2 = ({ setPage, stock, setStock }) => {
    const page = 9;
    return (
        <View>
            <Answer setPage={setPage} page={page}>12</Answer>
            <Wrong stock={stock} setStock={setStock}>13</Wrong>
            <Wrong stock={stock} setStock={setStock}>14</Wrong>
            <Wrong stock={stock} setStock={setStock}>15</Wrong>
        </View>
    );
};
