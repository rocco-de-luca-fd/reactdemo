import { Show } from '../model/series';
import React from 'react';
import css from './TVMazeShowDetails.module.css';

interface TVMazeShowDetailsProps {
    show: Show | null;
    onClose: () => void;
}

export const TVMazeShowDetails: React.FC<TVMazeShowDetailsProps> = ({ show, onClose }) => {
    return show && (
        <div className={css.wrapper}>
            <div className={css.content}>
                <span
                    className={css.wrapper}
                    onClick={onClose}
                    role="img"
                    arial-label="Close"
                >x</span>
                <img className={css.image} src={show?.image.original} alt="" />
                {
                    // map() ciclo sui generi
                    show?.genres.map(g =>
                        <span className={css.tag} key={g}>{g}</span>
                    )
                }
                <div className={css.metadata}>
                    <h1>{show?.name}</h1>
                    <div className={css.summary} dangerouslySetInnerHTML={{ __html: show?.summary }} />
                    <a className={css.button} href={show?.url} target='_blank' rel="noopener"></a>
                </div>
            </div>
        </div>
    );
}