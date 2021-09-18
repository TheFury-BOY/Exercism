import {exists} from "fs";

class Transcriptor {
  toRna(dnaChain: string): string {
    const arr: string[] = dnaChain.split(''), results: string[] = [];
    arr.forEach((dna: string) => results.push(this.convertToRna(dna)));
    if (results.find(rna => rna === 'X')) {
      throw new Error('Invalid input DNA.');
    }

   return results.join('');
  }

  convertToRna(dnaElement: string): string {
    const correspondence: { [key: string]: string } = {
      'G' : 'C',
      'C' : 'G',
      'T' : 'A',
      'A' : 'U',
    }
    if (correspondence[dnaElement] != undefined) {
      return correspondence[dnaElement];
    } else {
      return 'X';
    }
  }
}


export default Transcriptor
