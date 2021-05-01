import * as constants from '../actions/constants';
import { default as balanceReducer, default as balanceReducer2 } from './balance';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;

        it('set a balance', () => {
            // balanceReducer(prevState, action)
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
                .toEqual(balance);
        });

        describe('then re-initialize', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
    });

    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdrawal }))
            .toEqual(initialState - withdrawal);
    });
});