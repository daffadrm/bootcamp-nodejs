export const totalPeserta = (...listPes) => {
    return listPes;
}

export const totalBeasiswa = (...listBea) => {
    return listBea;
}

export const totalRegular = (...listReg) => {
    return listReg;
}

export const totalInsentif = (...listInt) => {
        return listInt;
}

export const totalNetprice = (...listNet) =>{
    return listNet;
}
    
export const totStuBootcamp = (bootcamp,...list) =>{
    let count =0;
    for (const i of list) {
        if(i.bootcamp === bootcamp){
            count ++;
        }
    }
    return count;
}