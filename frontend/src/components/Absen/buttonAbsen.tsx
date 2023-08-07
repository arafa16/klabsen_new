import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../base-components/Button";

type TypeProps = {
    clickMenu: void
  }

const ButtonAbsen = (props: TypeProps) => {
    const {clickMenu} = props;
    
    return(
        <div>
            {/* BEGIN: Absen */}
            <div className="p-5 box">
                <h1>Absen</h1>
                <div className="grid grid-cols-12 mt-5">
                <Button 
                    variant="primary" 
                    size="sm" 
                    className="mr-2 shadow-md col-span-12 xl:col-span-6 2xl:col-span-6"
                    onClick={()=>clickMenu()}
                    >
                    Masuk
                </Button>
                <Button variant="primary" size="sm" className="mr-2 shadow-md col-span-12 xl:col-span-6 2xl:col-span-6 mt-4 xl:mt-0">
                    Pulang
                </Button>
                </div>
            </div>
            {/* BEGIN: Absen*/}
        </div>
    )
}

export default ButtonAbsen;