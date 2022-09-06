export abstract class Vehicle {
    /*
    Opcion 1 
    getNumberOfSeats(): number {
        throw Error("Method not implemented");
    } */

    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

//Al crear un nuevo auto se viola open and close y liskov

export class Volvo extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}
