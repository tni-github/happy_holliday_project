import img from '../../../img/card-bg.png';
import style from '../Card.module.css';

const Picture = () => (
    <img src={img} alt="фоновая открытка" className={style.img} />
);

export default Picture;