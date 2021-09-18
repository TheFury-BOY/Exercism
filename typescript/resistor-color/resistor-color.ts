export const COLORS: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
];

export const colorCode = (color: string): number => {
    return <number>pluck(COLORS, color);
}

function pluck(array: string[], color: string): number|undefined {
    const iterator: IterableIterator<number> = array.keys();
    for (const key of iterator) {
        if (color === array[key]) {
            return key;
        }
    }

}
