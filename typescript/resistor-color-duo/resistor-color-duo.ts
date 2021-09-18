export class ResistorColor {
    private readonly colors: string[]

    constructor(colors: string[]) {
        if (colors.length <= 1) {
            throw new Error('At least two colors need to be present');
        }
        this.colors = colors
    }

    getColors(): string[] {
        return this.colors;
    }

    getNumber(color: string): string {
        color = color.toLowerCase();
        const map: { [key: string]: string } = {
            black: '0',
            brown: '1',
            red: '2',
            orange: '3',
            yellow: '4',
            green: '5',
            blue: '6',
            violet: '7',
            grey: '8',
            white: '9'
        };
        return map[color];
    }

    value = (): number => {
        const arr: string[] = this.getColors();

        let result: string = this.getNumber(arr[0]);
        result += this.getNumber(arr[1]);

        return parseInt(result);
    }
}
