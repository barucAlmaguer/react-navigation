import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './views/HomeScreen'
import { DetailsScreen } from './views/DetailsScreen'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#8080ff',
      },
      headerTintColor: '#eee',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#444"
        />
      ),
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}