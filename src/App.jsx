import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
