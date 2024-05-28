import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

import {Page1_1, Page1_2} from './Page1'
import {Page2_1, Page2_2} from './Page2'
import {Page3_1, Page3_2} from './Page3'
import {Page4_1, Page4_2} from './Page4'
import {Page5_1, Page5_2} from './Page5'

const TopPage = ({ page, setPage, stock, setStock }) => {
    return <View>
            {page === 1 && <Page1_1/>}
            {page === 2 && <Page2_1/>}
            {page === 3 && <Page3_1/>}
            {page === 4 && <Page4_1 stock = {stock} setStock = {setStock}/>}
            {page === 5 && <Page5_1 setPage = {setPage} stock = {stock} setStock = {setStock}/>}
        <Text style={{ fontSize: 30, margin: 10}}>
            {page > 5 && '마지막 문제'}
        </Text>
        <Text style={{ fontSize: 25, padding: 10 }}>목숨: {stock}</Text>
    </View>
}

const LowerPage = ({page, setPage, stock, setStock}) => {
    return <View>
            {page === 1 && <Page1_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page === 2 && <Page2_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page === 3 && <Page3_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page === 4 && <Page4_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page === 5 && <Page5_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page > 5 && <PageEnd setPage={setPage} stock={stock} setStock={setStock} />}
    </View>
}

export default function Page() {
    const [stock, setStock] = useState(3);
    const [page, setPage] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TopPage page={page} setPage={setPage} stock={stock} setStock={setStock}/>
            </View>
            <View style={styles.bottomContainer}>
                <LowerPage page = {page} setPage={setPage} stock={stock} setStock={setStock}/>
            </View>
        </View>
    );
}

const PageEnd = ({ setPage, stock, setStock }) => {
    const page = 3;
    return (
        <View>
            <Text style={{ width: 500, height: 50 }}> End of Page </Text>
            <Wrong stock={stock} setStock={setStock}>정답아님</Wrong>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 1500,
        width: 600,
        flex: 1,
        padding: 10,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFCCCC'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCCCFF'
    }
});
