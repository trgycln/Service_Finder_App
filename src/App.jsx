import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CategoryPage from "./pages/category-page";
import CategoryDetailsPage from "./pages/category-details-page";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "./hooks/useApi";
import { categoryAction } from "./redux/reducers/categoryReducer";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";

function App() {
  const {categoryState} = useSelector(state=>state)
  const dispatch = useDispatch();
  const api = useApi();

  // useEffect kullanılmadan veri çekme işlemi

  if(!categoryState.initialized){
    api
        .get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories"
        )
        .then((res) => {
          dispatch(categoryAction(res.data.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(categoryAction([]))
        });
  }


  // useEffect kullanılarak api'de veri çekildi.
  // useEffect(() => {
  //   api
  //     .get(
  //       "https://api.adoptez1artisan.com/public/categories/listMainCategories"
  //     )
  //     .then((res) => {
  //       dispatch(categoryAction(res.data.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="category">
            <Route index element={<CategoryPage />} />
            <Route path="details">
              <Route path=":slug" element={<CategoryDetailsPage />} />
            </Route>
          </Route>
          <Route path="auth">
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
