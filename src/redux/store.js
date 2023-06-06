import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Redux Test', number: '443-89-12' },
        { id: 'id-2', name: 'Flying good!', number: '443-89-12' },
        { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
    ],
    filter: "",
}

// export const store = {
//     contacts: [
//         { id: 'id-1', name: 'Bradley Cooper', number: '443-89-12' },
//         { id: 'id-2', name: 'Elijah Jordan', number: '443-89-12' },
//         { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
//         { id: 'id-4', name: ' Viggo Peter', number: '227-91-26' },
//     ],
//     filter: "all",
// }

const rootReducer = ( state = initialState, action) => {
    return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
