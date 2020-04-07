import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Your Events',
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => this.props.navigation.navigate('Detail')}>
          <View style={styles.eventInfo}>
            <Text style={styles.eventDate}>7 Juni 2020</Text>
            <Text style={styles.eventTitle}>Event Title is here</Text>
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

        <View style={styles.actionsBox}>
          {/* <Button
            style={styles.button}
            title="Go to Detail"
            onPress={() => this.props.navigation.navigate('Detail')}
          /> */}
          <Button
            style={styles.button}
            title="Create New Event"
            onPress={() => this.props.navigation.navigate('Create')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    padding: 15,
    backgroundColor: '#ffffff',
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

export default Home;
