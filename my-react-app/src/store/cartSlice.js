import { createSlice } from "@reduxjs/toolkit";

// Створення слайсу для кошика
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Початковий стан - кошик порожній
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Якщо товар вже є в кошику, збільшуємо кількість
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Якщо товару ще немає, додаємо
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload); // Видалення товару з кошика
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) item.quantity += 1; // Збільшуємо кількість товару
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1; // Зменшуємо кількість товару
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
