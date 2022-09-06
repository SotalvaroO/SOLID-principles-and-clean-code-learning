(() => {
    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = "input" | "select" | "textarea" | "radio";

    class HtmlElement {
        constructor(public id: string, public type: HtmlType) {}
    }

    class InputAttributes {
        constructor(public value: string, public placeholder: string) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {}
        getValue() {}
        isActive() {}
        removeValue() {}
    }

    //? Idea para la nueva clase InputElement
    interface InputElementsProps {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }

    class InputElements {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({ id, type, value, placeholder }: InputElementsProps) {
            this.htmlElement = new HtmlElement(id, type);
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElements({
        value: "Fernando",
        placeholder: "Enter first name",
        id: "txtName",
        type: "input",
    });

    console.log({ nameField });
})();
