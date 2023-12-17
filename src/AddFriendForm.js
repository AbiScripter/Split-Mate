import { useState } from "react";

function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");

  function convertToCapitalCase(inputString) {
    const words = inputString.split(" ");
    const capitalCaseString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    return capitalCaseString;
  }

  function createFriend(e) {
    e.preventDefault();

    if (friendName.trim() === "") {
      alert("name should not be empty");
      setFriendName("");
      return;
    }

    let obj = {
      id: Math.floor(Math.random() * (999999 - 100001 + 1)) + 100001,
      name: convertToCapitalCase(friendName),
      image: "https://i.pravatar.cc/48",
      balance: 0,
    };

    //passing the newly created friend object to add in friendlist
    onAddFriend(obj);

    //resetting friendName state
    setFriendName("");
  }

  return (
    <form className="form-add-friend" onSubmit={createFriend}>
      <label>Friend Name</label>
      <input
        type="text"
        value={friendName}
        required
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>Image Url</label>
      <input type="text" value={`https://i.pravatar.cc/48`} readOnly disabled />
      <button className="button">Add</button>
    </form>
  );
}

export default AddFriendForm;
