import React, { useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';

import axios from 'axios';

import {
  Champions,
  ChampImage,
  NameContainer,
  ChampName,
  ChampDescription,
  ButtomContainer,
} from './styles';

export default function Champion({ navigation }) {
  const [champions, setChampions] = useState([]);

  async function getChampions() {
    const { data } = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json'
    );

    setChampions(Object.entries(data.data));

    // champions.map(i => console.tron.log(i[1]));
    console.tron.log(champions);
  }

  useEffect(() => {
    getChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectChamp(name) {
    navigation.navigate('ChampionDetails', { name });
  }

  return (
    <Champions>
      <FlatList
        data={champions}
        keyExtractor={champ => String(champ[0])}
        renderItem={({ item }) => (
          <ButtomContainer onPress={() => handleSelectChamp(item[1].name)}>
            <ChampImage
              source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item[0]}_0.jpg`,
              }}
            >
              <NameContainer>
                <ChampName>{item[1].name}</ChampName>
                <ChampDescription>{item[1].title}</ChampDescription>
              </NameContainer>
            </ChampImage>
          </ButtomContainer>
        )}
      />
    </Champions>
  );
}

// {champions.map(champ => (
// <ChampImage
//   source={{
//     uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ[0]}_0.jpg`,
//   }}
// >
//   <NameContainer>
//     <ChampName>{champ[1].name}</ChampName>
//     <ChampDescription>{champ[1].title}</ChampDescription>
//   </NameContainer>
// </ChampImage>
// ))}
