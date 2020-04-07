import React from 'react';
import {Text, SafeAreaView} from 'react-native';

class Create extends React.Component {
  static navigationOptions = {
    title: 'New Event',
  };
  render() {
    return (
      <SafeAreaView>
        <Text>Create New</Text>
      </SafeAreaView>
    );
  }
}

export default Create;
