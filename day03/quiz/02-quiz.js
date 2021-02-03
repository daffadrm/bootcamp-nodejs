import Peserta, {Regular} from './01-quiz.js'

function main (){
    const satu = new Peserta("Asep", "Bandung", "S1", "3.45", "Beasiswa", "NodeJs", "1", "2019", "100000", "3" );
    console.log(satu);
    const dua = new Peserta("Ami", "Bogor", "S1", "3.10", "Beasiswa", "NodeJS", "1", "2019", "100000", "3" );
    console.log(dua);
    const tiga = new Peserta("Budi", "Depok", "S1", "3.25", "Beasiswa", "Java", "2", "2020", "100000", "3" );
    console.log(tiga);
    const empat = new Peserta("Cindy", "Jakarta", "D3", "3.30", "Beasiswa", "Java", "2", "2020", "100000", "3" );
    console.log(empat);
    const lima = new Peserta("Dedy", "Bekasi", "S2", "2.98", "Beasiswa", "NodeJS", "1", "2019", "100000", "4" );
    console.log(lima);
    console.log(`Total Peserta : ${Peserta.totalPeserta}`);

    const enam = new Regular ("andi", "jakarta", "s1", "11","regular","golang", "2", "2020","20000","6");
    console.log(enam);
    const tujuh = new Regular ("andi", "jakarta", "s1", "11","regular","golang", "2", "2020","20000","6");
    console.log(tujuh);
    console.log(`Total Regular : ${Regular.totalRegular}`);
}

main()

