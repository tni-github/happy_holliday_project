import { useContext } from 'react';
import { pictureContext } from '../../../context/pictureContext';
import style from '../Card.module.css';


const Picture = (props) => {
    const { picture } = useContext(pictureContext);

    return (
        <img src={picture.urlImg || props.img} alt="фоновая открытка" className={style.img} width={840} height={520} />
    )
}

export default Picture;