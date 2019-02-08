import React, { Component , Fragment} from 'react';
import logoo from './High/new_logo_full_high.png';
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
