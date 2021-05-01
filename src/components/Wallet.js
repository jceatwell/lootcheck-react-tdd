import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

// Export unconnected to make testing easier -> Import using curly braces in test, else will import default
export class Wallet extends Component {
    constructor() {
        super();

        // Local State
        this.state = {
            balance: undefined
        }
    }
 
    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) });
    }

    deposit = () => this.props.deposit(this.state.balance);

    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br />
                <input className='input-wallet' onChange={this.updateBalance} />
                <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
                <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
            </div>
        );
    }
}

// Export Connected Version. Connect returns a function used to connect the Wallet
// connect uses 2 parameters:
// (1) -> Which part of the redux store do we wish to use with this component (mapStateToProps part of the connect function)
// entire state from rootReducer is the balance Reducer at present (Returning a number). This is being mapped onto the props
// (2) -> Which Action Creators do we want to use to send data to to redux store

// Note round brackets remove necessity for { return {balance: state} }
// i.e. state => { return { balance: state } }, same as 
export default connect(state => { return { balance: state } }, { deposit, withdraw })(Wallet);
// OR
// export default connect(state => ({ balance: state }), { deposit, withdraw })(Wallet);
