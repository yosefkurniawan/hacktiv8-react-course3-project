import React from 'react';
import {Text, SafeAreaView} from 'react-native';

class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };
  render() {
    return (
      <SafeAreaView>
        <Text>Halaman Detail</Text>
      </SafeAreaView>
    );
  }
}

export default Detail;
