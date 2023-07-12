import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {LoginUser, reset, getMe} from "../../stores/features/authSlice";
import Toastify from "toastify-js";

//template
import logoKopkarla from "../../assets/images/logo.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
      (state) => state.auth
  );

  useEffect(()=>{
    dispatch(getMe());
    if(isSuccess){
      navigate('/')
    }
  },[dispatch]);

  // const Notify = (text) => {
  //   Toastify({
  //     text: text,
  //     className: "info",
  //     style: {
  //       background: "linear-gradient(to right, #00b09b, #96c93d)",
  //     }
  //   }).showToast();
  // }



  useEffect(()=>{
      if(user || isSuccess){
          navigate("/")
      }
      dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);


  const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({email, password}));
  }

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <img
              className="w-24 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoKopkarla}
            />
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            
            <form onSubmit={Auth}>
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-5"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                <div className="flex items-center mr-auto">
                  <FormCheck.Input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2 border"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <a href="">Forgot Password?</a>
              </div>
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button type="submit" variant="primary" className="w-full xl:mr-3">
                  {isLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Login'}
                </Button>
              </div>
            </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
