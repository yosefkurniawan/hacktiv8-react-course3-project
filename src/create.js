import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addEvent} from './stores/actions';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';

const formatDate = date => {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();

  date = mm + '/' + dd + '/' + yyyy;
  return date;
};

const getTimeStamp = date => {
  var d = new Date(date);
  return d.getTime() / 1000;
};

const Create = ({navigation, events, addEvent}) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    console.log(!showDatePicker);
    Keyboard.dismiss();
    return setShowDatePicker(!showDatePicker);
  };

  const onSubmit = () => {
    if (!date || !title) {
      alert('Please fill all fields');
      return;
    }
    Keyboard.dismiss();
    setShowDatePicker(false);

    const newEvent = {
      title: title,
      timestamp: getTimeStamp(date),
    };
    console.log(newEvent);
    console.log(events);
    addEvent(newEvent);
    console.log(events);

    setDate(new Date());
    setTitle('');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 200);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.inputBox}
          placeholder="Title"
          placeholderTextColor="#000"
          onChangeText={value => setTitle(value)}
        />
        <TouchableOpacity onPress={toggleDatePicker} style={styles.inputBox}>
          <Text style={{alignItems: 'center'}}>{formatDate(date)}</Text>
        </TouchableOpacity>

        {showDatePicker ? (
          <DatePicker
            date={date}
            onDateChange={setDate}
            style={styles.datepicker}
          />
        ) : null}
      </View>
      <View style={styles.actionsBox}>
        <Button style={styles.button} title="Save" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

Create.navigationOptions = {
  title: 'New Event',
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
  },
  actionsBox: {
    flexDirection: 'column',
    height: 60,
    marginTop: 15,
  },
  inputBox: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 50,
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 15,
  },
  hide: {
    display: 'none',
  },
});

const MapStateToProps = state => ({
  events: state.events,
});

const MapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
});
export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(Create);
