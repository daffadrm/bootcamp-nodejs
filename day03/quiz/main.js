import Peserta, {Regular,Beasiswa} from './test.js'
import {totalBeasiswa,totalInsentif,totalRegular,totalNetprice,totStuBootcamp} from './ApiQuiz.js'


function main (){
    const Asep = new Beasiswa ("Asep", "Bandung", "S1", "3.45", "Beasiswa", "NodeJS", "1", "2019", "3", 100000);
    console.log(Asep);
    const Ami = new Beasiswa ("Ami", "Bogor", "S1", "3.10", "Beasiswa", "NodeJS", "1", "2019", "3", 100000);
    console.log(Ami);
    const Budi = new Beasiswa ("Budi", "Depok", "S1", "3.25", "Beasiswa", "Java", "2", "2020", "3", 100000);
    console.log(Budi);
    const Cindy = new Beasiswa ("Cindy", "Jakarta", "D3", "3.30", "Beasiswa", "Java", "2", "2020", "3", 100000);
    console.log(Cindy);
    const Dedy = new Beasiswa ("Dedy", "Bekasi", "S2", "2.98", "Beasiswa", "NodeJS", "1", "2019", "3", 100000);
    console.log(Dedy);
    


    const Desta = new Regular ("Desta", "Jakarta", "S1", "3.15","Regular","Golang", "3", "2021","3",5000000 );
    console.log(Desta);
    const Shinta = new Regular ("Shinta", "Jakarta", "S1", "3.15","Regular","Golang", "3", "2021","4",5000000);
    console.log(Shinta);
    const Meita = new Regular ("Meita", "Jakarta", "S1", "3.00","Regular","Phyton", "3", "2021","4",7000000 );
    console.log(Meita);
    
    const NodeJS = totStuBootcamp("NodeJS", Asep,Ami,Budi,Cindy,Dedy,Desta,Shinta,Meita);
    const Golang = totStuBootcamp("Golang", Asep,Ami,Budi,Cindy,Dedy,Desta,Shinta,Meita);
    const Phyton = totStuBootcamp("Phyton", Asep,Ami,Budi,Cindy,Dedy,Desta,Shinta,Meita);

    console.log(`Total Peserta : ${Peserta.totalPeserta}`);
    console.log(`Total Beasiswa : ${Beasiswa.totalBeasiswa}`);
    console.log(`Total Regular : ${Regular.totalRegular}`);

    console.log(`Total Intensif : ${Beasiswa.totalInsentif}`);
    console.log(`Total Net Price : ${Regular.totalNetprice}`);

    console.log("NodeJS : "+NodeJS);
    console.log("Golang : "+Golang);
    console.log("Phyton : "+Phyton);
}

main()

