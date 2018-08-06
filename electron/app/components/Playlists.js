// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Playlists.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Playlists!</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
