import { Component } from 'react';

import styles from './card.module.css';

export interface CardProps {
  name: string;
  src: string;
  status: string;
  species: string;
  gender: string;
  episode: string;
}

class Card extends Component<CardProps> {
  render() {
    const { name, src, status, species, gender, episode } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={src} alt={name.toString()} />
        </div>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.status}>{status}</div>
            <div className={styles.species}>{species}</div>
            <div className={styles.gender}>{gender}</div>
            <div className={styles.episode}>{episode}</div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
