import Footer from '../Footer/Footer'
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}

const btn = {
    display: 'block',
    margin: '20px auto',
    width: '300px',
    height: '65px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: '700',
    fontSize: '18px',
    backgroundColor: '#00c78b',
    color: '#ffffff',
    padding: '20px 0',
    textAlign: 'center',
}

const Layout = () => {
    const { text: { idText }, picture: { idImg } } = useSelector(state => state);

    return (
        <div style={wrapper}>
            <Header />
            <Outlet />
            {idText && idImg && (
                <Link
                    style={btn}
                    to={`singleCard/${idText}/${idImg}`}
                >
                    Поделиться открыткой
                </Link>
            )
            }
            <Footer />
        </div >
    )
}

export default Layout;