export default class Peserta{
    static totalPeserta=0;
    constructor(name,city,education,grade,type,bootcamp,batch,year,skillpoint){
        this.name = name;
        this.city = city;
        this.ducation = education;
        this.grade = grade;
        this.type =type;
        this.bootcamp = bootcamp;
        this.batch = batch;
        this.year = year;
        this.skillpoint = skillpoint;
        Peserta.totalPeserta++;
    }
    sayHi(say){
        return "car"+say;
    }

}

class Beasiswa extends Peserta{
    static totalBeasiswa=0;
    static totalInsentif=0;
    constructor(name,city,education,grade,type,bootcamp,batch,year,skillpoint,insentif){
        super(name,city,education,grade,type,bootcamp,batch,year,skillpoint);
        this.insentif = insentif;
        Beasiswa.totalBeasiswa++;
        Beasiswa.totalInsentif+= insentif;

    }
    seat(count){
        return count
    }
}
class Regular extends Peserta{
    static totalRegular=0;
    static totalNetprice=0;
    constructor(name,city,education,grade,type,bootcamp,batch,year,skillpoint,netprice){
        super(name,city,education,grade,type,bootcamp,batch,year,skillpoint);
        this.netprice = netprice;
        Regular.totalRegular++;
        Regular.totalNetprice+= netprice;
    }
}

export{Regular,Beasiswa}