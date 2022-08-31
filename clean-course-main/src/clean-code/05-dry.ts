type Size = "" | "S" | "M" | "XL";

class Product {
    /**
     *
     */
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) {}

    public isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ((<string>(<unknown>this[key])).length <= 0)
                        throw Error(`${key} is empty`);
                    break;
                case "number":
                    if (<number>(<unknown>this[key]) <= 0)
                        throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} not defined`);
            }
        }
        return true;
    }

    public toString() {
        //No DRY
        // if (this.name.length <= 0) throw Error("Name is empty");
        // if (this.price <= 0) throw Error("price is zero");
        // if (this.size.length <= 0) throw Error("Size is empty");

        if (!this.isProductReady()) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants: Product = new Product("Blue large pants", 12000, "M");
    console.log(bluePants.toString());
})();
