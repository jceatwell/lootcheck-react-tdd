import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
    it('set a balance', () => {
        const balance = 10;
        // balanceReducer(prevState, action)
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance);
    });
});