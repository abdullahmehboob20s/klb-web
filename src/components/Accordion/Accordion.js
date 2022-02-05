import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";

function Accordion({ title, children }) {
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      setIsOpen(true);
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
    } else {
      setIsOpen(false);
      bodyRef.current.style.height = 0;
    }
  };

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionButton} ${
          isOpen ? styles.active : ""
        } pointer`}
        onClick={handler}
      >
        <p className="fs-20px black weight-5">{title}</p>

        <span className={styles.icon}>
          {isOpen ? (
            <AiOutlineMinus size={isBellow500px ? 16 : 22} color="#9733EE" />
          ) : (
            <AiOutlinePlus size={isBellow500px ? 16 : 22} color="black" />
          )}
        </span>
      </button>

      <div className={styles.accordionBody} ref={bodyRef}>
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
