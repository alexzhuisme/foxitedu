import Edit from './components/Edit';
import Footer from './components/Footer';
import Scan from './components/Scan';
import Sign from './components/Sign';
import Transfer from './components/Transfer';
import Welcome from './components/Welcome';

function App() {
    return (
        <div className="font-open-sans" >
            <Welcome / >
            <Transfer / >
            <Scan / >
            <Edit / >
            <Sign / >
            <Footer / >
        </div>
    );
}

export default App;