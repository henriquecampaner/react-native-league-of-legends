import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled.ScrollView`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

export const ChampImage = styled.ImageBackground`
  flex: 1;
`;

export const SkillTitle = styled.Text`
  padding-left: 12px;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;

export const SkillDescription = styled.Text`
  text-align: center;
  color: #fff;
`;

export const SkillBox = styled.View`
  margin-top: 10px;
`;

export const Skill = styled.View`
  align-items: center;
  padding-bottom: 20px;
`;

export const SkillImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
