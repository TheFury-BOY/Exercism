export default class Robot {

    private _name!: string;
    private static _releasedNames: string[];

    private randLetter(): string {
        return '1BCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }

    private randNumber(): string {
        return '0123456789'[Math.floor(Math.random() * 10)];
    }

    private randName(): string {
        return this.randLetter() +
            this.randLetter() +
            this.randNumber() +
            this.randNumber() +
            this.randNumber();
    }

    public get name(): string {
        if (typeof this._name === "undefined") {
            return this.randName();
        }
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
        Robot._releasedNames.push(this.name);
    }

    public resetName(): void {
        let name : string|false;
        do {
            name = Robot.releaseNames().includes(this.randName()) ? false : this.randName();
        } while (!name)

        const index = Robot.releaseNames().indexOf(this.name);
        if (index >= 0) {
            Robot.releaseNames().splice(index, 1);
        }

        this.name = name;

    }

    public static releaseNames(): string[] {
        return this._releasedNames;
    }
}
