const redux = require('redux');

let initState = {
  num: 5
}

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_NUM") {
    return {
      ...state,
      num: state.num + 1
    }
  }
  if (action.type === "INC_NUM") {
    return {
      ...state,
      num: action.value + state.num
    }
  }
  if (action.type === "DEC_NUM") {
    return {
      ...state,
      num: state.num - action.value
    }
  }
  return state;
}

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: "ADD_NUM"
})
store.dispatch({
  type: "INC_NUM",
  value: 38
})
store.dispatch({
  type: "DEC_NUM",
  value: 24
})