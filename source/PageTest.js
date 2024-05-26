import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, Answer, Wrong } from './myButton';
import HSH_question from './HSH_question';

const TopPage = ({ setPage, stock, page }) => {
    return <View>
        <Text style={{ fontSize: 30, margin: 10}}>
            {page === 1 && '1번 문제'}
            {page === 2 && '2번 문제'}
            {page > 2 && '마지막 문제'}
        </Text>
        <Text style={{ fontSize: 30, margin: 10 }}>목숨: {stock}</Text>
    </View>
}


const Page1 = ({ setPage, stock, setStock }) => {
    const page = 1;
    return (
        <View style={styles.container}>
            <Text style={{ width: 500, height: 50 }}> Page1 </Text>
            <Answer setPage={setPage} page={page}>정답</Answer>
            <Wrong stock={stock} setStock={setStock}>오답</Wrong>
        </View>
    );
};

const Page2 = ({ setPage, stock, setStock }) => {
    const page = 2;
    return (
        <>
            <HSH_question stock={stock} setStock={setStock} setPage={setPage} page={page}/>

        </>
            
 
    );
};

const Page3 = ({ setPage, stock, setStock }) => {
    const page = 3;
    return (
        <View>
            <Text style={{ width: 500, height: 50 }}> End of Page </Text>
            <Wrong stock={stock} setStock={setStock}>정답아님</Wrong>
        </View>
    );
};

export default function PageTest() {
    const [stock, setStock] = useState(3);
    const [page, setPage] = useState(1);

    return ( 
            <>
                <TopPage stock={stock} setStock={setStock}/>
                {page === 1 && <Page1 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 2 && <Page2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page > 2 && <Page3 setPage={setPage} stock={stock} setStock={setStock} />}
            </>   
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
        backgroundColor: '#FFCCCC'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCCCFF'
    }
});