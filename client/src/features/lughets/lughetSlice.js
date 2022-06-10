import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import lughetService from "./lughetService"

const initialState = {
    lughets: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Add new Lughet

export const addLughet = createAsyncThunk("lughets/create", async (lughetData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.editor.token
        return await lughetService.addLughet(lughetData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)


// Get current lughets

export const getCurrentLughets=createAsyncThunk("lughets/getLughet", async(thunkAPI)=>{
try {
    return await lughetService.getCurrentLughet()
} catch (error) {
    const message =
            (error.response && error.response.data && error.response.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    
}

})



// Delete Lughet

export const deleteLughet = createAsyncThunk("lughets/delete", async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.editor.token
        return await lughetService.deleteLughet(id, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)



export const lughetSlice = createSlice({
    name: "lughet",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },

    extraReducers: (builder) => {
        builder
            .addCase(addLughet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addLughet.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.lughets.push(action.payload)
            })
            .addCase(addLughet.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCurrentLughets.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCurrentLughets.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.lughets=action.payload
            })
            .addCase(getCurrentLughets.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteLughet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteLughet.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.lughets=state.lughets.filter((lughet)=>lughet._id !== action.payload.id)
            })
            .addCase(deleteLughet.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})


export const { reset } = lughetSlice.actions
export default lughetSlice.reducer