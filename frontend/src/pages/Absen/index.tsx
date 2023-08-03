import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import { getInOuts } from "../../stores/features/InoutSlice";
import { getMe } from "../../stores/features/authSlice";


import "@fullcalendar/react/dist/vdom";
import Lucide from "../../base-components/Lucide";
import { Tab } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import Calendar from "../../components/Calendar";
import { Draggable as FullCalendarDraggable } from "../../base-components/Calendar";
import { Draggable } from "@fullcalendar/interaction";
import { FormTextarea, FormInput, FormLabel } from "../../base-components/Form";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const {inOuts} = useSelector((state) => state.inOuts);
  const {user, isError} = useSelector((state) => state.auth);
  

  useEffect(()=>{
    dispatch(getMe());
    setId(user && user.uuid);
    dispatch(getInOuts({id}));
  },[dispatch, id]);

  const dragableOptions: Draggable["settings"] = {
    itemSelector: ".event",
    eventData(eventEl) {
      const getDays = () => {
        const days = eventEl.querySelectorAll(".event__days")[0]?.textContent;
        return days ? days : "0";
      };
      return {
        title: eventEl.querySelectorAll(".event__title")[0]?.innerHTML,
        duration: {
          days: parseInt(getDays()),
        },
      };
    },
  };


  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium"></h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Event Reports
          </Button>
          <Button className="!box">
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-12 2xl:col-span-12">
          <div className="p-5 box w-full xl:w-3/4">
            <Calendar inOuts={inOuts}/>
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;
