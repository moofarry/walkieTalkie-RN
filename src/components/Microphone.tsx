import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Microphone = () => {
  const useRecord = () => {
    console.log('xd');
  };
  return (
    <Pressable onPress={useRecord}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: -Dimensions.get('window').height * 0.06,
          bottom: 0,
          alignItems: 'center',
        }}>
        <View style={styles.contend}>
          <Icon name="microphone" size={30} color="#fff" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contend: {
    borderRadius: 100,
    width: 80,
    height: 80,
    backgroundColor: '#ff3a3a',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
