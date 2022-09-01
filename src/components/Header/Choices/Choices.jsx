import style from './Choices.module.css';
import { useContext, useState } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const { holidays, holiday, changeHoliday } = useContext(holidaysContext);

    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {holidays[holiday] || 'Выбрать праздник'}
            </button>
            {isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li
                            className={style.item}
                            key={item[0]}
                            onClick={() => {
                                changeHoliday(item[0]);
                                toggleChoices();
                            }}
                        >
                            {item[1]}
                        </li>
                    ))}
                </ul>
            )
            }
        </div >
    )
};

export default Choices;