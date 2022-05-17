import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickerData } from '../../state/thunks';
import { selectData } from '../../state/selectors';
import { WatchList } from '../shareItem';
import style from './style.module.css';

export const WatchListWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickerData());
  }, []);

  const share = useSelector(selectData);

  return (
    <div className={style['site-statistic-card']}>
      {share.map((item) => (
        <WatchList key={item.ticker} name={item.ticker} />
      ))}
    </div>
  );
};