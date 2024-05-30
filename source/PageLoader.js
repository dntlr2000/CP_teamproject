import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button, Answer, Wrong, FinalAnswer } from './myButton';

import { Menu_1, Menu_2 } from './Menu';

import {Page1_1, Page1_2} from './Page1'
import {Page2_1, Page2_2} from './Page2'
import {Page3_1, Page3_2} from './Page3'
import {Page4_1, Page4_2} from './Page4'
import {Page5_1, Page5_2} from './Page5'
import {Page6_1, Page6_2} from './Page6'
import {Page7_1, Page7_2} from './Page7'

import {Final_1, Final_2} from './FinalPage'
import {Over_1, Over_2} from './GameOver'

const TopPage = ({ page, setPage, stock, setStock }) => {
    
    return <View>
            {page === 0 && <Menu_1/>}
            {stock === 0 && <Over_1 setStock={setStock}/>}
            {stock > 0 && <>
                {page === 1 && <Page1_1/>}
                {page === 2 && <Page2_1/>}
                {page === 3 && <Page3_1/>}
                {page === 4 && <Page4_1 stock = {stock} setStock = {setStock}/>}
                {page === 5 && <Page5_1 setPage = {setPage} stock = {stock} setStock = {setStock}/>}
                {page === 6 && <Page6_1/>}
                {page === 7 && <Page7_1/>}
                {page > 7 && <Final_1/>}

                <Text style={{ fontSize: 25, padding: 10 }}>목숨: {stock}</Text>
            </>}
        
        
    </View>
}

const LowerPage = ({page, setPage, stock, setStock}) => {
    return <View>
            {page === 0 && <Menu_2 setPage={setPage} setStock={setStock} />}
            {stock === 0 && <Over_2 setPage={setPage} page = {page} setStock = {setStock}/>}
            {stock > 0 && <>
                {page === 1 && <Page1_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 2 && <Page2_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 3 && <Page3_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 4 && <Page4_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 5 && <Page5_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 6 && <Page6_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 7 && <Page7_2 setPage={setPage} stock={stock} setStock={setStock} />}

                {page > 7 && <Final_2 setPage={setPage} stock={stock} setStock={setStock} />}
            </>}
    </View>
}

export default function Page() {
    const [stock, setStock] = useState(-1);
    const [page, setPage] = useState(0);
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
