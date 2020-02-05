import React from 'react';

import { Container } from './styles';

import Champion from './Champion';

export default function Main({ navigation }) {
  return (
    <Container>
      <Champion navigation={navigation} />
    </Container>
  );
}

Main.navigationOptions = ({ navigation }) => ({
  headerTitleAlign: 'center',
  headerTintColor: 'transparent',
  headerTransparent: true,
});
