import React from 'react';
import {StyleSheet, ScrollView, Text, Image} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {UsersResponse} from '../../interfaces/UsersResponse';
import {User} from './User';

export const ListUsers = () => {
  const url = 'https://walkie-talkie-api.vercel.app/users';

  const {data, loading, error} = useFetch<UsersResponse[]>(url);
  if (data) {
    const [photo, name, id] = data;
    console.log(photo);
  }
  return (
    <ScrollView horizontal>
      {error && <Text>Error</Text>}
      {!loading ? (
        data?.map(({photo, name, id}) => (
          <User avatar={photo.url} name={name} key={id} />
        ))
      ) : (
        <Text>Cargando popo</Text>
      )}
    </ScrollView>
  );
};
