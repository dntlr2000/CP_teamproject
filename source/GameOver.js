import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button } from './myButton';

export const Over_1 = ({ setPage, stock, setStock }) => {
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            게임 오버
        </Text>
        </View>
    );
};

export const Over_2 = ({ setPage, setStock, page }) => {
    return (
        <View>
            <Text style={{ fontSize: 40, margin: 10}}>맞힌 문제: {page - 1}개</Text>
            <Text style={{ fontSize: 30, margin: 10}}>
                {page < 4 && '에고고... 신중하게 풀어보세요!'}
                {page >= 4 && page <= 7 && '조금만 더 노력하면 끝까지 풀 수 있어요!'}
                {page > 7 && '끝까지 푸셨군요! 축하드려요!'}
            </Text>
            <ResetButton setPage={setPage} setStock= {setStock}>메인 화면으로</ResetButton>
        </View>
    );
};

export const ResetButton = (props) => {
    const BasicText = 'Reset Button'
    const ResetGame = () => {
        props.setStock(-1)
        props.setPage(0)
    }
    return <View>
        <Button onPress={ResetGame}
        style = {props.style} 
        textStyle = {props.textStyle}>
            {props.children||BasicText}</Button>
    </View>
}