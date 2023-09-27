//Step 1
//Create a store
//Import redux and destructure a createStore function
//Then create a var called store and in this store u can called a function createStore and pass your reducer.
//niceddd


//Step 2
//Create a action and give it type name and action 


//Step 3 
//Create a reducer 
//Pass 2 arguments state and action, which come from our action.
//Create a login if type this so add this and so on
//End return default state


//Step 4
//Now you can use your redux.

//Example of code
const { createStore } = Redux;

const initState = {
    name: [],
    fatherName: []
}

const myReducer = (state = initState, action) => {
    if (action.type === 'Add_Name') {
        return {
            ...state,
            name: [...state.name, action.name]
        }
    }
    if (action.type === 'Add_FatherName') {
        return {
            ...state,
            fatherName: [...state.fatherName, action.Fname]
        }
    }
    return state
}
const myAction = { type: 'Add_Name', name: 'abdullah ansari' }
const myAction2 = { type: 'Add_FatherName', Fname: 'ansari' }

store.dispatch(myAction);
store.dispatch(myAction2);

const store = createStore(myReducer);

console.log(store.getState())