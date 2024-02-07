import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopSales = createAsyncThunk(
    'topSales/fetchTopSales',
    async function(_, {rejectWithValue}) {
      try {
        const response = await fetch('http://localhost:7070/api/top-sales');
        if (!response.ok) {
          throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
)

const topSales = createSlice({
    name: 'topSales',
    initialState: {
        cards: [],
        status: null,
        error: null,
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopSales.pending, state => {
          state.status = 'loading';
          state.error = null;
        })
        builder.addCase(fetchTopSales.fulfilled, (state, action) => {
          state.status = 'resolver',
          state.cards = action.payload;
        })
        builder.addCase(fetchTopSales.rejected, (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        })
    }
});

export const {} = topSales.actions;

export default topSales.reducer;