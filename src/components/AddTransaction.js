import React from "react"


export default function AddTransaction(){

    return(
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label forhtml="text">Text</label>
                    <input type="text"  placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label forhtml="amount" >Amount<br/>(negative - expense, positive - income)</label>
                    <input type="number"  placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}