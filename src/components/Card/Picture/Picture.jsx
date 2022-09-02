import style from '../Card.module.css';
import CardBG from '../../../img/card-bg.jpg';
import { useSelector } from 'react-redux';

const Picture = () => {
    const { urlImg, loading } = useSelector(state => state.picture);
    console.log('picture: ', urlImg);

    return (
        <img
            src={loading === 'loading'
                ? ''
                : (urlImg === ''
                    ? CardBG
                    : urlImg)}
            alt="фоновая открытка"
            className={style.img}
            width={840}
            height={520}
        />
    )
}

export default Picture;