
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {justifyContent: 'center' },
  stretch: {
    width: 1500,
    height: 655,
    resizeMode: 'stretch',
  },
});

export default function Index () {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{uri: 'https://thumbs.dreamstime.com/b/panorama-da-praia-de-360-graus-1217568.jpg'}}
      />
    </View>
  );
}

