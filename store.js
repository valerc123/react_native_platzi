import { createStore } from 'redux';
import reducer from './reducers/videos';

const store = createStore(reducer, {
    videos:'platzi'
})

export default store;