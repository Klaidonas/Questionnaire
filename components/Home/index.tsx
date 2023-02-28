import React, { useContext, useEffect, useState } from 'react';
import styles from 'styles/components/Home/index.module.scss';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import { ActiveModalContext } from 'contexts';
import Questions from '../questionnaire/Questions';
import Options from '../questionnaire/Options';

const Home: React.FC = () => {
  // UseContexts 
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  // UseStates 
  const [state, setState] = useState<boolean>(false);

  // UseEffects 
  useEffect(() => {

  }, []);

  // Returns 
  return (
    <div className={styles.wrap}>
      <Header />
      <div>I&apos;m Homepage</div>
      <Questions />
      <Options />
      <Footer />
    </div>
  )
}

export default Home;