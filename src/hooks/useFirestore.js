import { useState, useEffect } from 'react';
import { pFirestore } from '../firebaseConfig';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = pFirestore.collection(collection)
      .onSnapshop((snapshop) => {
        let documents = [];
        snapshop.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
}

export default useFirestore;