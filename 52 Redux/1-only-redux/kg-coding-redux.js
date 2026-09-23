const redux =  require('redux');

const INITIAL_VALUE = {
  counter:0
};

const reducer  =  (store = INITIAL_VALUE, action) =>{
  return {counter: store.counter + 1};
}

const store = redux.createStore(reducer);

const sunscriber = () =>{
  const state = store.getState();
  console.log(state);
  
}

 store.subscriber(subscriber);

 store.dispatch({typpe: 'INCREMENT'});