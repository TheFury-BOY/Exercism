class Matrix {
  public rows: number[][]
  public columns: number[][]

  constructor( matrixStr: string ) {
    // Split string and parseInt to create right rows array
    this.rows = matrixStr
        .split("\n")
        .map(r => r.split(" ").map(n => parseInt(n)));

    // _ ignore parameter
    // re-organize row in column
    this.columns = this.rows[0].map((_, index) => {
      return this.rows.map(row => row[index])
    })
  }
}

export default Matrix
