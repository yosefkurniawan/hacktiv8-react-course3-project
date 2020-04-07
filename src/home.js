import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Item from './item';

const Home = ({events, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {events.length ? (
        events.map((event, i) => <Item event={event} key={i} />)
      ) : (
        <Text>There is no event yet...</Text>
      )}

      <View style={styles.actionsBox}>
        <Button
          style={styles.button}
          title="Create New Event"
          onPress={() => navigation.navigate('Create')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  actionsBox: {
    flexDirection: 'column',
    height: 60,
    marginTop: 15,
  },
  button: {
    display: 'flex',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 15,
  },
});

const MapStateToProps = state => ({
  events: state.events,
});

export default connect(
  MapStateToProps,
  null,
)(Home);
