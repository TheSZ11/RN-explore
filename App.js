import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hello',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Button
          onPress={() => navigate('Home')}
          title="Go to Lucy's profile" />
      </View>
    );
  }
}

const AppRoot = StackNavigator({
  Login: { screen: LoginScreen},
  Home: { screen: HomeScreen},
},
{
  cardStyle: {
    paddingTop: Expo.Constants.statusBarHeight
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppRoot
