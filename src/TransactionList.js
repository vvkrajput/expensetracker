import React, {useContext} from 'react';
import {GlobalContext} from './context/GlobalState'
import Transaction from "./Transaction";

const TransactionList=()=>{
    const {transactions}=useContext(GlobalContext);
    return(
        <div>
        <h3>History</h3>
        <ul class="list">
        {transactions.map(transaction=>(<Transaction Key={transaction.id} transaction={transaction}/>))}
            
        </ul>
    </div>
    )
}
export default TransactionList