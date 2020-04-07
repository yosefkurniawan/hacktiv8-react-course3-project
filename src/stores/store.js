import {createStore} from 'redux';
import eventReducer from './reducers';

const initialEvents = {
  events: [
    {
      title: 'Tahun Baru 2020',
      timestamp: 1577811600,
    },
    {
      title: 'Tahun Baru 2021',
      timestamp: 1609434000,
    },
    {
      title: 'Ulang Tahun',
      timestamp: 1591462800,
    },
  ],
};

const store = createStore(eventReducer, initialEvents);

export default store;
