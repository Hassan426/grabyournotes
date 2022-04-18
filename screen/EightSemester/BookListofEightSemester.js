import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Button2 from '../../components/Button2';

const BookListofEightSemester = ({navigation}) => {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.9,
        }}>
        <Button2
          title={'CSI-301   Introduction to computing 4(3-1)'}
          onPress={() => navigation.navigate('PDF36')}
        />
        <Button2
          title={'CIT-303   Programming Fundmentals 3(3-1)'}
          onPress={() => navigation.navigate('PDF37')}
        />
      </View>
    </ImageBackground>
  );
};

export default BookListofEightSemester;

const styles = StyleSheet.create({});
