import React from 'react';
import CountDown from 'react-native-countdown-component';
import {Text, View, StyleSheet} from 'react-native';

const Counter = ({event, handleFinish, finish, until}) => {
  return (
    <View style={styles.container}>
      <CountDown
        until={until}
        onFinish={handleFinish}
        size={25}
        running={finish ? false : true}
        style={styles.counter}
      />
      {finish ? (
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
    marginTop: 10,
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
  hide: {
    display: 'none',
  },
});

export default Counter;
