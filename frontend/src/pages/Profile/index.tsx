import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../stores/features/authSlice";

//atribute
import userNotFound from "../../assets/images/user.jpeg";
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import fakerData from "../../utils/faker";
import _ from "lodash";
import preview16Url from "../../assets/images/fakers/preview-16.jpg";
import preview12Url from "../../assets/images/fakers/profile-12.jpg";
import moment from "moment";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Profile Cover */}
        <div className="col-span-12">
          <div className="px-3 pt-3 pb-5 box intro-y">
            <div className="image-fit h-80 before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/20 to-black before:rounded-md before:z-10">
              <img
                alt="Rocketman - HTML Admin Template"
                className="rounded-md md:object-[0px_-170px]"
                src={preview16Url}
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center 2xl:flex-row 2xl:text-left">
              <div className="z-20 -mt-20 2xl:-mt-10 2xl:ml-10">
                <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
                  <img
                    alt={userNotFound}
                    src={user && user.url || userNotFound}
                  />
                </div>
              </div>
              <div className="2xl:ml-5">
                <h2 className="mt-5 text-2xl font-medium capitalize">
                  {user && user.name}
                </h2>
                <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start capitalize">
                  <Lucide icon="Briefcase" className="w-4 h-4 mr-2" />
                  {user && user.jabatan.name}
                </div>
              </div>
              <div className="grid h-20 grid-cols-2 px-10 mx-auto mt-5 mb-6 border-dashed gap-y-2 md:gap-y-0 gap-x-5 2xl:border-l 2xl:border-r border-slate-200 2xl:mb-0">
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {user && user.email}
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Smartphone" className="w-4 h-4 mr-2" />
                  {user && user.nomorHp}
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start capitalize">
                  <Lucide icon="MapPin" className="w-4 h-4 mr-2 " />
                  {user && user.penempatan.name}
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                  <Lucide icon="Phone" className="w-4 h-4 mr-2" />
                  {user && user.extention}
                </div>
              </div>
              <div className="flex mt-5 2xl:mr-10">
                <Button variant="primary" className="w-64 mr-2">
                  <Lucide icon="UserPlus" className="w-4 h-4 mr-2" /> Request Pembaharuan Data
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Cover */}
        {/* BEGIN: Profile Content */}
        <div className="col-span-12 xl:col-span-8">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Data Pribadi</div>
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Tempat Lahir</div>
                  <div className="mt-1 text-slate-500">{user && user.tempatLahir}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Tanggal Lahir</div>
                  <div className="mt-1 text-slate-500">{moment(user && user.tanggalLahir).format("YYYY-MM-DD") }</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Jenis Kelamin</div>
                  <div className="mt-1 text-slate-500">{user && user.gander.name}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Status Perkawinan</div>
                  <div className="mt-1 text-slate-500">
                    {user && user.status_perkawinan.name}
                  </div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Jumlah Anak</div>
                  <div className="mt-1 text-slate-500">{user && user.jumlahAnak}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nama Ibu</div>
                  <div className="mt-1 text-slate-500">{user && user.namaIbu}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Data Administratif</div>
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor KTP</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorKtp}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Alamat KTP</div>
                  <div className="mt-1 text-slate-500">{user && user.alamatKtp}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Alamat Domisili</div>
                  <div className="mt-1 text-slate-500">{user && user.alamatDomisili}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor SIM</div>
                  <div className="mt-1 text-slate-500">
                    {user && user.nomorSim}
                  </div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor NPWP</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorNpwp}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor BPJS Kesehatan</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorBpjsKesehatan}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor BPJS Ketenagakerjaan</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorBpjsKetenagaKerja}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Data Emergency</div>
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Kontak Emergency</div>
                  <div className="mt-1 text-slate-500">{user && user.kontak_emergency.name}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor Emergency</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorEmergency}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Alamat Emergency</div>
                  <div className="mt-1 text-slate-500">{user && user.alamatEmergency}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 mt-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Data Perusahaan</div>
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Group Devisi</div>
                  <div className="mt-1 text-slate-500">{user && user.group.name}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Atasan</div>
                  <div className="mt-1 text-slate-500">{user && user.atasanId}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Absen ID</div>
                  <div className="mt-1 text-slate-500">{user && user.absenId}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-6 2xl:col-span-4">
                <div className="ml-5">
                  <div className="text-base font-medium">Jam Operasional</div>
                  <div className="mt-1 text-slate-500">{user && user.jam_operasional.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Content */}
        {/* BEGIN: Profile Side Menu */}
        <div className="col-span-12 xl:col-span-4">
          <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Education</div>
            </div>
            <div>
              <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                  <Lucide icon="Home" className="text-slate-500" />
                </div>
                <div className="ml-5">
                  <div className="font-medium">
                    {user && user.namaSekolah} ({user && user.tahunLulus})
                  </div>
                  <div className="mt-1 text-slate-500">
                    {user && user.jurusanSekolah} ({user && user.ipk})
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 box intro-y mt-5">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="text-base font-medium truncate">Data Bank</div>
            </div>
            <div className="grid grid-cols-12 gap-y-7">
              <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                <div className="ml-5">
                  <div className="text-base font-medium">Nama Bank</div>
                  <div className="mt-1 text-slate-500">{user && user.bank.name}</div>
                </div>
              </div>
              <div className="flex col-span-12 sm:col-span-12 2xl:col-span-6">
                <div className="ml-5">
                  <div className="text-base font-medium">Nomor Rekening</div>
                  <div className="mt-1 text-slate-500">{user && user.nomorRekening}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Profile Side Menu */}
      </div>
    </>
  );
}

export default Main;
