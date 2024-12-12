namespace objeto {
    export class Animal {
        constructor(public nome: string) { }

        mover(distancia: number = 0) {
            console.log(`${this.nome} moveu ${distancia}m.`);
        }
    }
}