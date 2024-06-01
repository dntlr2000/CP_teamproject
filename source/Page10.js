import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, Answer, Wrong, BoolSwitch } from './myButton';

export const Page10_1 = ({ setPage, stock, setStock, isDark }) => {
    const page = 10;
    return (
        <View style = {isDark === false ? styles.lightTheme : styles.darkTheme}>
            <Text style={{ fontSize: 30, margin: 10, color: 'white'}}> 하얀 버튼 중에 {'\n'}</Text>
            <Text style={isDark === false ? styles.blackText : styles.grayText}> 아무 버튼을 눌러도 정답이야!</Text>
            <Text style={isDark === false ? styles.blackText : styles.grayText}> 보너스 문제라고 생각해!</Text>
            <Answer setPage={setPage} page={page} style={styles.little}> </Answer>

        </View>
    );
};

export const Page10_2 = ({ setPage, stock, setStock, isDark, setIsDark }) => {
    const page = 10;
    return (
        <View>
            <View>
            <Wrong stock={stock} setStock={setStock}>ERROR</Wrong>
            <Wrong stock={stock} setStock={setStock}>ERROR</Wrong>
            <Wrong stock={stock} setStock={setStock}>ERROR</Wrong>
            <Wrong stock={stock} setStock={setStock}>ERROR</Wrong>
            </View>
            <View style = {styles.temp}>
                <BoolSwitch isTrue = {isDark} setIsTrue = {setIsDark}/>
            </View>
        </View>
    );
};


const styles = {
    little: {
        backgroundColor: '#ffffff',
        padding: 5,
        margin : 5,
        borderRadius: 2,
        width: 25,
        height: 15,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    lightTheme: {
      backgroundColor: '#ffffff'  
    },
    darkTheme: {
        backgroundColor: '#000000'
    },
    blackText: {
        color: 'black',
        fontSize: 30,
        margin: 10
    },
    grayText: {
        color: '#666666',
        fontSize: 30,
        margin: 10,
    },
    temp: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}