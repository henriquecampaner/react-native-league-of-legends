import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  ItemImage,
  ItemName,
} from './styles';

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/10.3.1/data/en_US/item.json'
      );

      setItems(await Object.entries(data.data));
    }
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Items</Title>
      <WrapScroll>
        {items.map(item => (
          <WrapItem>
            <ItemImage
              source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/item/${item[1].image.full}`,
              }}
            />
            <ItemName>{item[1].name}</ItemName>
          </WrapItem>
        ))}
      </WrapScroll>
    </Container>
  );
}
