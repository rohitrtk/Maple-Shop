import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = db.collection(collection)
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return docs;
}

export default useFirestore;