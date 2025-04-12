import React from 'react';
import styles from './PluginTable.module.css'; // Asegúrate de crear este archivo CSS con los estilos deseados

export const PluginTable = ({plugins }) => (
    <>
        <div className={styles.tableContainer}>
            <table className={styles.pluginTable}>
                <thead>
                    <tr>
                        <th>🔌 Plugin</th>
                        <th>📝 Descripción</th>
                        <th>🔗 Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {plugins.map(({ name, description, link }) => (
                        <tr key={name}>
                            <td><strong>{name}</strong></td>
                            <td>{description}</td>
                            <td><a href={link} target="_blank" rel="noopener noreferrer">Ver más</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
