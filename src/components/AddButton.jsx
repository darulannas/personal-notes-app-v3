// import React from "react";
// import { FiCheckCircle } from "react-icons/fi";

// function AddButton({}) {
//   return (
//     <button className="action" type="submit">
//       <FiCheckCircle />
//     </button>
//   );
// }

// export default AddButton;

import React from "react";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function AddButton() {
  const location = useLocation();

  const isAddPage = location.pathname === "/notes/new";

  return (
    <button className="action" type="submit">
      {isAddPage ? <FiCheckCircle /> : <FiPlusCircle />}
    </button>
  );
}

export default AddButton;
