import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {};
const contactStore = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default contactStore;