import { useState } from "react";

function BillSplitForm({ selectedFriend, onSplittingBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whopaid, setWhoPaid] = useState("user");

  function splitBill(e) {
    e.preventDefault();

    if (whopaid === "user") {
      let friendExpense = bill - userExpense;
      onSplittingBill(friendExpense, whopaid, selectedFriend);
    } else {
      onSplittingBill(userExpense, whopaid, selectedFriend);
    }

    //resetting the state
    setBill("");
    setUserExpense("");
    setWhoPaid("user");
  }

  function handleExpenseInput(e) {
    if (isNaN(Number(e.target.value))) {
      alert("only numbers are valid");
      return;
    }

    if (bill === "") {
      alert("type bill first!");
      return;
    }

    if (Number(e.target.value) > bill) {
      alert("expense should not exceed bill");
      setUserExpense("");
      return;
    }

    setUserExpense(Number(e.target.value));
  }

  function handleBillInput(e) {
    if (isNaN(Number(e.target.value))) {
      alert("only numbers are valid");
      return;
    }

    setBill(Number(e.target.value));
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={splitBill}>
        <h2>Split bill with {selectedFriend.name}</h2>

        <label>Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => handleBillInput(e)}
          required
        />

        <label>Your Expense</label>
        <input
          type="text"
          value={userExpense}
          onChange={(e) => handleExpenseInput(e)}
          required
        />

        <label>{selectedFriend.name} Expense</label>
        <input type="text" value={bill - userExpense} disabled />

        <label>Who is paying the bill</label>
        <select value={whopaid} onChange={(e) => setWhoPaid(e.target.value)}>
          <option value={"user"}>User</option>
          <option value={"friend"}>{selectedFriend.name}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    </>
  );
}

export default BillSplitForm;
