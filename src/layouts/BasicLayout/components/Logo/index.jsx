import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          Richstone AI Visualization Platform
        </Link>
      </div>
    );
  }
}