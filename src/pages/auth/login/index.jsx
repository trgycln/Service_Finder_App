import React, { useContext } from "react";
import { useDispatch } from "react-redux"
import styles from "../login/index.module.css";
import { useApi } from "../../../hooks/useApi";
import { TokenContext } from "../../../context/token-context-provider";
import { userDataAction } from "../../../redux/reducers/userDataReducer";

const LoginPage = () => {
	const dispatch = useDispatch()
const tokenContext = useContext(TokenContext)
  const api = useApi();

  const handleSubmit = (event) => {
	
    event.preventDefault();
    var formData = new FormData(event.target); // formdaki tüm girdi değerlerini FormData nesnesine dönüştürür
    var jsonData = Object.fromEntries(formData); // FormData nesnesini JSON formatına dönüştürür
    
	api
      .post("https://api.adoptez1artisan.com/auth/login", jsonData)
      .then((res) => {
        const token = res.data.data.token;
		tokenContext.setToken(token)
		const userData = res.data.data.userData

		dispatch(userDataAction(userData))
		
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={`text-center ${styles.container}`}>
      <form onSubmit={handleSubmit} className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          name="email"
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          name="password"
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
      </form>
    </div>
  );
};

export default LoginPage;
