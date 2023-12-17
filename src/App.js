import { useState } from "react";
import "./App.css";
import FriendsList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import BillSplitForm from "./BillSplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showFriendForm, setShowFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friendToAdd) {
    setFriendsList((friendsList) => [...friendsList, friendToAdd]);
    setShowFriendForm((showFriendForm) => !showFriendForm);
  }

  function splittingBill(expense, whopaid, passedFriend) {
    let newArr = friendsList.map((friend) =>
      friend.id === passedFriend.id
        ? {
            ...friend,
            balance: `${whopaid === "user" ? expense : -expense}`,
          }
        : friend
    );

    setFriendsList(newArr);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Split Mate</h1>

        <FriendsList
          friendsList={friendsList}
          selectedFriend={selectedFriend}
          onSelectedFriend={setSelectedFriend}
        />

        {showFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}

        <button
          className="button"
          onClick={() => setShowFriendForm(!showFriendForm)}
        >
          {showFriendForm ? `Close` : `Add Friend`}
        </button>
      </div>

      {/* if one of the friends is selected billform renders. Selecting already selected friend leads to null so billform won't render */}
      {selectedFriend && (
        <BillSplitForm
          selectedFriend={selectedFriend}
          onSplittingBill={splittingBill}
        />
      )}
    </div>
  );
}

export default App;
