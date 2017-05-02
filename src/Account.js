import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
   super(props);
   this.state= {
    balance: 0
   }
 }

handleDepositClick (event) {
  event.preventDefault()
  let cash = parseInt(this.refs.money.value);
  let newCash= this.state.balance + cash;
 this.setState ({
  balance: newCash
 }) 
console.log(this.refs.money.value);
}

handleWithdrawalClick(event) {
event.preventDefault()
let cash = parseInt(this.refs.money.value);
let newCash = this.state.balance - cash;
this.setState ({
  balance: newCash
})
console.log(this.refs.money.value);
}



  render() {
  let balanceClass ="balance"
  if(this.state.balance === 0) {
    balanceClass += " zero";
  }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balanceClass">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="money"/>
        <input type="button" value="Deposit" onClick={(event) => this.handleDepositClick(event)}/>
        <input type="button" value="Withdraw"onClick={(event) => this.handleWithdrawalClick(event)}/>
       
      </div>
    )
  }
}
