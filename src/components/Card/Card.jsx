import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPictureId } from '../../store/pictureSlice';
import { fetchTextId } from '../../store/textSlice';
import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import Picture from './Picture/Picture';

const Card = () => {
    const { idText, idImg } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (idText && idImg) {
            dispatch(fetchTextId(idText));
            dispatch(fetchPictureId(idImg));
        }
    })

    return (
        <main className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <Picture />
                    <Felicitation />
                </div>
            </div>
        </main>
    );
};

export default Card;