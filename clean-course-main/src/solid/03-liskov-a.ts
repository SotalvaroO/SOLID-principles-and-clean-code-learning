import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from "./03-liskov-b";

(() => {
    //No hay condicion para volvo, entonces toca modificar el codigo, lo cual es ocp violation

    const printCarSeats = (cars: Vehicle[]) => {
        /* Solucion a OCP */

        cars.forEach((car) => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        });

        // for (const car of cars) {

        //     if (car instanceof Tesla) {
        //         console.log("Tesla", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Audi) {
        //         console.log("Audi", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Toyota) {
        //         console.log("Toyota", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Honda) {
        //         console.log("Honda", car.getNumberOfSeats());
        //         continue;
        //     }
        //     /* Violacion */
        //     if (car instanceof Volvo) {
        //         console.log("Volvo", car.getNumberOfSeats());
        //         continue;
        //     }

        // }
    };

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];

    /* SE SOLUCIONÓ EL PRINCIPIO DE LISKOV MEDIANTE HERENCIA */
    printCarSeats(cars);
})();
