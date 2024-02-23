import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchCatalog',
    async function(id, thunkAPI) {
      try {
        let response;
        if (id === 11) {
          response = await fetch('http://localhost:7070/api/items');  
        } else {
          response = await fetch(`http://localhost:7070/api/items?categoryId=${id}`);
        }
        if (!response.ok) {
          throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        if (error instanceof Error) 
        return thunkAPI.rejectWithValue(error.message);
      return thunkAPI.fulfillWithValue('Unknown Error');
      }
    }
)

export const fetchCategories = createAsyncThunk(
    'catalog/fetchCategories',
    async function(_, {rejectWithValue}) {
      try {
        const response = await fetch('http://localhost:7070/api/categories');
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


export const fetchAddCatalog = createAsyncThunk(
  'catalog/fetchAddCatalog',
  async function({id: id, length: length}, {rejectWithValue}) {
    try {
      let response;
      if (id === 11) {
        response = await fetch(`http://localhost:7070/api/items?offset=${length}`);  
      } else {
        response = await fetch(`http://localhost:7070/api/items?categoryId=${id}&offset=${length}`);
      }
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

export const fetchSearch = createAsyncThunk(
  'catalog/fetchSearch',
  async function(search, {rejectWithValue}) {
    try {
      const response = await fetch(`http://localhost:7070/api/items?q=${search}`);
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

const categoryAll =  {
  id: 11,
  title: 'Все',
}

const catalog = createSlice({
    name: 'catalog',
    initialState: {
        cards: [],
        cardsSearch: [],
        categories: [],
        idActiveCategory: 11,
        status: null,
        error: null,
        btnAdd: true,
        search: '',
        statusSearch: false,
    },
    reducers: {
      switchCategory(state, action) {
        if (state.idActiveCategory !== action.payload) {
          state.idActiveCategory = action.payload;
          state.btnAdd = true;
          // state.categories.forEach(ctg => {
          //   if (ctg.id === state.idActiveCategory) {
          //     ctg.selected = true;
          //   } else ctg.selected = false;
          // })
        }
      },
      changeSearch(state, action) {
        state.search = action.payload
      },
      switchSearch(state, action) {
        state.statusSearch = action.payload;
      }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchCatalog.pending, state => {
        //   state.status = 'loading';
        //   state.error = null;
        // })
        // builder.addCase(fetchCatalog.fulfilled, (state, action) => {
        //   state.status = 'resolver',
        //   state.cards = action.payload;
        // })
        // builder.addCase(fetchCatalog.rejected, (state, action) => {
        //   state.status = 'rejected';
        //   state.error = action.payload;
        // })

        // categories
        builder.addCase(fetchCategories.pending, state => {
            state.status = 'loadingCategories';
            state.error = null;
          })
          builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'resolverCategories',
            state.categories = action.payload;
            state.categories.unshift(categoryAll);
            // state.categories.forEach(ctg => {
            //   if (ctg.id === state.idActiveCategory) {
            //     ctg.selected = true
            //   } else ctg.selected = false;
            // })
          })
          builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'rejectedCategories';
            state.error = action.payload;
          })
          // catalog
          builder.addCase(fetchCatalog.pending, state => {
            state.status = 'loading';
            state.error = null;
          })
          builder.addCase(fetchCatalog.fulfilled, (state, action) => {
            state.status = 'resolver',
            state.cards = action.payload;
          })
          builder.addCase(fetchCatalog.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
          })
          //add catalog
          builder.addCase(fetchAddCatalog.pending, state => {
            state.status = 'loadingButton';
            state.error = null;
          })
          builder.addCase(fetchAddCatalog.fulfilled, (state, action) => {
            state.status = 'resolverButton';
            const arr = action.payload;
            if (arr.length < 6) state.btnAdd = false;
            arr.forEach(element => state.cards.push(element));
          })
          builder.addCase(fetchAddCatalog.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
          })
          //search
          builder.addCase(fetchSearch.pending, state => {
            state.status = 'loading';
            state.error = null;
          })
          builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.status = 'resolver';
            state.cards = action.payload;
          })
          builder.addCase(fetchSearch.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
          })

    }
});

export const {switchCategory, switchSearch, changeSearch} = catalog.actions;

export default catalog.reducer;