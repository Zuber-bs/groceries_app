import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <AppContainer />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  LoginScreen: LoginScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});