namespace Abstracao {
    export interface Animal {
        mover(): void;
        comer(): void;
    }
    
    export class Peixes implements Animal {
        mover(): void {
            console.log('Nadando');
        }
    
        comer(): void {
            console.log('Comendo');
        }
    }
    
    export class Mamiferos implements Animal {
        mover(): void {
            console.log('Andando');
        }
    
        comer(): void {
            console.log('Comendo');
        }
    }
    
    export class Aves implements Animal {
        mover(): void {
            console.log('Voando');
        }
    
        comer(): void {
            console.log('Comendo');
        }
    }
    
    export class Repteis implements Animal {
        mover(): void {
            console.log('Rastejando');
        }
    
        comer(): void {
            console.log('Comendo');
        }
    }
    
    export class Anfibios implements Animal {
        mover(): void {
            console.log('Pulando');
        }
    
        comer(): void {
            console.log('Comendo');
        }
    }
}