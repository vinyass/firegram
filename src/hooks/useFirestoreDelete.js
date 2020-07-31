import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestoreDelete = (collection, id) => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (id) {
      projectFirestore
        .collection(collection)
        .doc(id)
        .delete()
        .then(() => setDeleted(true))
        .catch(() => setDeleted(false));
    } else {
      setDeleted(false);
    }
  }, [collection, id]);

  return deleted;
};

export default useFirestoreDelete;
