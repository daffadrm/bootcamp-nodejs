export default class Peserta{
    static totalPeserta=0;
    constructor(name,city,education,grade,type,bootcamp,batch,year,skillpoint,insentif){
        this.name = name;
        this.city = city;
        this.ducation = education;
        this.grade = grade;
        this.type =type;
        this.bootcamp = bootcamp;
        this.batch = batch;
        this.year = year;
        this.insentif = insentif;
        this.skillpoint = skillpoint;
        Peserta.totalPeserta++;
    }
    sayHi(say){
        return "car"+say;
    }

}

class Regular extends Peserta{
    constructor(name,city,education,grade,type,bootcamp,batch,year,skillpoint,netprice){
        super(name,city,education,grade,type,bootcamp,batch,year,skillpoint);
        // this.name = name;
        // this.city = city;
        // this.education = education;
        // this.grade = grade;
        // this.type =type;
        // this.bootcamp = bootcamp;
        // this.batch = batch;
        // this.year = year;
        // this.skillpoint = skillpoint;
        this.netprice = netprice;
        Regular.totalRegular++;

    }
    seat(count){
        return count
    }
}
export{Regular}