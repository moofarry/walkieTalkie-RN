import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {useAppSelector} from '../../store';

export const User = () => {
  const user = useAppSelector(state => state.users.data);

  const img = `https://reactnative.dev/img/tiny_logo.png`;

  const {name, avatar, lastSeen} = {
    name: 'Jhon',
    avatar: 'https://avatars.githubusercontent.com/u/31903051?v=4',
    lastSeen: '04:20 PM',
  };
  return (
    <View style={styles.avatars}>
      <View style={styles.imgContain}>
        <Image
          style={styles.img}
          source={{
            uri: `${avatar}`,
          }}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userInfo.name}>{name}</Text>
        <Text style={styles.userInfo.lastSeen}>{lastSeen}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatars: {
    flex: 1,
    paddingLeft: 2,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingTop: '10%',
  },
  imgContain: {
    borderRadius: 100,
    borderColor: '#222222',
    borderWidth: 2,
  },
  img: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'white',
  },
  userInfo: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    name: {fontSize: 16, color: '#3E4C59', fontWeight: 'bold'},
    lastSeen: {fontSize: 12, color: '#9AA5B1'},
  },
});
