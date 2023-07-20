import React, {useEffect, useState} from "react";

import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { CalendarOptions, EventClickArg } from "@fullcalendar/common";

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

  for(var i = 0; i < inOuts?.length; i++){
    datas.push({
      id:inOuts[i].uuid,
      title:inOuts[i].tipe_absen.name,
      start:inOuts[i].tanggalMulai,
      display: 'list-item',
      color: `${inOuts[i].pelanggaran.uuid === '951bcf0d-a100-434b-bbd5-7ce8df6c70bd'  ? 'red' : ''}`,
      className: 'cursor-pointer'
    })
    console.log(datas);
  }

  const options: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    droppable: false,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: ""
    },
    initialDate: Date.now(),
    navLinks: true,
    editable: false,
    dayMaxEvents: true,
    events: datas,
    eventClassNames: '',
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    eventClick: function (info){
      clikInfo(info)
    }
  };

  const clikInfo = (info: EventClickArg) => {
    alert('haiii');
  }

  return (
    <div className="full-calendar">
      <FullCalendar {...options} />
    </div>
  );
}

export default Main;
