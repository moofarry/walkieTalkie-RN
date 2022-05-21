import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Microphone} from './Microphone';
import {ListUsers} from './Users/ListUsers';
import {Dimensions} from 'react-native';

export const WalkieTalkie = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.contend}>
        <Text> WalkieTalkie</Text>
      </View>

      <View style={styles.footer}>
        <Microphone />
        <ListUsers />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contend: {backgroundColor: '#1b235f', flex: 1},
  footer: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height * 0.3,
  },
});
