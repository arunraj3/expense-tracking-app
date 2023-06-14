import React from "react"


export default function AddTransaction(){

    return(
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label forHtml="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label forHtml="amount" >Amount<br/>(negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}