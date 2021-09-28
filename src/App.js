import Edit from './components/Edit';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Scan from './components/Scan';
import Sign from './components/Sign';
import Summary from './components/Summary';
import Transfer from './components/Transfer';
import Welcome from './components/Welcome';

function App() {
    return (
        <div className="font-open-sans" >
            <Navbar />
            <Welcome / >
            <Transfer / >
            <Scan / >
            <Edit / >
            <Sign / >
            <Summary />
            <Footer / >
        </div>
    );
}

export default App;