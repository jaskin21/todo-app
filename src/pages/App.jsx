import '../styles/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

function App() {
  return (
    <main>
      <Header />
      <div className='main-container'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer />
    </main>
  );
}

export default App;
