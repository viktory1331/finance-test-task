import React, { useEffect } from 'react';

import { Row, Statistic } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getTickerData } from '../../state/thunks';
import { selectData } from '../../state/selectors';

import style from './style.module.css';

export const CryptocurrencyField = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickerData());
  }, []);

  const shares = useSelector(selectData);

  return (
    <div>
      {shares.map((item, index) => {
        return (
          <Row
            key={index}
            gutter={[48, 24]}
            className={style['market-heading-wrapper']}
          >
            <Statistic title="Ticker" value={item.ticker} valueStyle={{ fontWeight: 'bold' }}/>
            <Statistic title="Exchange" value={item.exchange} valueStyle={{ fontWeight: 'bold' }}/>
            <Statistic title="Price" prefix="$" value={item.price} valueStyle={{ fontWeight: 'bold' }}/>
            <Statistic title="Change" value={item.change} valueStyle={{ fontWeight: 'bold' }}/>
            <Statistic
              title="Growth in percentage"
              value={item.change_percent}
              suffix="%"
              valueStyle={{ fontWeight: 'bold' }}
            />
            <Statistic
              title="Last trade time"
              value={new Date(
                Date.parse(item.last_trade_time)
              ).toLocaleTimeString('uk-UA', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
              valueStyle={{ marginBottom: 32, fontWeight: 'bold' }}
            />
          </Row>
        );
      })};
    </div>
  );
};