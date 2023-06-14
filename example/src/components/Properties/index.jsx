import React from 'react';
import styles from './styles.module.css';

function Properties({ properties = [] }) {
  return (
      <table className={styles.table}>
          <tr className={styles.header}>
              <th>Property</th>
              <th>Value</th>
          </tr>
          {properties.map((property) => {
              return (
                  <tr className={styles.rows}>
                      <td>{property.name}</td>
                      <td>{property.value}</td>
                  </tr>
              )
          })}
    </table>
  )
}

export default Properties