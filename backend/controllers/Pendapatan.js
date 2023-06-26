import Pendapatan from "../models/PendapatanModal.js";

export const getPendapatan = async(req, res) => {
    try {
        const response = await Pendapatan.findAll();

        return res.status(200).json(response);
    } catch (error) {
        return req.status(500).json({msg: error.message})
    }
}

export const getPendapatanById = async(req, res) => {
    try {
        const response = await Pendapatan.findOne({
            uuid:req.params.id
        });

        return res.status(200).json(response);
    } catch (error) {
        return req.status(500).json({msg: error.message})
    }
}

export const createPendapatan = async(req, res) => {
    const {
        tipePendapatanId, 
        userId, 
        pendapatanAtas, 
        periode, 
        basicSalary, 
        kjk, 
        tunjanganJabatan,
        incentive,
        rapel,
        adjustment,
        overtimeAllowance,
        tax,
        overtimeFee1,
        overtimeFee2,
        tunjanganJht,
        tunjanganPensiun,
        tunjanganJkk,
        tunjanganJkm,
        tunjanganBpjs,
        zakat,
        iuranKoperasi,
        angsuranKoperasi,
        pinalti,
        potonganPinjaman,
        potonganJht,
        potonganBpjs,
        potonganPensiun,
        adjustmentMinus,
        potonganAnggota,
        thr,
        shu,
        bonus,
        kompensasi,
        pph21,
        potonganPph21,
        total
    } = req.body;

    try {
        await Pendapatan.create({
            tipePendapatanId:tipePendapatanId, 
            userId:userId, 
            pendapatanAtas:pendapatanAtas, 
            periode:periode, 
            basicSalary:basicSalary, 
            kjk:kjk, 
            tunjanganJabatan:tunjanganJabatan,
            incentive:incentive,
            rapel:rapel,
            adjustment:adjustment,
            overtimeAllowance:overtimeAllowance,
            tax:tax,
            overtimeFee1:overtimeFee1,
            overtimeFee2:overtimeFee2,
            tunjanganJht:tunjanganJht,
            tunjanganPensiun:tunjanganPensiun,
            tunjanganJkk:tunjanganJkk,
            tunjanganJkm:tunjanganJkm,
            tunjanganBpjs:tunjanganBpjs,
            zakat:zakat,
            iuranKoperasi:iuranKoperasi,
            angsuranKoperasi:angsuranKoperasi,
            pinalti:pinalti,
            potonganPinjaman:potonganPinjaman,
            potonganJht:potonganJht,
            potonganBpjs:potonganBpjs,
            potonganPensiun:potonganPensiun,
            adjustmentMinus:adjustmentMinus,
            potonganAnggota:potonganAnggota,
            thr:thr,
            shu:shu,
            bonus:bonus,
            kompensasi:kompensasi,
            pph21:pph21,
            potonganPph21:potonganPph21,
            total:total
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const updatePendapatan = async(req, res) => {
    const {
        tipePendapatanId, 
        userId, 
        pendapatanAtas, 
        periode, 
        basicSalary, 
        kjk, 
        tunjanganJabatan,
        incentive,
        rapel,
        adjustment,
        overtimeAllowance,
        tax,
        overtimeFee1,
        overtimeFee2,
        tunjanganJht,
        tunjanganPensiun,
        tunjanganJkk,
        tunjanganJkm,
        tunjanganBpjs,
        zakat,
        iuranKoperasi,
        angsuranKoperasi,
        pinalti,
        potonganPinjaman,
        potonganJht,
        potonganBpjs,
        potonganPensiun,
        adjustmentMinus,
        potonganAnggota,
        thr,
        shu,
        bonus,
        kompensasi,
        pph21,
        potonganPph21,
        total
    } = req.body;

    const findPendapatan = await Pendapatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPendapatan) return res.status(404).json({msg: "not found"});

    try {
        findPendapatan.update({
            tipePendapatanId:tipePendapatanId, 
            userId:userId, 
            pendapatanAtas:pendapatanAtas, 
            periode:periode, 
            basicSalary:basicSalary, 
            kjk:kjk, 
            tunjanganJabatan:tunjanganJabatan,
            incentive:incentive,
            rapel:rapel,
            adjustment:adjustment,
            overtimeAllowance:overtimeAllowance,
            tax:tax,
            overtimeFee1:overtimeFee1,
            overtimeFee2:overtimeFee2,
            tunjanganJht:tunjanganJht,
            tunjanganPensiun:tunjanganPensiun,
            tunjanganJkk:tunjanganJkk,
            tunjanganJkm:tunjanganJkm,
            tunjanganBpjs:tunjanganBpjs,
            zakat:zakat,
            iuranKoperasi:iuranKoperasi,
            angsuranKoperasi:angsuranKoperasi,
            pinalti:pinalti,
            potonganPinjaman:potonganPinjaman,
            potonganJht:potonganJht,
            potonganBpjs:potonganBpjs,
            potonganPensiun:potonganPensiun,
            adjustmentMinus:adjustmentMinus,
            potonganAnggota:potonganAnggota,
            thr:thr,
            shu:shu,
            bonus:bonus,
            kompensasi:kompensasi,
            pph21:pph21,
            potonganPph21:potonganPph21,
            total:total
        });

        return res.status(201).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const deletePendapatan = async(req, res) => {
    const findPendapatan = await Pendapatan.findOne({
        where:{
            uuid:req.params.id
        }
    });

    if(!findPendapatan) return res.status(404).json({msg: "not found"});

    try {
        findPendapatan.destroy();

        return res.status(200).json({msg: "success"});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}