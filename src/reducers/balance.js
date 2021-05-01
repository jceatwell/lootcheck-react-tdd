import { bake_cookie, read_cookie } from 'sfcookies';
import * as constants from '../actions/constants';

// Read_cookie takes in a string as which cookie you want to read,
// bake_cookie takes in a string as first argument, identifying which cookie you want to save
// The second parameter is the item you want to store

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
    let balance;

    switch (action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdrawal;
            break;
        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }

    bake_cookie(BALANCE_COOKIE, balance);
    return balance;
};

export default balance;