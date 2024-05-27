import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
//원본: HSH_question.js
export const Page3_1 = ({ setPage, stock, setStock }) => {
    const images = [
      require("./imgs/problem_img1.png"),
      require("./imgs/problem_img2.png"),
      require("./imgs/problem_img3.png"),
    ];

    return <View style={styles.questionContainer}>
    <View style={styles.imageContainer}>
      <ImageSlider images={images} />
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>
        핸들을 꽂는 부분과 모양이 같은 구멍을 찾아보자
        {"\n\n\n"}
        핸들을 터치하면 각도가 바뀝니다
      </Text>
    </View>
  </View>
}

export const Page3_2 = ({ setPage, stock, setStock }) => {
    const page = 3
    return <View style={styles.answerContainer}>
    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => {
        //console.log("1")
        setPage(page+1)
        }}>
        <Image source={require("./imgs/answer_img1.png")} style={styles.imgsize}/>             
       </TouchableOpacity>    
    </View>

    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => {
        //console.log("2")
        setStock(stock-1)
        }}> 
        <Image source={require("./imgs/answer_img2.png")} style={styles.imgsize}/>
      </TouchableOpacity>
    </View>

    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => {
        //console.log("3")
        setStock(stock-1)
      }}>  
        <Image source={require("./imgs/answer_img3.png")} style={styles.imgsize}/>    
      </TouchableOpacity>
    </View>
  </View>
}

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);
  
    return (
      <TouchableOpacity onPress={() => {setIndex((index + 1) % images.length);}}>
        <Image source={images[index]} style={styles.imgsize} />
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    basicContainer: {
      flex: 1,
      flexDirection: "column",
    },
  
    questionContainer: {
      flex: 1,
      flexDirection: "row",
    },
  
    imageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    textContainer: {
      flex: 2,
      justifyContent: "center",
    },
  
    answerContainer: {
      flex: 2,
      flexDirection: "row",
    },
  
    imageWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    imgsize: {
      width: 150,
      height: 150,
      margin: 20,
    },
  
    textStyle: {
      fontSize: 20,
      textAlign: "center",
      marginHorizontal: 20,
    },
  });
  