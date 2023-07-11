import React from "react";
import ReactDom from "react-dom";

const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <>
      <div className="fixed z-1000 inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"></div>
      <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-1000 bg-white p-[50px] rounded-2xl">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
