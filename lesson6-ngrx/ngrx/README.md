# Ngrx

## Redux

Store {
  state
  private reducer(state, action) {
   switch(action) {
     return state.copy();
   }
  }

  dispatch(action){
    return reducer(state, action);
  }
}


## ngRx <= Redux + Rxjs