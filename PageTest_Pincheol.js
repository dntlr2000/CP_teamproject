import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Answer, Wrong } from './myButton';
import Que2 from '../../assets/Que2.png';
import Que3 from '../../assets/Que3.png'; 

const TopPage = ({ setPage, stock, page }) => {
    return (
        <View>
            <Text style={{ fontSize: 30, margin: 10 }}>
                {page === 1 && '1번 문제'}
                {page === 2 && '2번 문제 \n\n정답을 구하여라!'}
                {page === 3 && '3번 문제 \n\n성냥을 두 개만 움직여서 \n 가장 큰 수를 구하여라!'}
                {page > 3 && '마지막 문제'}
            </Text>
            {page === 2 && (
                <Image
                    source={Que2}
                    style={{ width: 300, height: 100 }}
                />
            )}
            {page === 3 && (
                <Image
                    source={Que3}
                    style={{ width: 400, height: 170 }}
                />
            )}
            <Text style={{ fontSize: 30, margin: 10 }}>목숨: {stock}</Text>
        </View>
    );
};

const Page1 = ({ setPage, stock, setStock }) => {
    const page = 1;
    return (
        <View>
            <Text style={{ width: 500, height: 50 }}>Page1</Text>
            <Answer setPage={setPage} page={page}>정답</Answer>
            <Wrong stock={stock} setStock={setStock}>오답</Wrong>
        </View>
    );
};

const Page2 = ({ setPage, stock, setStock }) => {
    const page = 2;
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

const Page3 = ({ setPage, stock, setStock }) => {
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
            alert('정답입니다!');
            setPage(4); 
        } else {
            alert('오답입니다!');
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

export default function PageTest() {
    const [stock, setStock] = useState(3);
    const [page, setPage] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TopPage setPage={setPage} stock={stock} page={page} />
            </View>
            <View style={styles.bottomContainer}>
                {page === 1 && <Page1 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 2 && <Page2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page > 2 && <Page3 setPage={setPage} stock={stock} setStock={setStock} />}
            </View>
        </View>
    );
}

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
