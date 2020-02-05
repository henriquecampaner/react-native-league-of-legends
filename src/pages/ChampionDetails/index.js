import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ChampImage,
  Background,
  SkillBox,
  SkillImage,
  SkillTitle,
  SkillDescription,
  Skill,
  Loading,
} from './styles';

export default function ChampionDetails({ navigation }) {
  const name = navigation.getParam('name');
  const [passive, setPassive] = useState('');
  const [spellQ, setSpellQ] = useState([]);
  const [spellW, setSpellW] = useState([]);
  const [spellE, setSpellE] = useState([]);
  const [spellR, setSpellR] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    setLoading(true);
    const { data } = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/10.3.1/data/en_US/champion/${name}.json`
    );
    const toArray = await Object.entries(data.data);
    setPassive(await toArray[0][1].passive);
    setSpellQ(await toArray[0][1].spells[0]);
    setSpellW(await toArray[0][1].spells[1]);
    setSpellE(await toArray[0][1].spells[2]);
    setSpellR(await toArray[0][1].spells[3]);

    setLoading(false);
  }

  useEffect(() => {
    getDetails();

    console.tron.log(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ChampImage
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`,
          }}
        >
          <Background>
            <SkillBox>
              {/* Passive */}
              <Skill>
                <SkillImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.2.1/img/passive/${name}_Passive.png`,
                  }}
                />
                <SkillTitle>{passive.name}</SkillTitle>
                <SkillDescription>{passive.description}</SkillDescription>
              </Skill>

              <Skill>
                <SkillImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.2.1/img/spell/${name}Q.png`,
                  }}
                />
                <SkillTitle>{spellQ.name}</SkillTitle>
                <SkillDescription>{spellQ.description}</SkillDescription>
              </Skill>

              <Skill>
                <SkillImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.2.1/img/spell/${name}W.png`,
                  }}
                />
                <SkillTitle>{spellW.name}</SkillTitle>
                <SkillDescription>{spellW.description}</SkillDescription>
              </Skill>

              <Skill>
                <SkillImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.2.1/img/spell/${name}E.png`,
                  }}
                />
                <SkillTitle>{spellE.name}</SkillTitle>
                <SkillDescription>{spellE.description}</SkillDescription>
              </Skill>

              <Skill>
                <SkillImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.2.1/img/spell/${name}R.png`,
                  }}
                />
                <SkillTitle>{spellR.name}</SkillTitle>
                <SkillDescription>{spellR.description}</SkillDescription>
              </Skill>
            </SkillBox>
          </Background>
        </ChampImage>
      )}
    </Container>
  );
}

ChampionDetails.navigationOptions = ({ navigation }) => ({
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerTitleAlign: 'center',
  title: <Text>{navigation.getParam('name')} Details</Text>,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={30} color="#000" />
    </TouchableOpacity>
  ),
});
