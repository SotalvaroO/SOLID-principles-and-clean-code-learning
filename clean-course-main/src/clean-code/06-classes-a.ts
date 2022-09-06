(() => {
    type Gender = "M" | "F";

    //Forma Larga de clase

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    //Forma corta de clase

    class User {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    const newPerson = new Person("Santiago", "M", new Date("2020-01-01"));
    console.log(newPerson);
})();
