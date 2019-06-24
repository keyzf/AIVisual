import React, { Component } from 'react';
import styles from './index.module.scss'

export default class productDescription extends Component {
  static displayName = 'productDescription';

  render() {
    return (
      <div className={styles.wrapperContainer}>
        <div className={styles.cover}>
          {/* <img
            alt="特点图"
            className={styles.coverImage}
            src="//img.alicdn.com/tfs/TB1Xf7OpuuSBuNjy1XcXXcYjFXa-2334-1092.png"
          /> */}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.feature}>
            <div className={styles.title}>AI可视化数据分析平台</div>
            <div className={styles.line}>
              <div className={styles.lineHeader} />
            </div>
            <div className={styles.desc}>
              人工智能助力，轻松完成数据分析，可视化操作更得心应手
            </div>
          </div>
        </div>
      </div>
    );
  }
}
