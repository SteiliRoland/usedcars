/*
* File: app.ts/js
* Author: Steili Roland
* Copyright: 2021, Steili Roland
* Group: Szoft II N
* Date: 2021-12-09
* Github: https://github.com/SteiliRoland/usedcars
* Licenc: GNU GPL
*/

var url = 'http://localhost:3000/cars';
import { Car } from './car.js';

var listCars = [];
const list = document.querySelector('#list');

fetch(url).then(response => response.json())
.then(data => {
    addCar(data);
    createList();
});

function addCar(data){
    data.forEach((cars:Car) =>{
        let car = new Car();
        car.id = cars.id;
        car.plate = cars.plate;
        car.color = cars.color;
        car.brand = cars.brand;
        car.year = cars.year;
        car.capacity = cars.capacity;
        car.fuel = cars.fuel;
        car.price = cars.price;
        car.sold = cars.sold;
        listCars.push(car);
        console.log(cars.plate);
    });
}

function createList(){
    listCars.forEach((cars:Car) =>{
        let li = document.createElement('li');
        li.innerHTML = cars.plate;
        li.setAttribute('class', 'list-group-item');
        list.append(li);
    });
}