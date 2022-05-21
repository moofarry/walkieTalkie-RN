import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Microphone = () => {
  const useRecord = () => {
    console.log('xd');
  };
  return (
    <View style={styles.contend}>
      <Pressable onPress={useRecord}>
        <Icon name="microphone-off" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contend: {
    display: 'flex',
    backgroundColor: '#ff3a3a',
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
