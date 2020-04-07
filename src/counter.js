import React from 'react';
import CountDown from 'react-native-countdown-component';
import {Text, View, StyleSheet} from 'react-native';

const getTimestamp = date => {
  const timestamp = new Date(date).getTime();
  return timestamp;
};

const Counter = ({event}) => {
  const until = (getTimestamp(event.date) - Date.now()) / 1000;
  // console.log('---');
  // console.log(until);
  // console.log(getTimestamp(event.date));
  // console.log(Date.now());
  return (
    <View style={styles.container}>
      <CountDown
        until={until}
        onFinish={() => alert(`${event.title} is completed`)}
        size={25}
        running={until > 0 ? true : false}
        style={styles.counter}
      />
      {until < 1 ? (
        <View style={styles.completed}>
          <Text style={styles.completedIcon}>✓</Text>
          <Text style={styles.completedText}>completed</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    alignSelf: 'flex-start',
  },
  completed: {
    marginLeft: 'auto',
    textAlign: 'right',
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  completedIcon: {
    width: 50,
    height: 50,
    lineHeight: 50,
    color: 'green',
    borderColor: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 50,
    textAlign: 'center',
    marginRight: 10,
  },
  completedText: {
    color: 'green',
    fontSize: 12,
    marginTop: 7,
    marginRight: 7,
  },
});

export default Counter;
