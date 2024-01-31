import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground1, setRandomBackground1] = useState("#ffffff")
  const [randomBackground2, setRandomBackground2] = useState("#ffffff")
  const [randomBackground3, setRandomBackground3] = useState("#ffffff")

  const generateColor1 = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground1(color)
  }
  const generateColor2 = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground2(color)
  }
  const generateColor3 = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground3(color)
  }
   
  return (
    <>
    
    <View style={[styles.container, {backgroundColor: randomBackground1}]}>
      <TouchableOpacity onPress={generateColor1}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt1}>Click Here to Change The Background Color</Text>
          <Text style={styles.actionBtnTxt2}>Hex Code : {randomBackground1}</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={[styles.container, {backgroundColor: randomBackground2}]}>
      <TouchableOpacity onPress={generateColor2}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt1}>Click Here to Change The Background Color</Text>
          <Text style={styles.actionBtnTxt2}>Hex Code : {randomBackground2}</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={[styles.container, {backgroundColor: randomBackground3}]}>
      <TouchableOpacity onPress={generateColor3}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt1}>Click Here to Change The Background Color</Text>
          <Text style={styles.actionBtnTxt2}>Hex Code : {randomBackground3}</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn:{
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  actionBtnTxt2:{
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 32,
  },
  actionBtnTxt1:{
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  colorHex:{
    fontSize: 25,
    paddingLeft: 65,
    color: '#ffffff'
  }
});

export default App;
