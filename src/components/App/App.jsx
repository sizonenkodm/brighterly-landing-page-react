import styles from './App.module.scss';

import Header from 'components/Header';
import CallToAction from 'components/CallToAction';
import Statistics from 'components/Statistics';
import Info from 'components/Info';
import Description from 'components/Description';
import Motivation from 'components/Motivation';
import Feedbacks from 'components/Feedbacks';
import LogosList from 'components/LogosList';
import Footer from 'components/Footer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <CallToAction />
            <Statistics />
            <Info />
            <Description />
            <Motivation />
            <Feedbacks />
            <LogosList />
            <Footer />
        </div>
    );
}

export default App;
