import Pendapatan from "../models/PendapatanModal.js";
import xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';
import moment from 'moment';
import excelJs from 'exceljs';
import Users from "../models/UserModel.js";


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

// export const importPendapatan = async(req, res) => {
//     if(req.files === null) return res.status(401).json({msg: "No file Upload"});
    
//     const {file} = req.files;
//     const ext = path.extname(file.name);
//     const fileName = file.md5+ext;
//     const filePath = `./public/import/${fileName}`;

//     file.mv(filePath, async(err)=>{
//         if(err) return res.status(500).json({msg: err.message});
        
//         let workbook = xlsx.readFile(`./public/import/${fileName}`);
//         let worksheet = workbook.Sheets[workbook.SheetNames[0]];
//         let range = xlsx.utils.decode_range(worksheet["!ref"]);

//         for(let row = range.s.r; row <= range.e.r; row++){
//             let data = [];

//             for (let col = range.s.c; col<=range.e.c;col++){
//                 let cell = worksheet[xlsx.utils.encode_cell({r:row, c:col})]
//                 data.push(cell.v);
//             }

//             console.log(data + ' ', row);
//         }

//         fs.unlinkSync(filePath);

//         return res.status(201).json({msg: "success"});
//     });
// }

export const importPendapatan = async(req, res) =>{
    if(req.files === null) return res.status(401).json({msg: "No file Upload"});
    
    const {file} = req.files;
    const ext = path.extname(file.name);
    const fileName = file.md5+ext;
    const filePath = `./public/import/${fileName}`;

    file.mv(filePath, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        
        let workbook = xlsx.readFile(`./public/import/${fileName}`);
        let sheetNames = workbook.SheetNames[0];
        let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames]);

        try {
            for(let i = 0; i < data.length; i++){
                const user = await Users.findOne({
                    where:{
                        nik:data[i].nik
                    },
                    attributes:['id']
                });

                const date = moment(data[i].periode).format("YYYY-MM-DD");

                await Pendapatan.create({
                    tipePendapatanId:data[i].tipePendapatanId, 
                    userId:user.id, 
                    pendapatanAtas:data[i].pendapatanAtas, 
                    periode:date,
                    basicSalary:data[i].basicSalary, 
                    kjk:data[i].kjk, 
                    tunjanganJabatan:data[i].tunjanganJabatan,
                    incentive:data[i].incentive,
                    rapel:data[i].rapel,
                    adjustment:data[i].adjustment,
                    overtimeAllowance:data[i].overtimeAllowance,
                    tax:data[i].tax,
                    overtimeFee1:data[i].overtimeFee1,
                    overtimeFee2:data[i].overtimeFee2,
                    tunjanganJht:data[i].tunjanganJht,
                    tunjanganPensiun:data[i].tunjanganPensiun,
                    tunjanganJkk:data[i].tunjanganJkk,
                    tunjanganJkm:data[i].tunjanganJkm,
                    tunjanganBpjs:data[i].tunjanganBpjs,
                    zakat:data[i].zakat,
                    iuranKoperasi:data[i].iuranKoperasi,
                    angsuranKoperasi:data[i].angsuranKoperasi,
                    pinalti:data[i].pinalti,
                    potonganPinjaman:data[i].potonganPinjaman,
                    potonganJht:data[i].potonganJht,
                    potonganBpjs:data[i].potonganBpjs,
                    potonganPensiun:data[i].potonganPensiun,
                    adjustmentMinus:data[i].adjustmentMinus,
                    potonganAnggota:data[i].potonganAnggota,
                    thr:data[i].thr,
                    shu:data[i].shu,
                    bonus:data[i].bonus,
                    kompensasi:data[i].kompensasi,
                    pph21:data[i].pph21,
                    potonganPph21:data[i].potonganPph21,
                    total:data[i].total
                });
            }
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }

        fs.unlinkSync(filePath);
        
        return res.status(201).json({msg: "success"});
    });
}

export const exportPendapatan = async(req, res) => {
    try {
        let workbook = new excelJs.Workbook();

        const sheet = workbook.addWorksheet("pendapatan");

        const pendapatan = await Pendapatan.findAll({
            include:{
                model:Users,
                attributes:['nik','name']
            }
        });

        sheet.columns = [
            {header : "Tipe Pendapatan Id", key:"tipePendapatanId", width: 25},
            {header : "User Id", key:"userId", width: 25},
            {header : "Name", key:"name", width: 25},
            {header : "Pendapatan Atas", key:"pendapatanAtas", width: 25},
            {header : "Periode", key:"periode", width: 25},
            {header : "kjk", key:"kjk", width: 25},
            {header : "Tunjangan Jabatan", key:"tunjanganJabatan", width: 25},
            {header : "Incentive", key:"incentive", width: 25},
            {header : "Rapel", key:"rapel", width: 25},
            {header : "Adjustment", key:"adjustment", width: 25},
            {header : "OvertimeAllowance", key:"overtimeAllowance", width: 25},
            {header : "Tax", key:"tax", width: 25},
            {header : "Overtime Fee 1", key:"overtimeFee1", width: 25},
            {header : "Overtime Fee 2", key:"overtimeFee2", width: 25},
            {header : "Tunjangan Jht", key:"tunjanganJht", width: 25},
            {header : "Tunjangan Pensiun", key:"tunjanganPensiun", width: 25},
            {header : "Tunjangan Jkk", key:"tunjanganJkk", width: 25},
            {header : "Tunjangan Jkm", key:"tunjanganJkm", width: 25},
            {header : "Tunjangan Bpjs", key:"tunjanganBpjs", width: 25},
            {header : "Potongan Pensiun", key:"potonganPensiun", width: 25},
            {header : "Adjustment Minus", key:"adjustmentMinus", width: 25},
            {header : "Potongan Anggota", key:"potonganAnggota", width: 25},
            {header : "Thr", key:"thr", width: 25},
            {header : "Shu", key:"shu", width: 25},
            {header : "Bonus", key:"bonus", width: 25},
            {header : "Kompensasi", key:"kompensasi", width: 25},
            {header : "Pph21", key:"pph21", width: 25},
            {header : "Potongan Pph21", key:"potonganPph21", width: 25},
            {header : "Total", key:"total", width: 25}
        ];

        pendapatan.map((value, index) =>{
            sheet.addRow({
                tipePendapatanId:value.tipePendapatanId,
                userId:value.user.nik,
                name:value.user.name,
                pendapatanAtas:value.pendapatanAtas,
                periode:moment(value.periode).format("YYYY-MM"),
                basicSalary:value.basicSalary,
                kjk:value.kjk, 
                tunjanganJabatan:value.tunjanganJabatan,
                incentive:value.incentive,
                rapel:value.rapel,
                adjustment:value.adjustment,
                overtimeAllowance:value.overtimeAllowance,
                tax:value.tax,
                overtimeFee1:value.overtimeFee1,
                overtimeFee2:value.overtimeFee2,
                tunjanganJht:value.tunjanganJht,
                tunjanganPensiun:value.tunjanganPensiun,
                tunjanganJkk:value.tunjanganJkk,
                tunjanganJkm:value.tunjanganJkm,
                tunjanganBpjs:value.tunjanganBpjs,
                zakat:value.zakat,
                iuranKoperasi:value.iuranKoperasi,
                angsuranKoperasi:value.angsuranKoperasi,
                pinalti:value.pinalti,
                potonganPinjaman:value.potonganPinjaman,
                potonganJht:value.potonganJht,
                potonganBpjs:value.potonganBpjs,
                potonganPensiun:value.potonganPensiun,
                adjustmentMinus:value.adjustmentMinus,
                potonganAnggota:value.potonganAnggota,
                thr:value.thr,
                shu:value.shu,
                bonus:value.bonus,
                kompensasi:value.kompensasi,
                pph21:value.pph21,
                potonganPph21:value.potonganPph21,
                total:value.total
            });
        })

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment;filename="+"pendapatans.xlsx"
        );

        workbook.xlsx.write(res);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}