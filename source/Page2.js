import { Text, View, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

export const Page2_1 = ({ setPage, stock, setStock }) => {
    const page = 2;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10}}>
            문제 2: 하얀 버튼을 눌러라!
        </Text>
        </View>
    );
};

export const Page2_2 = ({ setPage, stock, setStock }) => {
    const page = 2;
    return (
        <View>
            <Wrong stock={stock} setStock={setStock}>#ffffff</Wrong>
            <Wrong stock={stock} setStock={setStock}>흰 버튼</Wrong>
            <WhiteButton setPage={setPage} page={page}>이거 아님</WhiteButton>
            <Wrong stock={stock} setStock={setStock}>하얀색 버튼</Wrong>
        </View>
    );
};

//Answer의 코드를 복사하고, 커스터마이징을 함.
export const WhiteButton = (props) => {
    const BasicText = 'White Button'
    return <View>
        <Button onPress={()=>props.setPage(props.page+1)}
        style = {styles.white} 
        textStyle = {styles.blackText}>
            {props.children||BasicText}
        </Button>
    </View>
}

const styles = {
    white: {
        backgroundColor: '#ffffff',
    },
    blackText: {
        color: 'black'
    }
}