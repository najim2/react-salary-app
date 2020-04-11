import React, { useState } from 'react';
import './Accounts.css'
const Accounts = (props) => {
    const totalPaidAmount = props.accounts.reduce((acc,curr) => {
        return acc + parseInt(curr.salary);
    },0)
    const companyRevenue = 500000;

    return (
        <div className="accounts">
            <h3>Company Accounts</h3>
            <p>Current Balance : {companyRevenue - totalPaidAmount} BDT</p>
            <p>Paid Employee: {props.accounts.length}</p>
            <p>Total Paid Amount: {totalPaidAmount} BDT</p>
            
        </div>
    );
};

export default Accounts;