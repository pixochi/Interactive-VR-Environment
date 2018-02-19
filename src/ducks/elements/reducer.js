import { CREATE_ELEMENT, MODIFY_ELEMENT } from './types';

const initialState = {}

export default (state = initialState, action) => {

    const { type, element, id } = action;

    switch(type) {
        case CREATE_ELEMENT: {
            return { ...state, ...element }
        }
        case MODIFY_ELEMENT: {
            let modifiedEl = {};
            modifiedEl[id] = { ...state[id], ...action.attributes }
            return { ...state, ...modifiedEl }
        }
        default: {
            return state;
        }
    }
}