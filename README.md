# OOP: Object-oriented programming

## O que é programação orientada a objetos?

Para entendermos exatamente do que se trata a orientação a objetos, vamos entender quais são os requerimentos de uma linguagem para ser considerada nesse paradigma. Para isso, a linguagem precisa atender a quatro pilares bastante importantes: Herança, encapsulamento, polimorfismo, abstração.

Esse novo paradigma se baseia principalmente em dois conceitos chave: classes e objetos. Todos os outros conceitos, igualmente importantes, são construídos em cima desses dois.

### Herança
O reuso de código é uma das grandes vantagens da programação orientada a objetos. Muito disso se dá por uma questão que é conhecida como herança. Essa característica otimiza a produção da aplicação em tempo e linhas de código.

Para entender essa característica, vamos imaginar a classificação dos animais, todos somos animais, homens e mulheres, cachorro, aves… 
Para melhor compreensão e separação o homem criou a classificação desses animais, por exemplo: animal é como se fosse o objeto do nosso paradigma, foram criadas classes para esses animais, por exemplo: peixes, anfíbios, répteis, aves e mamíferos, todos eles herdam de animal, poderia continuar a classificação como o Filo, a ordem, familia… 

Dependendo da linguagem de programação podemos ter múltiplas heranças ou heranças aninhadas, como é o caso da nossa imagem.

Cachorro e homem herdam da mesma classe, mamíferos.
Vamos ver isso na prática.

### Encapsulamento
O encapsulamento é uma das principais técnicas que define a programação orientada a objetos. Se trata de um dos elementos que adicionam segurança à aplicação em uma programação orientada a objetos pelo fato de esconder as propriedades, criando uma espécie de caixa preta.

A maior parte das linguagens orientadas a objetos implementam o encapsulamento baseado em propriedades privadas, ligadas a métodos especiais chamados getters e setters, que irão retornar e setar o valor da propriedade, respectivamente. Essa atitude evita o acesso direto a propriedade do objeto, adicionando uma outra camada de segurança à aplicação.

Para fazermos um paralelo com o que vemos no mundo real, temos o encapsulamento em outros elementos. Por exemplo, quando clicamos no botão ligar da televisão, não sabemos o que está acontecendo internamente. Podemos então dizer que os métodos que ligam a televisão estão encapsulados.


### Abstração
A abstração consiste em um dos pontos mais importantes dentro de qualquer linguagem Orientada a Objetos. Como estamos lidando com uma representação de um objeto real (o que dá nome ao paradigma), temos que imaginar o que esse objeto irá realizar dentro de nosso sistema. São três pontos que devem ser levados em consideração nessa abstração.

O primeiro ponto é darmos uma identidade ao objeto que iremos criar. Essa identidade deve ser única dentro do sistema para que não haja conflito. Na maior parte das linguagens, há o conceito de pacotes (ou namespaces). Nessas linguagens, a identidade do objeto não pode ser repetida dentro do pacote, e não necessariamente no sistema inteiro.

A segunda parte diz respeito a características do objeto. Como sabemos, no mundo real qualquer objeto possui elementos que o definem. Dentro da programação orientada a objetos, essas características são nomeadas propriedades. Por exemplo, as propriedades de um objeto “Cachorro” poderiam ser “Tamanho”, “Raça” e “Idade”.

Por fim, a terceira parte é definirmos as ações que o objeto irá executar. Essas ações, ou eventos, são chamados métodos. Esses métodos podem ser extremamente variáveis, desde “Acender()” em um objeto lâmpada até “Latir()” em um objeto cachorro.


### Polimorfismo
O que é polimorfismo?
Para começar, a definição do Google para polimorfismo é "a condição de ocorrer em várias formas diferentes". Então, como isso se relaciona com POO? Bem, é a capacidade de classes ou objetos específicos serem referenciados em seu sentido mais geral, para então executar uma ação compartilhada entre vários subtipos.

Esclarecimento rápido
Entendendo o que já sabemos quando se trata de herança, sabemos que subclasses estendem classes base, o que significa que elas herdam tudo de sua base, desde que não seja privado, e classes herdadas podem fornecer sua própria implementação mais concreta do que a de sua classe base. Mas há mais uma ideia importante para discutir quando se trata de herança, e é a habilidade especial que as subclasses têm de ser referenciadas pela própria subclasse ou por sua classe base que ela herda.


## Para iniciar

Instale as dependências
```bash
npm install
```

## Execute
Execute os arquivos individualmente para verificar a saída no console

```bash
npx tsx src/polimorfismo.ts
```