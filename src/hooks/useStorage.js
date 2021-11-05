import { useState, useEffect } from 'react';
import { pStorage } from '../firebaseConfig';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = pStorage.ref(file.name);
    storageRef.put(file).on('state_changed', (snapshot) => {
      const totalBytes = snapshot.totalBytes;
      const transferredBytes = snapshot.bytesTransferred;
      const percentage = transferredBytes / totalBytes * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () =>  {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
    });
  }, [file]);

  return { progress, error, url };
}

export default useStorage;