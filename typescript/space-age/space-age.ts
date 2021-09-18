class SpaceAge
{
    seconds: number;

    constructor(seconds: number) {
       this.seconds = seconds;
    }
    
    onEarth(): number {
        return this.round(this.seconds / 31557600);
    }

    onEarthWithoutRound(): number {
        return this.seconds / 31557600;
    }

    onMercury(): number {
        return this.round(this.onEarthWithoutRound() / 0.2408467);
    }

    onVenus(): number {
        return this.round(this.onEarthWithoutRound() / 0.61519726);
    }

    onMars(): number {
        return this.round(this.onEarthWithoutRound() / 1.8808158);
    }

    onJupiter(): number {
        return this.round(this.onEarthWithoutRound() / 11.862615);
    }
    
    onSaturn(): number {
        return this.round(this.onEarthWithoutRound() / 29.447498);
    }
    
    onUranus(): number {
        return this.round(this.onEarthWithoutRound() / 84.016846);
    }
    
    onNeptune(): number {
        return this.round(this.onEarthWithoutRound() / 164.79132);
    }

    round(result: number): number {
        return +(Math.round(Number(result + "e+2"))  + "e-2");
    }
}
export default SpaceAge;
