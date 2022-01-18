import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    const {users, error, isLoading} = useAppSelector(state => state.userReducer)
    //const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
    <div className="App">
        {/*<h2>Count: {count}</h2>*/}
        {/*<button onClick={() => dispatch(increment(5))}>INCREMENT</button>*/}
        {isLoading && <h2>LOADING ...</h2>}
        {error && <h2>Error loading users<h5>{error}</h5></h2>}
        {!error && !isLoading && JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
