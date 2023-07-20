import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {LoginUser, reset, getMe} from "../../stores/features/authSlice";
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";

//template
import logoKopkarla from "../../assets/images/logo.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";
import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
      (state) => state.auth
  );

  useEffect(()=>{
    dispatch(getMe());
  },[dispatch]);

  useEffect(()=>{
      if(user || isSuccess){
        navigate("/profile")
      }
      dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);

  const Auth = (e:eny) => {
      e.preventDefault();
      dispatch(LoginUser({email, password}));
      messageNotif();
  }

  // inisialisasi notif
  const messageNotification = useRef<NotificationElement>();
  const messageNotif = () => {
    // Show notification
    messageNotification.current?.showToast();
  };

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <Notification
          getRef={(el) => {
            messageNotification.current = el;
          }}
          options={{
            duration: 3000,
          }}
          className="flex flex-col sm:flex-row"
        >
          <Lucide 
            icon={`${isError ? 'XCircle' : 'CheckCircle'}`} 
            className={`${isError ? 'text-danger'  : 'text-success'}`}
            />
          <div className="ml-4 mr-4">
            <div className="font-medium">Message</div>
            <div className="mt-1 text-slate-500 capitalize">
              {message ? message : 'login success'}
            </div>
          </div>
        </Notification>
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
                    onClick={messageNotif}
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
