import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Champions = styled.View``;

export const NameContainer = styled(LinearGradient).attrs({
  colors: [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.001)',
    '#000',
    '#000',
  ],
})`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: flex-end;
`;

export const ChampImage = styled.ImageBackground`
  margin-bottom: 40px;
  width: 308px;
  height: 560px;
  justify-content: flex-end;
`;

export const ChampName = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const ChampDescription = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const ButtomContainer = styled(RectButton)``;
