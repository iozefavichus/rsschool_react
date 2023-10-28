import { Component } from 'react';

import styles from './card.module.css';

export interface CardProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

export interface CardType {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, name, image, status, species, gender } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={image} alt={id.toString()} />
        </div>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <div className={styles.name}>Name:{name}</div>
            <div className={styles.status}>Status: {status}</div>
            <div className={styles.species}>Species: {species}</div>
            <div className={styles.gender}>Gender: {gender}</div>
          </div>
        </div>
      </div>
    );
  }
}
export { Card };
