import React from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import GestureHandler, { PinchGestureHandler } from 'react-native-gesture-handler';
// import { GestureHandler } from 'expo';
// const  PinchGestureHandler  = GestureHandler;

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screen.width,
    height: screen.width,
  },
});

export default class App extends React.Component {
  scale = new Animated.Value(2.5);

  onPinchEvent = Animated.event([{ nativeEvent: { scale: this.scale } }], {
    useNativeDriver: true,
  });

  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === GestureHandler.State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 1,
      }).start();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchStateChange}
        >
          <Animated.Image
            source={{
              uri:
                'https://st3.depositphotos.com/1007980/19406/i/600/depositphotos_194063268-stock-photo-360-equirectangular-panorama-miami-haulover.jpg',
            }}
            style={[
              styles.image,
              {
                transform: [{ scale: this.scale }],
              },
            ]}
            resizeMode="contain"
          />
        </PinchGestureHandler>
      </View>
    );
  }
}