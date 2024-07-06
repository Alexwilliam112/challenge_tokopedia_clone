"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./errorMessage.module.css";

const SuccessModal: React.FC = () => {
  const searchParams = useSearchParams();
  const notif = searchParams.get("notif");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (notif) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [notif]);

  const handleClose = () => {
    setShowModal(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Success!</h2>
          <button onClick={handleClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <p>{notif}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
