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
import {Page8_1, Page8_2} from './Page8'
import {Page9_1, Page9_2} from './Page9'
import {Page10_1, Page10_2} from './Page10'

import {Final_1, Final_2} from './FinalPage'
import {Over_1, Over_2} from './GameOver'

const TopPage = ({ page, setPage, stock, setStock, isDark, setIsDark }) => {
    
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
                {page === 8 && <Page8_1/>}
                {page === 9 && <Page9_1/>}
                {page === 10 && <Page10_1 isDark = {isDark} setPage = {setPage}/>}
                {page > 10 && <Final_1/>}

                {page != 5 && <Text style={{ fontSize: 25, padding: 10 }}>목숨: {stock}</Text>}
            </>}
        
        
    </View>
}

const LowerPage = ({page, setPage, stock, setStock, isDark, setIsDark}) => {
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
                {page === 8 && <Page8_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 9 && <Page9_2 setPage={setPage} stock={stock} setStock={setStock} />}
                {page === 10 && <Page10_2 setPage={setPage} stock={stock} setStock={setStock} isDark = {isDark} setIsDark = {setIsDark} />}
                {page > 10 && <Final_2 setPage={setPage} stock={stock} setStock={setStock} page={page}/>}
            </>}
    </View>
}

export default function Page() {
    const [stock, setStock] = useState(-1);
    const [page, setPage] = useState(0);
    const [isDark, setIsDark] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TopPage page={page} setPage={setPage} stock={stock} setStock={setStock} isDark = {isDark} setIsDark = {setIsDark}/>
            </View>
            <View style={styles.bottomContainer}>
                <LowerPage page = {page} setPage={setPage} stock={stock} setStock={setStock} isDark = {isDark} setIsDark = {setIsDark}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 900,
        width: 620,
        flex: 1,
        padding: 2,
        justifyContent: 'center',
        //flexDirection: 'row'
        borderWidth: 2,
        borderColor:'black'
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCCCFF',
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
      }
});
