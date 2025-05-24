import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            const existing = state.items.find(function (item) {
                return item.id === action.payload.id;
            });

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: function (state, action) {
            state.items = state.items.filter(function (item) {
                return item.id !== action.payload;
            });
        },

        increaseQuantity: function (state, action) {
            const item = state.items.find(function (i) {
                return i.id === action.payload;
            });

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: function (state, action) {
            const item = state.items.find(function (i) {
                return i.id === action.payload;
            });

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(function (i) {
                    return i.id !== action.payload;
                });
            }
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
