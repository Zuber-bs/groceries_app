import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

  navigateToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.containers}>
          <Text 
            style={[styles.heading, {marginBottom: 100,}]}
          >Manage your groceries list!</Text>
        </View>

        <View style={styles.containers}>
          <TouchableOpacity style={styles.button} onPress={this.navigateToLogin}>
            <Text style={styles.heading}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  containers: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 23,
  },

  button: {
    backgroundColor: "dodgerblue",
    flex: 0.5,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});