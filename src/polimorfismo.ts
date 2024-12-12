namespace Polimorfismo {
    abstract class Animal {
        private _nome: string;
    
        constructor(nome: string) {
            this._nome = nome;
        }
        
        public abstract emitirSom(): void;
        public tipoSom(): void {
            console.log('Som do animal');
        }
    }
    
    class Cachorro extends Animal {
        public emitirSom(): void {
            console.log('Au au');
        }
    
        public tipoSom(): void {
            console.log('Latido');
        }
    }
    
    class Gato extends Animal {
        public emitirSom(): void {
            console.log('Miau');
        }
    
        public tipoSom(): void {
            console.log('Miado');
        }
    }
    
    
    class Passaro extends Animal {
        public emitirSom(): void {
            console.log('Piu piu');
        }
    }
    
    const cachorro = new Cachorro('Rex');
    const gato = new Gato('Mingau');
    const passaro = new Passaro('Piu');
    
    cachorro.emitirSom();
    cachorro.tipoSom();
    
    gato.emitirSom();
    gato.tipoSom();
    
    passaro.emitirSom();
    passaro.tipoSom();
}