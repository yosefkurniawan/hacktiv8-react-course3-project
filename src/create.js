import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Keyboard,
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

const Create = props => {
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
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 200);
  };

  return (
    <View style={styles.container}>
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

        {/* <TextInput
          style={styles.inputBox}
          placeholder="Date"
          placeholderTextColor="#000"
          onPress={toggleDatePicker}
        /> */}
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
    </View>
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

export default Create;
