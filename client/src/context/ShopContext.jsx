import React, { createContext, useContext, useReducer } from 'react';

const ShopContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  cartCount: 0,
  wishlistCount: 0
};

function shopReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingCartItem = state.cart.find(item => item.id === action.payload.id);
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartCount: state.cartCount + 1
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        cartCount: state.cartCount + 1
      };

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart.find(item => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        cartCount: state.cartCount - (itemToRemove ? itemToRemove.quantity : 0)
      };

    case 'UPDATE_CART_QUANTITY':
      const oldItem = state.cart.find(item => item.id === action.payload.id);
      const quantityDiff = action.payload.quantity - (oldItem ? oldItem.quantity : 0);
      
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        cartCount: state.cartCount + quantityDiff
      };

    case 'ADD_TO_WISHLIST':
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        wishlistCount: state.wishlistCount + 1
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
        wishlistCount: state.wishlistCount - 1
      };

    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const isInCart = (productId) => {
    return state.cart.some(item => item.id === productId);
  };

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const getCartItemQuantity = (productId) => {
    const item = state.cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    isInCart,
    isInWishlist,
    getCartItemQuantity
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
