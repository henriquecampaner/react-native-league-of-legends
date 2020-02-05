import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import Icon from 'react-native-vector-icons/MaterialIcons';

// tab
import Main from './pages/Main';
import Items from './pages/Items';
import ChampionDetails from './pages/ChampionDetails';

const Routes = createAppContainer(
  createDrawerNavigator({
    Champions: createStackNavigator(
      {
        Main,
        ChampionDetails,
      },
      {
        navigationOptions: () => ({
          drawerIcon: <Icon name="face" size={20} color="#000" />,
        }),
      }
    ),
    Items: {
      screen: Items,
      navigationOptions: () => ({
        drawerIcon: <Icon name="airplay" size={20} color="#000" />,
      }),
    },
  })
);

export default Routes;
