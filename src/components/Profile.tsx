import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/roperes98.png" alt="Rodrigo Peres"/>
            <div>
                <strong>Rodrigo Peres</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}