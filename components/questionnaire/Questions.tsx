import { collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useEffect } from 'react';
import { db } from '@/utils/firebase';
import { map } from '@firebase/util';

const questions = () => {

const path = "sriubos questionnaire/cx2sakw0vjV5mRorA78i/question1/"
const query = collection(db, path);
const [docs, loading, error] = useCollectionData(query);




  const citiesRef = collection(db, path);
  
  useEffect(() => {
    if(error) alert(error);
  }, [error])
  
  console.log(path);
  
  return (
    <div>
      <h1>QUESTIONS</h1>
        {docs?.map((doc:any) => (
          <li key={doc.id}>{doc.question}</li>
        ))}
    </div>
  );
};

export default questions;

