import {createStore} from 'redux';
import eventReducer from './reducers';

const initialEvents = [
  {
    id: 1,
    title: 'Tahun Baru 2021',
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Ulang Tahun',
    date: '2020-06-07',
  },
];

const store = createStore(eventReducer, {events: initialEvents});

export default store;
