(() => {
    //Aplicando el principio de responsabilidad unica
    //Priorizar la composición frete a la herencia

    type Gender = "M" | "F";

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        workingDirectory: String;
        lastOpenFolder: String;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        /* constructor(person: Person, user: User, settings:Settings) {
            this.person = person;
            this.user = user;
            this.settings = settings;
        } */

        constructor({
            name,
            gender,
            birthdate,
            email,
            role,
            workingDirectory,
            lastOpenFolder,
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }

    const userSettings = new Settings({
        workingDirectory: "/user/home",
        lastOpenFolder: "/home",
    });

    console.log({
        userSettings,
    });
})();
