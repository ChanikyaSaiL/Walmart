import React from "react";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { ShopProvider } from "./context/ShopContext";

function App() {

  const browserObj=createBrowserRouter([
    {
      path:"",
      element:<RootLayout />,
      children:[
        {
          path: "",
          element:<Home />
        },
        {
          path:"categories",
          element:<Categories />
        },
        {
          path:"about",
          element:<About />
        },
        {
          path:"products/:categoryId",
          element:<Products />
        },
        {
          path:"cart",
          element:<Cart />
        },
        {
          path:"wishlist",
          element:<Wishlist />
        }
      ]
    }
  ])
  return (
    <ShopProvider>
      <RouterProvider router={browserObj}/>
    </ShopProvider>
  )
}

export default App;