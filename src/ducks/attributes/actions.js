import { CHANGE_ATTRIBUTE } from './types';

export const changeAttribute = (attribute) => {
    return {
        type: CHANGE_ATTRIBUTE,
        attribute
    }
}