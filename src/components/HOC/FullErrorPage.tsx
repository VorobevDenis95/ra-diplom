import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
import Banner from "../Banner/Banner";

const withNewPage = (Component: () => JSX.Element ) => {
  return class extends React.Component{
    render(): React.ReactNode {
        return (
        <>
          <Header/>
          <Banner />
          <Component/>
          <Footer/>
        </>
        )
    }
  }
}

const FullErrorPage = withNewPage(ErrorPage);

export {FullErrorPage};