import React from "react";

import {  ActivityIndicator, StyleSheet, Text, View} from "react-native";

function IconLoad ()  {
  return(
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="small" color="#ffffff" />
  </View>
  )
}

export default function TelaLoad(){
    return(
        <View style={styles.tela}>
            <View style={styles.icon}>
            </View>
            <IconLoad/>
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: '#1C4063',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        backgroundColor: '#fff',
        borderRadius: 50,
        width:100,
        height: 100
    },
////////////////////////////////
    container: {
      padding: 50
  },
 
});