import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Options = () => {
  
const path = "sriubos questionnaire/cx2sakw0vjV5mRorA78i/question1/uQCmIQnxoLqwcwILDcv0/options/"
const query = collection(db, path);
const [docs, loading, error] = useCollectionData(query);
const [options, setOptions] = useState<string[]>([]);


useEffect(() => {
  if(docs) {
    for(let j=0; j<docs.length; j++) {
      docs.map((doc:any) => setOptions(doc.options))
    }
  }
}, [docs])

console.log(options);
console.log("dd");


  return (
    <div>
      <h1>OPTIONS</h1>
      {options?.map((option:any, i) => (
        <ul key={i}>
        <li>{option}</li>
        <br />
        </ul>
      ))}
    </div>
  );
};

export default Options;