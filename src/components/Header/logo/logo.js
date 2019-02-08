import React, { Component , Fragment} from 'react';
import logoo from './subway-logo-sign-arrows.gif';
import styles from './logo.css';
export default class logo extends Component {
  render() {
    return (
      <Fragment >
        <img className={styles.logo} src={logoo}></img>
      </Fragment>
    );
  }
}
