import {createStore} from 'redux';
import eventReducer from './reducers';

const initialEvents = [
  {
    id: 1,
    title: 'Tahun Baru 2020',
    date: '01/01/2020',
    active: 0,
  },
  {
    id: 2,
    title: 'Tahun Baru 2021',
    date: '01/01/2021',
    active: 1,
  },
  {
    id: 3,
    title: 'Ulang Tahun',
    date: '06/07/2020',
    active: 1,
  },
];

const store = createStore(eventReducer, {events: initialEvents});

export default store;
