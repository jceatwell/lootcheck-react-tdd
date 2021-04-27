import * as actions from './balance';
import * as constants from './constants';

it('create an action to set the balance (Test Action Creator `setBalance`)', () => {
    const balance = 0;

    const expectedAction = { type: constants.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
    const deposit = 10;

    const expectedAction = { type: constants.DEPOSIT, deposit: deposit };
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
    const withdrawal = 10;

    const expectedAction = { type: constants.WITHDRAW, withdrawal };
    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});