import React from 'react';
import { PageHeader } from 'antd';

import style from './style.module.css';

export const Header = () => {
  return (
    <PageHeader
      className={style['site-page-header']}
      title="Finance Application"
    />
  );
};