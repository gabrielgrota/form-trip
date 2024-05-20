## ideas
idea to trip 018 project

~~colocar dados do airport no array
chamar o array no select option
mostrar bandeira, nome da cidade~~

~~multicity? yes entao:
criar/abrir/mostrar no html outro select para selecionar a cidade~~

~~mostrar data de hoje e horario~~

mudar as datas/calendarios, 
colocar valor da data de hoje no input do calendario
clicar no save: . addEventListener? onClick


escrever no html informações do voo
excluir select, type route, date
escrever o tipo de rota e dias selecionados

> salvar as informaçoes em variaveis para poder escrever no html


```js
Your trip info:
You choose a ${roundtrip or multicity} International Trip,
you will go to countries, respectively, ${1st country} and ${2nd country}

(if multicity selected)
you will go to countries, respectively, ${1st country}, ${2nd country} and ${3rd country}

Departure date from your local, time
Departure date from your 1st country, time

(if multicity selected)
Departure date from your 2nd country, time
```

~~conseguir renomear o nome da trip "Trip 018"~~



hospedar no github pages

ver se consigo fazer tradução, cliente escolher idioma desejado no começo [link](https://www.youtube.com/watch?v=j_VJQYpbP34)

~~eu tenho vários objects com uma propriedade, exemplo: bra={city: "SP"}, e quero escrever o valor de city em um <option> no html, mas de uma forma que todas as outras propriedades com valores diferentes tb apareçam como opções no select.~~

~~colocar as opções do select somente escrevendo no html pelo javascript~~

~~separar scripts?
1 - objetos com as informações
2 - código e functions~~

~~automatizar processo de adicionar país.
colocando os options com o valor do array (country) + o nome da cidade.
ficará automatico quando adicionar.
provavelmente um for loop
for (let i = 0; i < countries.length; i++){}~~

~~ver switch no lugar da function, conseguir uma função só para todos os select~~

~~O readme podia ter uma parte em inglês também~~

~~Sobraram umas palavras / comentários em português tipo flecha~~

~~"var" praticamente não se usa mais no javascript, ou é let ou const~~

~~seu código em javascript se repete muito, acho que daria pra refatorá-lo,
por exemplo seu arquivo countries.js podia ser uma variável só que conteria uma lista de objetos com
country, flag, airportCode, airportName, cityassim você não precisaria de 3 function update, além de reduzir o switch case a um filter~~

No mais, recomendo você utilizar o Github Pages para hospedar o projeto,
assim voce envia um link do projeto funcionando

criar api?

~~colocar para display tela celular~~
media query, deixar o site com tamanho para celular
[link para o vídeo](https://www.youtube.com/watch?v=jEf_zX4fKqU)

local:
background-image:
image from city of the country
unsplash api
[link unsplash](https://unsplash.com/developers)
[link youtube search](https://www.youtube.com/results?search_query=how+to+use+unsplash+image+api+in+html)

ida e volta
somente ida

De onde você está saindo? origem
Para onde você vai? destiny

escolha as datas

quantos passageiros

pesquisar city no array
[link 1](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
[link 2](https://cursos.alura.com.br/forum/topico-pesquisar-valor-digitado-no-input-em-um-array-113917)

### diary
 Projeto de site de planejamento de voô.

**19/01/2023**

Estudei e coloquei em prática:

Interações com <select><option>Select e opção</option></select>

escolhendo a cidade e país que está partindo e deseja chegar.

Criei as informações do aeroporto de cada país usando Objects `let bra = {code: 'BRA', city: 'São Paulo, Brazil}` e pra escrever no HTML usei o document.getElementById + ("id no html") + innerHTML + o nome do object + a propriedade do object.

Exemplo:

document.getElementById("BRA").innerHTML = `<img src='${bra.image}'> <h3>${bra.code}</h3> <p>${bra.airport}</p> <p>${bra.city}</p>`;

**26/01/2023**

Estudei a parte de function e switch, antes estava usando o if else mas o código parecia ficar muito bagunçado.

A função atualiza o valor escolhido pelo select e o **switch**, que está dentro dessa mesma função (pois o valor pode ser atualizado a qualquer momento pelo onchange() no html), procura qual é o valor em cada case. Quando ele acha o valor, escreve no id com innerHTML e logo dá um break; que faz com que o switch pare de procurar.

Achei bem mais funcional do que o if else para o que eu precisava.

**27/01/2023**

Pedi um feedback pra um cara do discord que está no servidor da Rafa Ballerini, ele me ajudou com algumas dicas, e uma delas foi substituir o switch case por um filter(). Estou pesquisando e estudando como colocar em prática no meu código e deixá-lo mais limpo. Bom que aprendo um método novo que ainda não tinha ouvido falar.

**28/01/2023**

Troquei o switch case para .filter(), deixando apenas uma função e o código mais limpo.
Logo fiz uma função com um for loop para as options do select, com isso consigo adicionar mais países e a cidade aparece automático no select.
ex: `for (let i = 0; i < countries.length; i++)`.

**29/01/2023**

Adicionei o dark mode. [link para referência](https://www.youtube.com/watch?app=desktop&v=BvhYm0BOLvA)

**31/01/2023**

Fiz uma limpeza no código, estava bem bagunçado e não sabia o que estava estilizando com css.
Troquei os button radio, que o user escolhe Round-trip ou Multi-city, por um button que quando clicado adiciona o span, com select e a cidade, e some após isso. A página ficou mais limpa.