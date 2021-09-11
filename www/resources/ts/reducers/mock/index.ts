// @NOTE: Import library functions.
// {...}

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
import IReducerInitialState from '@interfaces/IReducerInitialState';
import MockAction from '@actions/mock';

interface IMockReducerState extends IReducerInitialState {
    state: string;
}

const mockReducerInitialState: IMockReducerState = {
    loading: false,
    updating: false,
    state: 'initial',
};

/**
 * Reducer that handles events that deal with mocking (just example reducer).
 *
 * @param {IMockReducerState} state
 * @param {MockAction} action
 *
 * @returns {IMockReducerState}
 */
export default function mockReducer(state = mockReducerInitialState, action: MockAction) {
    switch (action.type) {
        case 'MOCK_REQUEST':
            return {
                ...state,
                state: 'request',
            };

        default:
            break;
    }

    return state;
}
