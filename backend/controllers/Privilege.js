import Privilege from "../models/PrivilegeModal.js";

export const getPrivileges = async(req, res) => {
    try {
        const response = await Privilege.findAll();

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const getPrivilegeById = async(req, res) => {
    try {
        const response = await Privilege.findOne({
            where:{
                uuid:req.params.id
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const createPrivilege = async(req, res) => {
    const {
        userId, 
        dashboard, 
        editUserSub, 
        absen, 
        kalendarSub, 
        pengajuanKoreksiSub, 
        approvalKoreksiSub,
        absenModal,
        wfhModal,
        shiftModal,
        slipGaji,
        pendapatanSub,
        pendapatanLainSub,
        pendapatanAdminSub,
        admin,
        userSub,
        eventSub,
        koreksiAdminSub,
        perhitunganNilaiSub,
        etiket,
        pengajuanKendalaSub,
        setting} = req.body;

    try {
        await Privilege.create({
            userId:userId, 
            dashboard:dashboard, 
            editUserSub:editUserSub, 
            absen:absen, 
            kalendarSub:kalendarSub, 
            pengajuanKoreksiSub:pengajuanKoreksiSub, 
            approvalKoreksiSub:approvalKoreksiSub,
            absenModal:absenModal,
            wfhModal:wfhModal,
            shiftModal:shiftModal,
            slipGaji:slipGaji,
            pendapatanSub:pendapatanSub,
            pendapatanLainSub:pendapatanLainSub,
            pendapatanAdminSub:pendapatanAdminSub,
            admin:admin,
            userSub:userSub,
            eventSub:eventSub,
            koreksiAdminSub:koreksiAdminSub,
            perhitunganNilaiSub:perhitunganNilaiSub,
            etiket:etiket,
            pengajuanKendalaSub:pengajuanKendalaSub,
            setting:setting
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updatePrivilege = async(req, res) => {
    const {
        userId, 
        dashboard, 
        editUserSub, 
        absen, 
        kalendarSub, 
        pengajuanKoreksiSub, 
        approvalKoreksiSub,
        absenModal,
        wfhModal,
        shiftModal,
        slipGaji,
        pendapatanSub,
        pendapatanLainSub,
        pendapatanAdminSub,
        admin,
        userSub,
        eventSub,
        koreksiAdminSub,
        perhitunganNilaiSub,
        etiket,
        pengajuanKendalaSub,
        setting} = req.body;
    
    const findPrivilege = await Privilege.findOne({
        where:{
            uuid:req.params.id
        }
    });
    
    if(!findPrivilege) return res.status(404).json({msg: "privilege not found"});
    
    try {
        findPrivilege.update({
            userId:userId, 
            dashboard:dashboard, 
            editUserSub:editUserSub, 
            absen:absen, 
            kalendarSub:kalendarSub, 
            pengajuanKoreksiSub:pengajuanKoreksiSub, 
            approvalKoreksiSub:approvalKoreksiSub,
            absenModal:absenModal,
            wfhModal:wfhModal,
            shiftModal:shiftModal,
            slipGaji:slipGaji,
            pendapatanSub:pendapatanSub,
            pendapatanLainSub:pendapatanLainSub,
            pendapatanAdminSub:pendapatanAdminSub,
            admin:admin,
            userSub:userSub,
            eventSub:eventSub,
            koreksiAdminSub:koreksiAdminSub,
            perhitunganNilaiSub:perhitunganNilaiSub,
            etiket:etiket,
            pengajuanKendalaSub:pengajuanKendalaSub,
            setting:setting
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deletePrivilege = async(req, res) => {
    try {
        await Privilege.destroy({
            where:{
                uuid:req.params.id
            }
        });

        return res.status(200).json({msg: "delete success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}