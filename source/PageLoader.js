import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';

import {Page1_1, Page1_2} from './Page1'
import {Page2_1, Page2_2} from './Page2'

const TopPage = ({ page, setPage, stock, setStock }) => {
    return <View>
            {page === 1 && <Page1_1/>}
            {page === 2 && <Page2_1/>}
        <Text style={{ fontSize: 30, margin: 10}}>
            {page > 2 && '마지막 문제'}
        </Text>
        <Text style={{ fontSize: 30, margin: 10 }}>목숨: {stock}</Text>
    </View>
}

const LowerPage = ({page, setPage, stock, setStock}) => {
    return <View>
            {page === 1 && <Page1_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page === 2 && <Page2_2 setPage={setPage} stock={stock} setStock={setStock} />}
            {page > 2 && <PageEnd setPage={setPage} stock={stock} setStock={setStock} />}
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