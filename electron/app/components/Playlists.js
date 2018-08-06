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
            <div className={styles.header}>
              <h3>FunBox!</h3>
            </div>
            <div className={styles.footer}>Footer</div>
            <div className={styles.main}> Playlist!
            </div>
            <div className={styles.side}>
              <video id="vplayer" width="100%" poster="./public/funbox.png"></video>
            </div>
        </div>
      </div>
    );
  }
}
