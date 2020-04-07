import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Counter from './counter';

const formatDate = timestamp => {
  var date = new Date(timestamp * 1000);
  var months_arr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var convdataTime =
    date.getDate() +
    ' ' +
    months_arr[date.getMonth()] +
    ' ' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    ('0' + date.getMinutes()) +
    ':' +
    ('0' + date.getSeconds());
  return convdataTime;
};

const Item = ({event}) => {
  const [finish, setFinish] = useState(false);
  const until = (event.timestamp * 1000 - Date.now()) / 1000;

  const handleFinish = () => {
    setFinish(true);
  };
  if (until > -1) {
    return (
      <View style={styles.box}>
        <View style={styles.eventInfo}>
          <Text style={styles.eventDate}>{formatDate(event.timestamp)}</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
        </View>
        <View style={styles.counter}>
          <Counter
            event={event}
            handleFinish={handleFinish}
            finish={finish}
            until={until}
          />
        </View>
      </View>
    );
  } else {
    return null;
  }
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
});

export default Item;
