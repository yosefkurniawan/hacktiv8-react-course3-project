import React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Item from './item';

const Home = ({events, navigation}) => {
  return (
    <>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          {events.length ? (
            events.map((event, i) => <Item event={event} key={i} />)
          ) : (
            <Text>There is no event yet...</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.FloatingButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Create')}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 0,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
  },
});

const MapStateToProps = state => ({
  events: state.events,
});

export default connect(
  MapStateToProps,
  null,
)(Home);
