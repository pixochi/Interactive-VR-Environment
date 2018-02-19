import uniqid from 'uniqid';

import { CREATE_ELEMENT, MODIFY_ELEMENT } from './types';

export const createElement = (element) => {

    const id = uniqid();
    let newElement = {};
    newElement[id] = { ...element, id }

    return {
        type: CREATE_ELEMENT,
        element: newElement
    }
}

export const modifyElement = (id, attributes) => {
    return {
        type: MODIFY_ELEMENT,
        id,
        attributes
    }
}