import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { selectData } from '../../state/selectors';
import { Row, Statistic } from 'antd';

import style from './style.module.css';

interface Props {
  name: string;
}

export const WatchList = (props: Props) => {
  const [oldYield, setOldYield] = useState<number>(0);
  const [currentYield, setCurrentYield] = useState<number>(0);

  const shares = useSelector(selectData);

  const arrowIcon =
    currentYield > oldYield ? <ArrowUpOutlined /> : <ArrowDownOutlined />;

  const item = shares.find((cryptoItem) => cryptoItem.ticker === props.name)!;

  useEffect(() => {
    if (item) {
      setOldYield(Number(currentYield));
      setCurrentYield(Number(item.yield));
    }
  }, [item]);

  return (
    <div className={style['site-statistic-demo-cards']}>
      <Row gutter={16}>
        <Statistic
          title="Ticker"
          value={item.ticker}
          valueStyle={{ fontWeight: 'bold' }}
        />
        <Statistic
          title="Divident"
          value={item.dividend}
          precision={2}
          valueStyle={{ color: '#3f8600', fontWeight: 'bold' }}
          suffix="%"
        />
        <Statistic
          title="Yield"
          valueStyle={{
            color: 'rgb(121, 121, 121)',
            fontWeight: 'bold',
          }}
          value={item.yield}
          prefix={arrowIcon}
        />
      </Row>
    </div>
  );
};