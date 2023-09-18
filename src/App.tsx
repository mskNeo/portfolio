import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import styles from './styles/home.module.scss'

function App() {
  return (
    <>
        <Layout>
          <div className={styles.home}>
            <Contact />
            <Intro />
          </div>
        </Layout>
    </>
  );
}

export default App;
