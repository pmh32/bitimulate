import React from 'react';
import styles from './ScreenMask.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ScreenMask = ({visible}) => {
  if (!visible) return null;
  return (
    <div className={cx('screen-mask')}>

    </div>
  );
}

export default ScreenMask;