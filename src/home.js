import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({events}) => {
  return (
    <View style={styles.container}>
      {events.length ? (
        events.map(event => (
          <TouchableOpacity
            style={styles.box}
            onPress={() => this.props.navigation.navigate('Detail')}
            key={event.id}>
            <View style={styles.eventInfo}>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
            </View>
            <View style={styles.counter}>
              <View style={styles.counterItem}>
                <Text style={styles.counterNumber}>48</Text>
                <Text style={styles.counterTitle}>Days</Text>
              </View>
              <View style={styles.counterItem}>
                <Text style={styles.counterNumber}>48</Text>
                <Text style={styles.counterTitle}>Hours</Text>
              </View>
              <View style={styles.counterItem}>
                <Text style={styles.counterNumber}>48</Text>
                <Text style={styles.counterTitle}>Minutes</Text>
              </View>
              <View style={styles.counterItem}>
                <Text style={styles.counterNumber}>48</Text>
                <Text style={styles.counterTitle}>Seconds</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>There is no event yet...</Text>
      )}

      <View style={styles.actionsBox}>
        <Button
          style={styles.button}
          title="Create New Event"
          onPress={() => this.props.navigation.navigate('Create')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  eventInfo: {
    flexDirection: 'row',
  },
  eventDate: {
    marginRight: 15,
    paddingRight: 15,
    borderRightColor: 'black',
    borderRightWidth: 1,
  },
  eventTitle: {
    fontWeight: 'bold',
  },
  counter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  counterItem: {
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  counterNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
  },
  counterTitle: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
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
