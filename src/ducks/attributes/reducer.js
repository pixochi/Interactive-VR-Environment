import { CHANGE_ATTRIBUTE } from './types';


const initialState = {
    primitive: 'a-box',
    position: '1 1.6 -2',
    color: 'red',
    'click-drag': true,
    'dynamic-body': true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_ATTRIBUTE: {
            return { ...state, ...action.attribute }
        }
        default: {
            return state;
        }
    }
}