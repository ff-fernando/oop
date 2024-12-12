namespace Encapsulamento {
    class Animal {
        private nome: string;
        private classe: string;

        constructor(nome: string, classe: string) {
            this.nome = nome;
            this.classe = classe;
        }

        public getNome(): string {
            return this.nome;
        }

        public setNome(nome: string): void {
            this.nome = nome;
        }

        public getClasse(): string {
            return this.classe;
        }

        public setClasse(classe: string): void {
            this.classe = classe;
        }
    }

    const animal = new Animal('Rex', 'Cachorro');
}