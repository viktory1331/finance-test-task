import { SharedReducer } from './sharesReducer';

export interface Share {
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yield: string;
  last_trade_time: string;
};

export interface State {
  shares: SharedReducer;
};