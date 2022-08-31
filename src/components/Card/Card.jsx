import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import Picture from './Picture/Picture';
import CardBG from '../../img/card-bg.jpg';

const Card = () => (
    <main className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <Picture img={CardBG} />
                <Felicitation />
            </div>
        </div>
    </main>
);

export default Card;