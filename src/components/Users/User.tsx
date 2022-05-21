import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {UsersResponse} from '../../interfaces/UsersResponse';
import {useAppSelector} from '../../store';

interface UserComponent {
  name: string;
  avatar: string;
}
export const User = ({name, avatar}: UserComponent) => {
  const user = useAppSelector(state => state.users.data);
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
        <Text style={styles.userInfo.name}>{name.split(' ')[0]}</Text>
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
    paddingTop: '3%',
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
    name: {fontSize: 16, color: '#9AA5B1', fontWeight: 'bold'},
  },
});
