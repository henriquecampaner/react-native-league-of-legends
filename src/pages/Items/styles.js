import styled from 'styled-components/native';

export const Title = styled.Text`
  background: #000;
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

export const Container = styled.ScrollView``;

export const WrapScroll = styled.View`
  flex: 1;
  background: #000;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WrapItem = styled.View`
  padding: 20px;
  width: 33%;
  justify-content: flex-start;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const ItemName = styled.Text`
  text-align: center;
  color: #fff;
`;
