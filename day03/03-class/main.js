import Car, {Taxi,Angkot} from './car.js'
import {listCar} from './ApiCar.js'

function main (){
    const hrv = new Car("Honda",2015);
    console.log(hrv);

    const grab = new Taxi("Honda",2020,"Grab");
    console.log(grab);
    console.log(grab.totalRevenue(4000.00,2));

    const angkot = new Angkot("Depok",2020,"Sawangan")
    console.log(angkot);

    const gojek = new Taxi("Gojek");
    const bird  = new Taxi("Blue Bird");
    console.log(`Total Car : ${Car.totalCar}`);

    const cars = listCar(hrv,grab, angkot,gojek,bird);
    console.log(cars);

}

main();