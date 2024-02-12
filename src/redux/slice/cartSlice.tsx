import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PropsCartProduct } from '../../components/Cart/Cart';

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async function(order, {rejectWithValue}) {
      console.log(JSON.stringify(order))
      try {
        const response = await fetch('http://localhost:7070/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order),
        });

        if (!response.ok) {
          throw new Error('Server Error!');
        }

      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
)

const cart = createSlice({
    name: 'cart',
    initialState: {
        cards: JSON.parse(localStorage.getItem('cards')) || [],
        status: null,
        error: null,
        orderItems: [],
        // total: cards.reduce(acc, cur) => (acc + Number(cur.total), 0)
    },
    reducers: {
      addCart(state, action) {
        const item = state.cards.find((el : PropsCartProduct) => (el.id === action.payload.id 
          && el.size === action.payload.size));
          if (item) {
            item.quantity = item.quantity + action.payload.quantity;
            localStorage.setItem('cards', JSON.stringify(state.cards));
            return;
          }
          state.cards.push(action.payload);
          localStorage.setItem('cards', JSON.stringify(state.cards));
      },
      removeItemCart(state, action) {
        console.log(action.payload.id)
        const card = state.cards.find((el: PropsCartProduct) => el.id === action.payload.id 
          && el.size === action.payload.size)
        console.log(card);
        if (card) {
          card.quantity = card.quantity - 1;
          localStorage.setItem('cards', JSON.stringify(state.cards));
          if (card.quantity === 0) {
            state.cards = state.cards.filter((el: PropsCartProduct) => (el.number !== card.number));
            for (let i = 0; i < state.cards.length; i++) {
             state.cards[i].number = i+1; 
            }
            localStorage.setItem('cards', JSON.stringify(state.cards));
          }
           
        }
      },
      addOrderCart(state) {
        state.orderItems = [];
        state.cards.forEach((card: PropsCartProduct) => {
          const item = {
            id: Number(card.id),
            price: Number(card.price),
            count: Number(card.quantity),
          }
          state.orderItems.push(item);
        })
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, state => {
          state.status = 'loading';
          state.error = null;
        })
        builder.addCase(fetchCart.fulfilled, (state, action) => {
          state.status = 'resolver';
          state.cards = [];
          localStorage.setItem('cards', JSON.stringify(state.cards));
        })
        builder.addCase(fetchCart.rejected, (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        })
    }
});

export const {addCart, addOrderCart, removeItemCart} = cart.actions;

export default cart.reducer;