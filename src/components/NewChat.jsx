import React from "react";
import { useNavigate } from "react-router-dom"; // make sure you're importing from react-router-dom

const NewChat = ({ setChatLog, setShowMenu }) => {
  const navigate = useNavigate(); // Call the hook inside the component

  return (
    <div
      className="btn btn-secondary w-100 text-light"
      onClick={() => {
        navigate("/"); // Correct hook usage
        setChatLog([]); // Clear chat log
        setShowMenu(false); // Hide menu
      }}
    >
      <span className="h6 me-2">+</span>
      New chat
    </div>
  );
};

export default NewChat;
