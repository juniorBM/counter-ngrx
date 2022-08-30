import { Action, createAction, props, createReducer, on } from '@ngrx/store';

enum ActionTypes {
  Increment = 'Increment',
  Decrement = 'Decrement',
}

// export class Decrement implements Action {
//   readonly type = ActionTypes.Decrement;
// }

// export class Increment implements Action {
//   readonly type = ActionTypes.Increment;
// }

export const increment = createAction(
  ActionTypes.Increment,
  props<{ payload: any }>()
);

export const decrement = createAction(
  ActionTypes.Decrement,
  props<{ payload: any }>()
);

const INITIAL_STATE = {
  counter: 0,
};

export const counterReducer = createReducer(
  INITIAL_STATE,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 }))
);

// export const counterReducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case ActionTypes.Decrement:
//       return {...state, counter: state.counter - 1};
//     case ActionTypes.Increment:
//       return {...state, counter: state.counter + action.payload};
//     default:
//       return state
//   }
// }
