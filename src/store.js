import { createStore } from 'redux';
import dataImage from './dataImage';


const initialState = {
    imageList: dataImage
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'toggleImages': 
            return { imageList: action.imageList };  
        default: return state;
    }
}

const store = createStore(reducer);

export default store;