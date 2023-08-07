import React, {useEffect, useState} from "react";
import moment from "moment";
import Button from "../../base-components/Button";
import {
  FormSelect,
  FormInput,
  FormLabel,
  FormHelp,
  FormCheck,
  FormSwitch,
  FormInline,
  InputGroup,
} from "../../base-components/Form";

import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { CalendarOptions} from "@fullcalendar/common";
import { Slideover } from "../../base-components/Headless";
import Lucide from "../../base-components/Lucide";
import axios from "axios";

type TypeProps = {
  inOuts: string
}

type TypeData = {
  uuid:string
  title: string
  start: string
  display: string
  color: string
  className: string
}

function Main(props: TypeProps) {
  const {inOuts} = props;
  const datas = [];
  const [dataInfo, setDataInfo] = useState([]);
  const [dataAbsen, setDataAbsen] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [buttonSlideover, setButtonSlideover] = useState(false);

  for(var i = 0; i < inOuts?.length; i++){
    datas.push({
      id:inOuts[i].uuid,
      title:inOuts[i].tipe_absen.name,
      start:inOuts[i].tanggalMulai,
      end:inOuts[i].tanggalSelesai,
      display: 'list-item',
      color: `${inOuts[i].pelanggaran.uuid === '951bcf0d-a100-434b-bbd5-7ce8df6c70bd'  ? 'red' : ''}`,
      className: 'cursor-pointer'
    })
  }

  const options: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, listPlugin],
    droppable: false,
    headerToolbar: {
      left: "prev,next today, dayGridMonth",
      center: "title",
      right: "",
    },
    initialDate: Date.now(),
    navLinks: true,
    editable: false,
    dayMaxEvents: true,
    events: datas,
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    eventClick: function (info){
      clikInfo(info)
    }
  };

  const clikInfo = (info) => {
    setShowForm(false);
    setButtonSlideover(true);
    setDataInfo(info.event._def);
    getDataAbsen(info.event._def.publicId);
    console.log(dataAbsen, "data absen");
  }

  const getDataAbsen = async(id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/inOut/${id}`,{
        withCredentials: true, // Now this is was the missing piece in the client side 
      });
      setDataAbsen(response.data);
    } catch (error) {
      
    }
  }

  return (
    <div className="full-calendar">
      <FullCalendar {...options} />
      
      {/* BEGIN: Slide over */}
      <Slideover
          backdrop="static"
          open={buttonSlideover}
          onClose={() => {
            setButtonSlideover(false);
          }}
        >
          <Slideover.Panel>
            <a
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setButtonSlideover(false);
              }}
              className="absolute top-0 left-0 right-auto mt-4 -ml-12"
              href="#"
            >
              <Lucide icon="X" className="w-8 h-8 text-slate-400" />
            </a>
            <Slideover.Title className="p-5">
              <h2 className="mr-auto text-base font-medium capitalize">
                {dataInfo.title} - {moment(dataAbsen && dataAbsen.tanggalMulai).format('YYYY-MM-DD')}
              </h2>
              <Button 
                variant="primary"
                size="sm"
                className="w-auto mb-2 mr-1"
                onClick={()=>setShowForm(!showForm)}
                >
                  Pengajuan Koreksi
              </Button>
            </Slideover.Title>
            <Slideover.Description>
              {!showForm ?
              <div className="grid grid-cols-12 gap-y-7">
                <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                  <div className="ml-5">
                    <div className="font-medium">Waktu Finger</div>
                    <div className="mt-1 text-slate-500">{moment(dataAbsen && dataAbsen.tanggalMulai).format('hh:mm:ss')}</div>
                  </div>
                </div>
                <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                  <div className="ml-5">
                    <div className="font-medium">Pelanggaran</div>
                    <div className="mt-1 text-slate-500">{dataAbsen.pelanggaran && dataAbsen.pelanggaran.name}</div>
                  </div>
                </div>
                <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                  <div className="ml-5">
                    <div className="font-medium">Status Absen</div>
                    <div className="mt-1 text-slate-500">{dataAbsen.status_inout && dataAbsen.status_inout.name}</div>
                  </div>
                </div>
              </div>
              :
              <form>
                <div className="grid grid-cols-12 gap-y-7">
                  <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                    <div className="ml-5 w-full">
                      <div className="font-medium">Keterangan</div>
                      <FormInput className="mt-4" id="regular-form-1" type="text" placeholder="Keterangan" />
                    </div>
                  </div>
                  <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                    <div className="ml-5 w-full">
                    <Button 
                      variant="primary"
                      size="sm"
                      className="w-full mb-2 mr-1"
                      >
                        Kirim Pengajuan
                    </Button>
                    </div>
                  </div>
                </div>
              </form>
              }
              
            </Slideover.Description>
          </Slideover.Panel>
        </Slideover>
        {/* END: Modal Content */}
    </div>
  );
}

export default Main;
