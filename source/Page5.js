import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import {Wrong} from './myButton';

export const Page5_1 = ({ setPage, stock, setStock }) => {
    const page = 5;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
             시간이 없다! 빨리 1을 찾아서 눌러라!
        </Text>
        <TimeLimit time={5} page = {page} setPage = {setPage} stock = {stock} setStock={setStock}/>
        </View>
    );
};

export const Page5_2 = ({ setPage, stock, setStock }) => {
    const page = 5;
    return (
        <View>
            <View>
            <Wrong stock={stock} setStock={setStock}>(3 + 7) / 5</Wrong>
            <Wrong stock={stock} setStock={setStock}>9999 / 3333 + 6666</Wrong>
            <Wrong stock={stock} setStock={setStock}>0.25 * 3</Wrong>
            <Wrong stock={stock} setStock={setStock}>2 * 3 * 4 / 6 - 4</Wrong>
        </View>
        </View>
    );
};

//1회용으로 사용할 컴포넌트이기에 myButton이 아니라 여기서 정의
export const TimeLimit = (props) => {
    const [time, setTime] = useState(props.time)
    setTimeout(() => {
        setTime(time - 1)
    }, 1000)
    useEffect(() => {
        if (time === 0) { 
            props.setStock(props.stock - 1);
            setTime(props.time)
        }
    }, [time]);

    const clicked = () => {
        if (time === 1) {
            props.setPage(props.page + 1);
        }
        else {
            props.setStock(props.stock - 1);
        }
    }

    return<TouchableOpacity onPress={clicked}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>제한 시간: {time}초</Text>
    </TouchableOpacity>
  }