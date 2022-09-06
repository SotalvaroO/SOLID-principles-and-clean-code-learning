(() => {
    interface Bird {
        eat(): void;
        run(): void;
    }

    /* Primera segregacion */
    interface FlyingBird {
        fly(): void;
    }
    /* Segunda segregacion */
    interface AquaticBird {
        swim(): void;
    }

    class Tucan implements Bird, FlyingBird {
        public fly() {}
        public eat() {}
        public run() {}
    }

    class HummingBird implements Bird, FlyingBird {
        public fly() {}
        public eat() {}
        public run() {}
    }
    /* Las Gallinas no vuelan por lo tanto le sobra el metodo fly y es una violacion a la segregacion de interfaces */
    class Hen implements Bird {
        public eat() {}
        public run() {}
    }

    class Penguin implements Bird, AquaticBird {
        public eat() {}
        public run() {}
        public swim() {}
    }
})();
