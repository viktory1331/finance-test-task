import { Dispatch } from 'redux';
import { io } from 'socket.io-client';
import { actions } from './sharesReducer';

export const getTickerData: any = () => (dispatch: Dispatch) => {
  const URL = 'http://localhost:4000';
  const socket = io(URL, { autoConnect: true });

  socket.emit('start');
  socket.on('ticker', (response) => {
    dispatch(actions.setData(Array.isArray(response) ? response : [response]));
  });
};
