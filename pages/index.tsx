import Head from 'next/head'
import { useContext } from 'react';
import { ActiveModalContext } from 'contexts';
import { EActiveModal } from 'utils/enums';
import Home from '@/components/Home';

export default function Index() {
  // UseContexts
  const { activeModal } = useContext(ActiveModalContext);

  // Returns
  return (
    <div>
      <Head>
        <title>Questionnaire</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/question-mark.ico" />
      </Head>

      {/* Modals */}
      {/* {activeModal === EActiveModal.Update && <AppUpdateModal />} */}
      {/* {activeModal === EActiveModal.Auth && <Authentication />} */}
      {/* {activeModal === EActiveModal.Alert && <AlertModal />} */}
      {/* {activeModal === EActiveModal.AddQuestion && <AddQuestionModal />} */}

      <Home />
    </div>
  )
}