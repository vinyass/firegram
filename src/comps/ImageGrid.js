import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import trashIcon from "../assets/trash.png";
import useFirestoreDelete from "../hooks/useFirestoreDelete";

const ImageGrid = ({ setSelectedImg }) => {
  const [imgToDelete, setImgToDelete] = useState(null);
  const { docs } = useFirestore("images");

  useFirestoreDelete("images", imgToDelete);

  const handleImageClicked = (e, id) => {
    if (e.target.classList.contains("img")) {
      setSelectedImg(id);
    }
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={doc.id}
            onClick={(e) => handleImageClicked(e, doc.url)}
          >
            <motion.img
              src={doc.url}
              className="img"
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <img
              className="img-delete"
              src={trashIcon}
              alt="delete"
              onClick={() => setImgToDelete(doc.id)}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
