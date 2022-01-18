import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        // increment(state, action: PayloadAction<number>) {
        //     state.count += action.payload;
        // }
    }

    // redux without Toolkit
    // return {...state, field: action.payload}
    // return {
    //     ...state,
    //     object: {
    //       ...state.object,
    //       filed: action.payload
    //     }
    // }
    //
    // redux Toolkit
    // state.field = action.payload
    // state.object.field = action.payload
    //
})

export default userSlice.reducer;