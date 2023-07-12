import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//get data by reducer
import { getGanders } from "../../stores/features/ganderSlice";
import { getGolonganDarah } from "../../stores/features/golonganDarahSlice";
import { getStatusPerkawinan } from "../../stores/features/statusPerkawinanSLice";
import { getPendidikans } from "../../stores/features/pendidikanSlice";
import { getBanks } from "../../stores/features/bankSlice";
import { getKontakEmergency } from "../../stores/features/kontakEmergencySlice";
import { getPenempatans } from "../../stores/features/penempatanSlice";
import { getJabatans } from "../../stores/features/jabatanSlice";
import { getAtasans } from "../../stores/features/atasanSlice";
import { RegisterUser } from "../../stores/features/authSlice";
import { getJamOperasionals } from "../../stores/features/jamOperasionalSlice";
import { getGroups } from "../../stores/features/groupSlice";

import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Litepicker from "../../base-components/Litepicker";
import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const [show, setShow] = useState(1);
  const {user, isError, isSuccess, isLoading, message} = useSelector(
      (state) => state.auth
  );

  //data pribadi
  const [name, setName] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [ganderId, setGanderId] = useState("");
  const [golonganDarahId, setGolonganDarahId] = useState("");
  const [statusPerkawinanId, setStatusPerkawinanId] = useState("");
  const [jumlahAnak, setJumlahAnak] = useState("");
  const [namaIbu, setNamaIbu] = useState("");

  //data pendidikan
  const [pendidikanId, setPendidikanId] = useState("");
  const [namaSekolah, setNamaSekolah] = useState("");
  const [jurusanSekolah, setJurusanSekolah] = useState("");
  const [tahunLulus, setTahunLulus] = useState("");
  const [ipk, setIpk] = useState("");

  //data ktp, sim, npwp, bpjs

  const [nomorKtp, setNomorKtp] = useState("");
  const [alamatKtp, setAlamatKtp] = useState("");
  const [alamatDomisili, setAlamatDomisili] = useState("");
  const [nomorSim, setNomorSim] = useState("");
  const [nomorNpwp, setNomorNpwp] = useState("");
  const [nomorBpjsKesehatan, setNomorBpjsKesehatan] = useState("");
  const [nomorBpjsKetenagaKerja, setNomorBpjsKetenagaKerja] = useState("");

  //data bank dan emergency
  const [bankId, setBankId] = useState("");
  const [nomorRekening, setNomorRekening] = useState("");
  const [kontakEmergencyId, setKontakEmergencyId] = useState("");
  const [nomorEmergency, setNomorEmergency] = useState("");
  const [alamatEmergency, setAlamatEmergency] = useState("");
  
  //Data Personal Perusahaan
  const [absenId, setAbsenId] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [penempatanId, setPenempatanId] = useState("");
  const [groupId, setGroupId] = useState("");
  const [jabatanId, setJabatanId] = useState("");
  const [atasanId, setAtasanId] = useState("");
  const [jamOperasionalId, setJamOperasionalId] = useState("");
  const [extention, setExtention] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("test");
  const [statusId, setStatusId] = useState("744cf642-ae53-487c-8dd4-24bb2b7bf068");

  const dispatch = useDispatch();

  //get selector ganders
  const {ganders} = useSelector(
    (state) => state.ganders
  )

  //get selector golongan darah
  const {golonganDarah} = useSelector(
    (state) => state.golonganDarah
  )

  //get selector golongan darah
  const {statusPerkawinan} = useSelector(
    (state) => state.statusPerkawinan
  )

  //get selector golongan pendidikan
  const {pendidikans} = useSelector(
    (state) => state.pendidikans
  )

  //get selector golongan banks
  const {banks} = useSelector(
    (state) => state.banks
  )

  //get selector golongan banks
  const {kontakEmergency} = useSelector(
    (state) => state.kontakEmergency
  )

  //get selector golongan banks
  const {penempatans} = useSelector(
    (state) => state.penempatans
  )

  //get selector jabatans
  const {jabatans} = useSelector(
    (state) => state.jabatans
  )

  //get selector atasan
  const {atasans} = useSelector(
    (state) => state.atasans
  )

  //get selector jam operasional
  const {jamOperasionals} = useSelector(
    (state) => state.jamOperasionals
  )

  //get selector group
  const {groups} = useSelector(
    (state) => state.groups
  )

  useEffect(()=>{
    dispatch(getGanders());
    dispatch(getGolonganDarah());
    dispatch(getStatusPerkawinan());
    dispatch(getPendidikans());
    dispatch(getBanks());
    dispatch(getKontakEmergency());
    dispatch(getPenempatans());
    dispatch(getJabatans());
    dispatch(getAtasans());
    dispatch(getJamOperasionals());
    dispatch(getGroups());
  },[dispatch]);

  const Register = (e) => {
    e.preventDefault();
    dispatch(RegisterUser({
      nik,
      absenId,
      name, 
      ganderId, 
      email,
      extention,
      nomorHp,
      penempatanId,
      jabatanId,
      atasanId,
      nomorKtp,
      alamatKtp,
      alamatDomisili,
      tempatLahir,
      tanggalLahir,
      nomorNpwp,
      statusPerkawinanId,
      jumlahAnak,
      namaIbu,
      pendidikanId,
      namaSekolah,
      jurusanSekolah,
      tahunLulus,
      ipk,
      nomorBpjsKesehatan,
      nomorBpjsKetenagaKerja,
      kontakEmergencyId,
      nomorEmergency,
      alamatEmergency,
      nomorSim,
      golonganDarahId,
      bankId,
      nomorRekening,
      jamOperasionalId,
      password,
      groupId,
      quote,
      statusId
    }));
    console.log()
  }
  

  const next = () => {
    const total = show + 1;
    if(show < 5){
      setShow(total);
    }
  }

  const preview = () => {
    const total = show - 1;
    if(show > 1){
      setShow(total)
    }
  }

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen px-5">
          {/* BEGIN: Wizard Layout */}
          <div className="w-full py-10 my-5 intro-y box sm:py-20">
            <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
              <div className="z-10 flex items-center flex-1 intro-x lg:text-center lg:block">
                <Button 
                  variant={show === 1 ? 'primary' : '' } 
                  className={show === 1 ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"}
                  onClick={()=>setShow(1)}
                  >
                  1
                </Button>
                <div className={show === 1 ? "ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto" : "ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400" }>
                  Data Pribadi
                </div>
              </div>
              <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                <Button 
                  variant={show === 2 ? 'primary' : '' } 
                  className={show === 2 ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" }
                  onClick={()=>setShow(2)}
                  >
                  2
                </Button>
                <div className={show === 2 ? "ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto" : "ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400" }>
                  Data Pendidikan
                </div>
              </div>
              <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                <Button 
                  variant={show === 3 ? 'primary' : '' } 
                  className={show === 3 ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" }
                  onClick={()=>setShow(3)}
                  >
                  3
                </Button>
                <div className={show === 3 ? "ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto" : "ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400" }>
                  Data KTP, SIM, NPWP & BPJS
                </div>
              </div>
              <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                <Button 
                  variant={show === 4 ? 'primary' : '' } 
                  className={show === 4 ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" }
                  onClick={()=>setShow(4)}
                  >
                  4
                </Button>
                <div className={show === 4 ? "ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto" : "ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400" }>
                  Data Bank & Emergency
                </div>
              </div>
              <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
                <Button 
                  variant={show === 5 ? 'primary' : '' } 
                  className={show === 5 ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" }
                  onClick={()=>setShow(5)}
                  >
                  5
                </Button>
                <div className={show === 5 ? "ml-3 text-base font-medium lg:w-32 lg:mt-3 lg:mx-auto" : "ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto text-slate-600 dark:text-slate-400" }>
                  Data Personal Perusahaan
                </div>
              </div>
            </div>
            <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">
              <form onSubmit={Register}>
              {show === 1 ? 
              <div>
                <div className="text-base font-medium">Data Pribadi</div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Nama</FormLabel>
                    <FormInput
                      id="name"
                      name="name"
                      type="text"
                      placeholder="name"
                      required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Tempat Lahir</FormLabel>
                    <FormInput
                      id="tempatLahir"
                      name="tempatLahir"
                      type="text"
                      placeholder="Location"
                      required
                      value={tempatLahir}
                      onChange={(e)=>setTempatLahir(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-4">Tanggal Lahir</FormLabel>
                    <Litepicker
                      value={tanggalLahir}
                      onChange={setTanggalLahir}
                      options={{
                        autoApply: false,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                        format:'YYYY-MM-DD'
                      }}
                      className="block mx-auto"
                      name="tanggalLahir"
                      required
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-6">Jenis Kelamin</FormLabel>
                    <FormSelect 
                      id="jenisKelamin"
                      name="jenisKelamin"
                      required
                      value={ganderId}
                      onChange={(e)=>setGanderId(e.target.value)}
                      >
                      <option></option>
                      {ganders && ganders.map((gander, index)=>(
                        <option key={index} value={gander.uuid}>{gander.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-6">Golongan Darah</FormLabel>
                    <FormSelect 
                      id="golonganDarah"
                      name="golonganDarah"
                      required
                      value={golonganDarahId}
                      onChange={(e)=>setGolonganDarahId(e.target.value)}
                      >
                      <option></option>
                      {golonganDarah && golonganDarah.map((goldar, index)=>(
                        <option key={index} value={goldar.uuid}>{goldar.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-6">Status Perkawinan</FormLabel>
                    <FormSelect 
                      id="statusPerkawinan"
                      name="statusPerkawinan"
                      required
                      value={statusPerkawinanId}
                      onChange={(e)=>setStatusPerkawinanId(e.target.value)}
                      >
                      <option></option>
                      {statusPerkawinan && statusPerkawinan.map((kawin, index)=>(
                        <option key={index} value={kawin.uuid}>{kawin.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Jumlah Anak</FormLabel>
                    <FormInput
                      id="jumlahAnak"
                      name="jumlahAnak"
                      type="text"
                      placeholder="0"
                      value={jumlahAnak}
                      onChange={(e)=>setJumlahAnak(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Nama Ibu</FormLabel>
                    <FormInput
                      id="namaIbu"
                      name="namaIbu"
                      type="text"
                      placeholder="name"
                      required
                      value={namaIbu}
                      onChange={(e)=>setNamaIbu(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              : '' }
              {show === 2 ? 
              <div>
                <div className="text-base font-medium">Data Pendidikan</div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Pendidikan</FormLabel>
                    <FormSelect 
                      id="pendidikan"
                      name="pendidikan"
                      required
                      value={pendidikanId}
                      onChange={(e)=>setPendidikanId(e.target.value)}
                      >
                      <option></option>
                      {pendidikans && pendidikans.map((pendidikan, index)=>(
                        <option key={index} value={pendidikan.uuid}>{pendidikan.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-2">Nama Sekolah</FormLabel>
                    <FormInput
                      id="namaSekolah"
                      name="namaSekolah"
                      type="text"
                      placeholder="University / School"
                      value={namaSekolah}
                      onChange={(e)=>setNamaSekolah(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Jurusan Sekolah</FormLabel>
                    <FormInput
                      id="jurusanSekolah"
                      name="jurusanSekolah"
                      type="text"
                      placeholder=""
                      value={jurusanSekolah}
                      onChange={(e)=>setJurusanSekolah(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-4">Tahun Lulus</FormLabel>
                    <FormInput
                      id="tahunLulus"
                      name="tahunLulus"
                      type="number"
                      placeholder="2023"
                      value={tahunLulus}
                      onChange={(e)=>setTahunLulus(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-5">IPK</FormLabel>
                    <FormInput
                      id="ipk"
                      name="ipk"
                      type="number"
                      placeholder="0.00"
                      value={ipk}
                      onChange={(e)=>setIpk(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              : '' }
              {show === 3 ? 
              <div>
                <div className="text-base font-medium">Data KTP, SIM, NPWP & BPJS</div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Nomor KTP</FormLabel>
                    <FormInput
                      id="nomorKtp"
                      name="nomorKtp"
                      type="text"
                      placeholder=""
                      value={nomorKtp}
                      onChange={(e)=>setNomorKtp(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Alamat KTP</FormLabel>
                    <FormInput
                      id="alamatKtp"
                      name="alamatKtp"
                      type="text"
                      placeholder="Jln."
                      value={alamatKtp}
                      onChange={(e)=>setAlamatKtp(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Alamat Domisili</FormLabel>
                    <FormInput
                      id="alamatDomisili"
                      name="alamatDomisili"
                      type="text"
                      placeholder="Jln."
                      value={alamatDomisili}
                      onChange={(e)=>setAlamatDomisili(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-5">Nomor SIM</FormLabel>
                    <FormInput
                      id="nomorSim"
                      name="nomorSim"
                      type="text"
                      placeholder=""
                      value={nomorSim}
                      onChange={(e)=>setNomorSim(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-4">Nomor NPWP</FormLabel>
                    <FormInput
                      id="nomorNpwp"
                      name="nomorNpwp"
                      type="text"
                      placeholder=""
                      value={nomorNpwp}
                      onChange={(e)=>setNomorNpwp(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-2">Nomor BPJS Kesehatan</FormLabel>
                    <FormInput
                      id="nomorBpjsKesehatan"
                      name="nomorBpjsKesehatan"
                      type="text"
                      placeholder=""
                      value={nomorBpjsKesehatan}
                      onChange={(e)=>setNomorBpjsKesehatan(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Nomor BPJS Ketenagakerjaan</FormLabel>
                    <FormInput
                      id="nomorBpjsKetenagakerjaan"
                      name="nomorBpjsKetenagakerjaan"
                      type="text"
                      placeholder=""
                      value={nomorBpjsKetenagaKerja}
                      onChange={(e)=>setNomorBpjsKetenagaKerja(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              : '' }
              {show === 4 ? 
              <div>
                <div className="text-base font-medium">Data Bank & Emergency</div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Nama Bank</FormLabel>
                    <FormSelect 
                      id="namaBank"
                      name="namaBank"
                      value={bankId}
                      onChange={(e)=>setBankId(e.target.value)}
                      >
                      <option></option>
                      {banks && banks.map((bank, index)=>(
                        <option key={index} value={bank.uuid}>{bank.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-2">Nomor Rekening</FormLabel>
                    <FormInput
                      id="nomorRekening"
                      name="nomorRekening"
                      type="text"
                      placeholder=""
                      value={nomorRekening}
                      onChange={(e)=>setNomorRekening(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-1">Kontak Emergency</FormLabel>
                    <FormSelect 
                      id="kontakEmergencyId"
                      name="kontakEmergencyId"
                      value={kontakEmergencyId}
                      onChange={(e)=>setKontakEmergencyId(e.target.value)}
                      >
                      <option></option>
                      {kontakEmergency && kontakEmergency.map((emergency, index)=>(
                        <option key={index} value={emergency.uuid}>{emergency.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-2">Nomor Emergency</FormLabel>
                    <FormInput
                      id="nomorEmergency"
                      name="nomorEmergency"
                      type="text"
                      placeholder=""
                      value={nomorEmergency}
                      onChange={(e)=>setNomorEmergency(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-3">
                    <FormLabel htmlFor="input-wizard-3">Alamat Emergency</FormLabel>
                    <FormInput
                      id="alamatEmergency"
                      name="alamatEmergency"
                      type="text"
                      placeholder="Jln."
                      value={alamatEmergency}
                      onChange={(e)=>setAlamatEmergency(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              : '' }
              {show === 5 ? 
              <div>
                <div className="text-base font-medium">Data Personal Perusahaan</div>
                <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">NIK</FormLabel>
                    <FormInput
                      id="nik"
                      name="nik"
                      type="text"
                      placeholder=""
                      value={nik}
                      onChange={(e)=>setNik(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">Email</FormLabel>
                    <FormInput
                      id="email"
                      name="email"
                      type="text"
                      placeholder=""
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">Password</FormLabel>
                    <FormInput
                      id="password"
                      name="password"
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">Nomor Hp</FormLabel>
                    <FormInput
                      id="nomorHp"
                      name="nomorHp"
                      type="text"
                      placeholder="089XXXXXXX"
                      value={nomorHp}
                      onChange={(e)=>setNomorHp(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-6">Group Devisi</FormLabel>
                    <FormSelect value={groupId} onChange={(e)=>setGroupId(e.target.value)} id="group" name="group">
                      <option></option>
                      {groups && groups.map((group, index)=>(
                        <option key={index} value={group.uuid}>{group.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-6">Penempatan</FormLabel>
                    <FormSelect value={penempatanId} onChange={(e)=>setPenempatanId(e.target.value)} id="penempatan" name="penempatan">
                      <option></option>
                      {penempatans && penempatans.map((penempatan, index)=>(
                        <option key={index} value={penempatan.uuid}>{penempatan.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-6">Jabatan</FormLabel>
                    <FormSelect value={jabatanId} onChange={(e)=>setJabatanId(e.target.value)} id="jabatan" name="jabatan">
                      <option></option>
                      {jabatans && jabatans.map((jabatan, index)=>(
                        <option key={index} value={jabatan.uuid}>{jabatan.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-6">Atasan</FormLabel>
                    <FormSelect value={atasanId} onChange={(e)=>setAtasanId(e.target.value)} id="atasan" name="atasan">
                      <option></option>
                      {atasans && atasans.map((atasan, index)=>(
                        <option key={index} value={atasan.uuid}>{atasan.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">Absen ID</FormLabel>
                    <FormInput
                      id="absenId"
                      name="absenId"
                      type="text"
                      placeholder=""
                      value={absenId}
                      onChange={(e)=>setAbsenId(e.target.value)}
                    />
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-6">Jam Operasional</FormLabel>
                    <FormSelect value={jamOperasionalId} onChange={(e)=>setJamOperasionalId(e.target.value)} id="jamOperasional" name="jamOperasional">
                      <option></option>
                      {jamOperasionals && jamOperasionals.map((jamOperasional, index)=>(
                        <option key={index} value={jamOperasional.uuid}>{jamOperasional.name}</option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="col-span-12 intro-y sm:col-span-2">
                    <FormLabel htmlFor="input-wizard-2">Extention</FormLabel>
                    <FormInput
                      id="extention"
                      name="extention"
                      type="text"
                      placeholder=""
                      value={extention}
                      onChange={(e)=>setExtention(e.target.value)}
                    />
                  </div>
                  
                </div>
              </div>
              : '' }
              {show === 5 ? 
              <div className="flex items-center justify-center col-span-12 mt-8 mb-10 sm:mb-0 intro-y sm:justify-end">
                <Button 
                  type="submit"
                  variant="primary" 
                  className="w-fit ml-2"
                  >
                   {isLoading ? <LoadingIcon icon="ball-triangle" color="white" className="w-5 h-5" /> : 'Send Data to Registration'}
                </Button>
              </div>
              : '' }
              </form>
              <div className="flex items-center justify-center col-span-12 mt-8 mb-10 sm:mb-0 intro-y sm:justify-end">
                <Button 
                  variant="secondary" 
                  className="w-24"
                  onClick={()=>preview()}
                  >
                  Previous
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-24 ml-2"
                  onClick={()=>next()}
                  >
                  Next
                </Button>
              </div>
            </div>
          </div>
          {/* END: Wizard Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;
