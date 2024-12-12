namespace Heranca {
    class Animal {    
        constructor(private nome: string) {}
        
        mover(distanciaEmMetros: number = 0) {
            console.log(`${this.nome} se moveu ${distanciaEmMetros}m.`);
        }
    }
    
    class Mamifero extends Animal {
        constructor(nome: string) {
            super(nome);
        }
        
        mamar() {
            console.log('Mamando...');
        }
    }
    
    class Cachorro extends Mamifero {
        latir() {
            console.log('Au au!');
        }
    }
    
    class Ave extends Animal {
        voar() {
            console.log('Voando...');
        }
    }
    
    class BeijaFlor extends Ave {
        flutuar() {
            console.log('flutuando no ar...');
        }
    }
    
    const rex = new Cachorro("Rex");
    rex.latir();
    rex.mamar();
    rex.mover(10);
    rex.latir();    
}