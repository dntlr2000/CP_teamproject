import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Answer, Wrong } from './myButton';
import problem_img8 from "./imgs/problem_img8.png";

export const Page8_1 = ({ setPage, stock, setStock }) => {
    const page = 5;
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10 }}>
                문제 5: 성냥을 두 개만 움직여서 가장 큰 수를 구하여라!
            </Text>
            {page === 5 && (
                <Image
                    source={problem_img8}
                    style={{ width: 300, height: 150 }}
                />
            )}
        </View>
    );
};

export const Page8_2 = ({ setPage, stock, setStock }) => {
    const [input, setInput] = useState('');
    const correctAnswer = '51181';

    const handleButtonPress = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleSubmit = () => {
        if (input === correctAnswer) {
            setPage(9); // 다음 페이지로 이동
        } else {
            setStock(stock - 1);
        }
        setInput('');
    };

    return (
        <View style={styles.pageContainer}>
            <View style={styles.answerZone}><Text>{input}</Text></View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    {['1', '2', '3'].map((label, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => handleButtonPress(label)}
                        >
                            <Text style={styles.buttonText}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    {['4', '5', '6'].map((label, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => handleButtonPress(label)}
                        >
                            <Text style={styles.buttonText}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    {['7', '8', '9'].map((label, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => handleButtonPress(label)}
                        >
                            <Text style={styles.buttonText}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={handleClear}>
                        <Text style={styles.buttonText}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFCCCC',
        alignItems: 'center', // Center the image horizontally
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCCCFF',
    },
    pageContainer: {
        alignItems: 'center',
    },
    answerZone: {
        width: 250,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        fontSize: 24,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
    },
    button: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 24,
    },
});
