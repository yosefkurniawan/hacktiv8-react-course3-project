import React from 'react';
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Your Events',
  };
  render() {
    return (
        <SafeAreaView>
          <Text>Welcome to React Navigation</Text>
          <Button
              title="Go to Detail"
              onPress={() => this.props.navigation.navigate('Detail')}
          />
        </SafeAreaView>
    );
  }
};

export default Home;
