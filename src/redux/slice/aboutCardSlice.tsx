import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAboutCard = createAsyncThunk(
    'aboutCard/fetchAboutCard',
    async function(id:string, thunkAPI) {
      try {
        const response = await fetch(`http://localhost:7070/api/items/${id}`);
        if (!response.ok) {
          throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
      return thunkAPI.rejectWithValue('Unknown Error');
      }
    }
)

const aboutCard = createSlice({
    name: 'aboutCard',
    initialState: {
        card: [],
        cardSize: '',
        status: null,
        error: null,
    },
    reducers: {
      switchSize(state, action) {
        state.cardSize = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAboutCard.pending, state => {
          state.status = 'loading';
          state.error = null;
        })
        builder.addCase(fetchAboutCard.fulfilled, (state, action) => {
          state.status = 'resolved',
          state.card = [];
          state.card.push(action.payload);
          state.cardSize = '';

        })
        builder.addCase(fetchAboutCard.rejected, (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        })
    }
});

export const {switchSize} = aboutCard.actions;

export default aboutCard.reducer;