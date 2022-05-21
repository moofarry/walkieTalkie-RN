import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Microphone} from './Microphone';
import {ListUsers} from './Users/ListUsers';
import {Dimensions} from 'react-native';

export const WalkieTalkie = () => {
  return (
    <View style={styles.contend}>
      <ScrollView style={styles.main}>
        <Text> WalkieTalkie</Text>
      </ScrollView>
      <View style={styles.microphone}>
        <Microphone />
      </View>
      <View>
        <ListUsers />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contend: {backgroundColor: '#1b235f'},
  main: {height: '65%'},
  microphone: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: Dimensions.get('window').height * 0.6,
    bottom: 0,
    zIndex: 1,
  },
});
