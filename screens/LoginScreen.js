import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containers}>
            <Text style={styles.heading}>Login</Text>
          </View>

          <View style={styles.containers}>
            <TextInput style={styles.inputs} placeholder="Email"/>
            <TextInput style={styles.inputs} placeholder="Password" secureTextEntry/>
          </View>

          <Text style={{margin: 10}}>or</Text>

          <View style={styles.containers}>
            <TouchableOpacity style={styles.button}>
              <Image source={require("../assets/GoogleLogo.png")} style={{width: 20, height: 20, margin: 10,}}/>
              <Text style={{fontWeight: "bold"}}>Sign in with google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 0.5,
    width: "75%",
    backgroundColor: "#dedede",
    borderRadius: 10,
    alignItems: "center",
  },

  containers: {
    flex: 0.33,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 27,
  },

  inputs: {
    backgroundColor: "#ffffff",
    width: "75%",
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },

  button: {
    backgroundColor: "#ffffff",
    flex: 0.25,
    width: "75%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    bottom: 30,
  },
});