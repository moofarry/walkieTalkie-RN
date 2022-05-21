import React from 'react';
import {StyleSheet, ScrollView, Text, Image} from 'react-native';
import {User} from './User';

export const ListUsers = () => {
  const img = `https://reactnative.dev/img/tiny_logo.png`;
  return (
    <ScrollView horizontal style={styles.contend}>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contend: {
    display: 'flex',
    backgroundColor: '#fff',
    height: '30%',
  },
});
