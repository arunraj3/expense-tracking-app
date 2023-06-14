import React,{useState} from "react"


export default function AddTransaction(){

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    return(
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label forhtml="text">Text</label>
                    <input type="text" value={text} onChange={(event)=>{setText(event.target.value)}} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label forhtml="amount" >Amount<br/>(negative - expense, positive - income)</label>
                    <input type="number"  value ={amount}  onChange={(event)=>{setAmount(event.target.value)}} placeholder="Enter amount..."></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}