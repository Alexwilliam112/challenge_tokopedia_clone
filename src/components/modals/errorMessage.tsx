"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./errorMessage.module.css";

const ErrorModal: React.FC = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (error) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [error]);

  const handleClose = () => {
    setShowModal(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Error</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
