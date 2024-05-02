import { useState } from "react";
import Button from "./Button";

function AddFriend({ friends, setFriends, handleShow }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    if (!name || !image) return;
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setFriends((friends) => [...friends, newFriend]);
    handleShow();
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        required={true}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌇 Image url</label>
      <input
        required={true}
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
