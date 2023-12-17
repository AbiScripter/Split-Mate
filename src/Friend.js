function Friend({ friend, selectedFriend, onSelectedFriend }) {
  //owing status
  function evenOrOweStatus(balance, friendName) {
    if (balance === 0) {
      return `You and ${friendName} are even `;
    } else if (balance > 0) {
      return `${friendName} owes you ₹${Math.abs(balance)} `;
    } else {
      return `You owe ${friendName} ₹${Math.abs(balance)} `;
    }
  }

  //red or green status
  function determineClass(balance) {
    if (balance > 0) {
      return "green";
    } else if (balance < 0) {
      return "red";
    } else {
      return "";
    }
  }

  function onClickSelectBtn(passedFriend) {
    //if already selected
    if (selectedFriend === passedFriend) {
      onSelectedFriend(null);
      return;
    }

    onSelectedFriend(passedFriend);
  }

  return (
    <li>
      <img src={friend.image} alt="img" />
      <h3>{friend.name}</h3>
      <p className={determineClass(friend.balance)}>
        {evenOrOweStatus(friend.balance, friend.name)}
      </p>
      <button className="button" onClick={() => onClickSelectBtn(friend)}>
        {friend === selectedFriend ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
