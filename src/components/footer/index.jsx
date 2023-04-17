import React, { useContext } from "react";
import Logo from "../../assets/logo/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import { ThemeContext } from "../../context/theme-context-provider"

const Footer = () => {
  const themeContextData = useContext(ThemeContext)
  const { categoryState } = useSelector((state) => state);
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={Logo} alt="" width="24" height="19" />
            <small className="d-block mb-3 text-body-secondary">
              &copy; 2017–2023
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Categories</h5>
            <ul className="list-unstyled text-small">
              {categoryState.categories.initialized ? (
                <li>Loading...</li>
              ) : (
                categoryState.categories.map((item, index) => {
                  if(index>=5){
                    return null
                  }
                  return (
                    <li key={item.id}>
                      <Link to={`category/details/${item.slug}`}>{item.name}</Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex gap-2 ">
          <Button onClick={()=>{themeContextData.setTheme("light")}} variant="warning">Light</Button>
          <Button onClick={()=>{themeContextData.setTheme("dark")}} variant="secondary">Dark</Button>
          <Button onClick={()=>{themeContextData.toggleTheme()}} variant="success">Toggle</Button>
          <hr />
          Tema :  {themeContextData.theme}
        </div>
      </footer>
    </>
  );
};

export default Footer;
