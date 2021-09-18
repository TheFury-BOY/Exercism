export default class Pangram {

    abc: string[] = "abcdefghijklmnopqrstuvwxyz".split('');

    constructor(private clause: string) {}

    isPangram(): boolean {
        return this.abc.every((letter: string) => {
                return this.clause.indexOf(letter) >= 0 || this.clause.indexOf(letter.toUpperCase()) >= 0;
            }
        );
    }
}


