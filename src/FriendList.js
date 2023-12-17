import Friend from "./Friend";

function FriendsList({ friendsList, selectedFriend, onSelectedFriend }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
