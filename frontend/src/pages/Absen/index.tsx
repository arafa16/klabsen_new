import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getInOuts, AbsenMasuk} from "../../stores/features/InoutSlice";
import { getMe } from "../../stores/features/authSlice";


import "@fullcalendar/react/dist/vdom";
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import Calendar from "../../components/Calendar";
import ButtonAbsen from "../../components/Absen/buttonAbsen";
import ButtonAbsenWfh from "../../components/Absen/buttonAbsenWfh";

function Main() {
  const dispatch = useDispatch();
  const [id, setId] = useState<string>("");
  const {inOuts} = useSelector((state) => state.inOuts);
  const {user, isError} = useSelector((state) => state.auth);
  
  useEffect(()=>{
    getData();
  },[id]);

  const getData = () => {
    dispatch(getMe());
    setId(user && user.uuid);
    dispatch(getInOuts({id}));
  }

  function clickMasuk() {
    dispatch(AbsenMasuk({
      id,
      userId:id,
      tanggalMulai: "2023-08-01 08:10:00",
      tanggalSelesai: "2023-08-01 08:10:00",
      tipeAbsenId: "c1adc93c-1619-4b2d-9796-2fdc0ad5a605",
      pelanggaranId: "951bcf0d-a100-434b-bbd5-7ce8df6c70bd",
      statusInoutId: "a0eee791-663d-41ca-93d5-3fc7239e39eb"
    }))
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" size="sm"  className="mr-2 shadow-md">
            <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Event Reports
          </Button>
          <Button className="!box" size="sm" >
            <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Absen */}
        <div className="col-span-12 xl:col-span-3 2xl:col-span-3">
          <div>
            <ButtonAbsen clickMenu={clickMasuk} />
          </div>
          <div className="mt-4">
            <ButtonAbsenWfh />
          </div>
          
        </div>
        {/* END: Absen */}
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-9 2xl:col-span-9">
          <div className="p-5 box">
            <Calendar inOuts={inOuts}/>
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;
