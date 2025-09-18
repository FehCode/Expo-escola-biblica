import { Course, QuestionCategory } from './types';

export const COURSES: Course[] = [
    {
        id: 'hermeneutica',
        title: 'Introdução à Hermenêutica',
        description: 'Aprenda os princípios fundamentais da interpretação bíblica para um estudo mais profundo e preciso das Escrituras.',
        lessons: [
            {
                id: 'herm-1',
                title: 'O que é Hermenêutica?',
                content: `
                    <h2>Definição e Propósito</h2>
                    <p>Hermenêutica é a ciência e a arte da interpretação. No contexto bíblico, refere-se especificamente aos princípios e métodos para interpretar corretamente as Escrituras Sagradas. O termo vem da palavra grega <em>hermēneuō</em>, que significa "interpretar" ou "explicar".</p>
                    <p>O propósito principal da hermenêutica bíblica não é descobrir significados ocultos ou criar novas doutrinas, mas sim entender a intenção original do autor humano, inspirado por Deus, para a sua audiência original. Ao fazer isso, podemos aplicar a mensagem atemporal da Bíblia de forma relevante e precisa em nossas vidas hoje.</p>
                    <h2>Por que é Importante?</h2>
                    <ul>
                        <li><strong>Evitar Erros:</strong> Uma má interpretação pode levar a heresias e práticas prejudiciais. A hermenêutica nos fornece um "guarda-corpo" para nos mantermos fiéis à verdade.</li>
                        <li><strong>Clareza Doutrinária:</strong> Ajuda a construir uma teologia sistemática sólida, baseada no que a Bíblia realmente ensina em sua totalidade.</li>
                        <li><strong>Aplicação Correta:</strong> Somente quando entendemos o significado original podemos aplicar a Palavra de Deus de forma correta e transformadora em nosso contexto.</li>
                        <li><strong>Crescimento Pessoal:</strong> Um bom entendimento da Bíblia alimenta a alma, fortalece a fé e guia a conduta cristã de maneira autêntica.</li>
                    </ul>
                `
            },
            {
                id: 'herm-2',
                title: 'A Ponte Histórico-Cultural',
                content: `
                    <h2>O Desafio da Distância</h2>
                    <p>Estamos separados dos autores e da audiência originais da Bíblia por milhares de anos, por vastas diferenças geográficas e, mais importante, por um abismo cultural, linguístico e histórico. A hermenêutica nos ajuda a construir uma "ponte" sobre esse abismo.</p>
                    <p>Ignorar esse contexto é um dos maiores erros na interpretação. Tentamos ler a Bíblia como se ela tivesse sido escrita ontem, para nós, em nossa cultura. Isso é chamado de <em>anacronismo</em>. Precisamos fazer o trabalho de "viajar no tempo" para entender o mundo dos autores bíblicos.</p>
                    <h2>Elementos a Considerar:</h2>
                    <ul>
                        <li><strong>Contexto Histórico:</strong> Qual era a situação política, social e religiosa da época? Quem estava no poder? Que eventos importantes estavam acontecendo? Por exemplo, entender o exílio babilônico é crucial para ler os profetas.</li>
                        <li><strong>Contexto Cultural:</strong> Quais eram os costumes, valores e práticas sociais da audiência original? Questões como honra e vergonha, família e casamento eram vistas de maneira muito diferente.</li>
                        <li><strong>Contexto Geográfico:</strong> Onde os eventos ocorreram? A geografia da Palestina influencia muitas narrativas e metáforas, como a importância da água e do deserto.</li>
                        <li><strong>Linguagem:</strong> A Bíblia foi escrita em hebraico, aramaico e grego. Cada língua tem suas próprias nuances, expressões idiomáticas e estruturas que não se traduzem perfeitamente.</li>
                    </ul>
                    <p>Estudar esses elementos não diminui a inspiração divina; pelo contrário, nos ajuda a apreciar a profundidade com que Deus se comunicou dentro de contextos humanos reais.</p>
                `
            },
            {
                id: 'herm-3',
                title: 'Princípio: Contexto é Rei',
                content: `
                    <h2>A Regra de Ouro da Interpretação</h2>
                    <p>Se houvesse apenas uma regra na hermenêutica, seria esta: <strong>o contexto determina o significado</strong>. Um texto fora de contexto é um pretexto para provar qualquer coisa. Nunca devemos isolar um versículo de seu ambiente.</p>
                    <p>Existem círculos de contexto que devemos analisar, do mais próximo ao mais distante:</p>
                    <ul>
                        <li><strong>Contexto Imediato:</strong> Os versículos que vêm imediatamente antes e depois da passagem que você está estudando. Qual é o fluxo do argumento? Qual é a conjunção que inicia a frase (ex: "Portanto...")?</li>
                        <li><strong>Contexto do Livro:</strong> Como essa passagem se encaixa no livro como um todo? Qual é o propósito do autor ao escrever este livro? Qual é a sua estrutura?</li>
                        <li><strong>Contexto do Testamento:</strong> Como a passagem se relaciona com os temas e a teologia do Antigo ou do Novo Testamento? Por exemplo, como uma lei do AT se relaciona com a Nova Aliança em Cristo?</li>
                        <li><strong>Contexto Bíblico (Cânon):</strong> Como essa passagem se encaixa na grande história da redenção que a Bíblia conta do Gênesis ao Apocalipse? A Bíblia interpreta a própria Bíblia.</li>
                    </ul>
                    <p>Sempre comece pelo contexto imediato e vá se expandindo. Pergunte: "Por que o autor disse isso, aqui, desta forma?". Ignorar o contexto é a rota mais rápida para a má interpretação.</p>
                `
            },
            {
                id: 'herm-4',
                title: 'Exegese vs. Eisegese',
                type: 'lesson',
                content: `
                    <h2>Lendo o Texto vs. Lendo no Texto</h2>
                    <p>No coração da boa hermenêutica estão dois termos opostos: Exegese e Eisegese. Entender a diferença é fundamental para uma interpretação fiel.</p>
                    <ul>
                        <li><strong>Exegese:</strong> Vem do grego, significando "tirar para fora". É o processo de examinar cuidadosamente o texto para descobrir o significado que o autor original pretendia comunicar. É um processo de escuta. Nós deixamos o texto falar por si mesmo, mesmo que ele desafie nossas pressuposições.</li>
                        <li><strong>Eisegese:</strong> Também do grego, significando "colocar para dentro". É o oposto: quando um intérprete impõe suas próprias ideias, preconceitos ou teologias sobre o texto. Em vez de perguntar "O que o texto diz?", a eisegese pergunta "Como posso fazer o texto dizer o que eu quero?".</li>
                    </ul>
                    <h3>Como Evitar a Eisegese?</h3>
                    <p>A eisegese é um perigo constante. A melhor defesa é uma boa prática exegética:</p>
                    <ul>
                        <li><strong>Humildade:</strong> Reconheça que você pode estar errado. Esteja disposto a ter suas ideias corrigidas pela Escritura.</li>
                        <li><strong>Estudo do Contexto:</strong> A eisegese prospera quando um versículo é isolado. Sempre estude o contexto histórico, cultural e literário.</li>
                        <li><strong>Consciência das Pressuposições:</strong> Todos nós temos pressuposições. Identifique as suas e pergunte se elas estão moldando sua interpretação de forma indevida.</li>
                        <li><strong>Comunidade:</strong> Discuta suas interpretações com outros cristãos maduros. A sabedoria da comunidade histórica da igreja é uma proteção contra ideias novas e estranhas.</li>
                    </ul>
                `
            },
            {
                id: 'herm-5',
                title: 'O Papel do Espírito Santo',
                content: `
                    <h2>Iluminação Divina</h2>
                    <p>A hermenêutica não é um exercício puramente acadêmico. Enquanto a interpretação correta requer estudo e método, a aplicação transformadora da Palavra requer a obra do Espírito Santo. Chamamos isso de <strong>iluminação</strong>.</p>
                    <p>Jesus disse em João 16:13: "quando vier, porém, o Espírito da verdade, ele vos guiará a toda a verdade". O papel do Espírito não é nos dar significados novos e secretos, mas sim abrir nossos corações e mentes para entender e aplicar a verdade que já foi revelada nas Escrituras.</p>
                    <h2>O Equilíbrio Necessário</h2>
                    <ul>
                        <li><strong>Estudo sem Oração leva ao Orgulho:</strong> Podemos nos tornar fariseus modernos, conhecedores da letra, mas sem o espírito da lei.</li>
                        <li><strong>Oração sem Estudo leva ao Erro:</strong> Podemos nos tornar suscetíveis a interpretações subjetivas e emocionalistas, distantes da intenção original do texto.</li>
                    </ul>
                    <p>Portanto, a abordagem correta é a de um dependente estudioso. Oramos pedindo sabedoria, estudamos com diligência as ferramentas da hermenêutica, e confiamos que o Espírito Santo nos guiará à verdade e nos transformará por meio dela.</p>
                `
            },
            {
                id: 'herm-6',
                title: 'Figuras de Linguagem',
                content: `
                    <h2>Além do Literal</h2>
                    <p>A Bíblia é uma obra literária rica e usa uma variedade de figuras de linguagem para comunicar a verdade de forma vívida e memorável. Identificá-las é crucial para evitar interpretações literalistas absurdas.</p>
                    <h3>Figuras Comuns:</h3>
                    <ul>
                        <li><strong>Metáfora:</strong> Uma comparação direta onde algo <em>é</em> outra coisa. Ex: "Eu sou a porta" (João 10:9). Jesus não é uma porta de madeira.</li>
                        <li><strong>Símile:</strong> Uma comparação usando "como" ou "assim como". Ex: "Sede, portanto, prudentes como as serpentes" (Mateus 10:16).</li>
                        <li><strong>Personificação:</strong> Atribuir qualidades humanas a objetos inanimados. Ex: "Os rios batem palmas" (Salmo 98:8).</li>
                        <li><strong>Hipérbole:</strong> Um exagero intencional para dar ênfase. Ex: "Se o teu olho direito te faz tropeçar, arranca-o" (Mateus 5:29). Jesus não estava ordenando a automutilação.</li>
                        <li><strong>Antropomorfismo:</strong> Atribuir características humanas a Deus. Ex: "A mão do Senhor" (Êxodo 9:3). Deus é espírito e não tem um corpo físico.</li>
                    </ul>
                    <p>Reconhecer essas figuras nos impede de criar doutrinas estranhas e nos ajuda a apreciar a beleza e a arte da comunicação divina.</p>
                `
            },
            {
                id: 'herm-7',
                title: 'Tipologia na Bíblia',
                content: `
                    <h2>Sombras da Realidade</h2>
                    <p>Um tipo é uma pessoa, evento ou instituição no Antigo Testamento que prefigura uma realidade maior e mais plena no Novo Testamento, chamada de antítipo. A tipologia é uma forma divinamente ordenada de ver as conexões entre os testamentos.</p>
                    <h3>Exemplos de Tipos e Antítipos:</h3>
                    <ul>
                        <li><strong>Adão (Tipo) e Cristo (Antítipo):</strong> Adão foi o cabeça da humanidade caída; Cristo é o cabeça da nova humanidade redimida (Romanos 5:14).</li>
                        <li><strong>O Sacrifício Pascal (Tipo) e Cristo (Antítipo):</strong> O cordeiro pascal que salvou Israel da morte no Egito prefigurava Cristo, nosso Cordeiro Pascal, que nos salva do pecado e da morte (1 Coríntios 5:7).</li>
                        <li><strong>O Templo (Tipo) e Cristo/Igreja (Antítipo):</strong> O Templo era o lugar da habitação de Deus; agora Deus habita em Cristo e em seu povo, a Igreja (João 2:19-21, 1 Coríntios 3:16).</li>
                    </ul>
                    <h3>Cuidado com a Alegorização</h3>
                    <p>A tipologia genuína é diferente da alegorização, que busca significados secretos em cada detalhe. Tipos verdadeiros são baseados em padrões históricos reais e são frequentemente confirmados pelo Novo Testamento. A conexão não é arbitrária, mas intencional no plano de Deus.</p>
                `
            },
            {
                id: 'herm-8',
                title: 'O Método Histórico-Gramatical',
                content: `
                    <h2>Uma Abordagem Disciplinada</h2>
                    <p>O método histórico-gramatical é a abordagem padrão para a exegese bíblica em círculos evangélicos. Ele busca descobrir o significado da passagem ao focar naquilo que o texto diz, considerando a gramática e os fatos históricos.</p>
                    <h3>Componentes do Método:</h3>
                    <ul>
                        <li><strong>Análise Histórica:</strong> Entender o contexto histórico, cultural e geográfico que já discutimos.</li>
                        <li><strong>Análise Gramatical:</strong> Estudar as palavras e a sintaxe do texto na língua original. Isso inclui entender o significado das palavras (lexicologia), como as frases são construídas (sintaxe) e a forma das palavras (morfologia). Ferramentas como léxicos e comentários gramaticais são úteis aqui.</li>
                        <li><strong>Análise Literária:</strong> Considerar o gênero literário da passagem (narrativa, poesia, etc.) e o contexto literário imediato e canônico.</li>
                    </ul>
                    <p>Este método não exclui o papel do Espírito Santo, mas fornece uma estrutura para o estudo diligente, protegendo-nos de interpretações puramente subjetivas e baseando nosso entendimento na evidência do próprio texto.</p>
                `
            },
            {
                id: 'herm-9',
                title: 'O Processo: O.I.A.',
                content: `
                    <h2>Observação, Interpretação, Aplicação</h2>
                    <p>Uma maneira prática de estruturar seu estudo pessoal de uma passagem bíblica é o método O.I.A.</p>
                    <h3>1. Observação: "O que eu vejo?"</h3>
                    <p>Nesta fase, você age como um detetive. Você lê o texto repetidamente, fazendo perguntas e anotando os fatos. Não tire conclusões ainda, apenas colete dados.</p>
                    <ul>
                        <li>Quem são as pessoas? Onde e quando isso acontece?</li>
                        <li>Quais são as palavras-chave? Existem palavras ou ideias repetidas?</li>
                        <li>Que figuras de linguagem são usadas? Qual é o tom emocional do texto?</li>
                        <li>Quais são os conectores lógicos (portanto, porque, mas, para que)?</li>
                    </ul>
                    <h3>2. Interpretação: "O que isso significa?"</h3>
                    <p>Esta é a fase hermenêutica principal. Com base em suas observações, você agora busca entender o significado do texto. É aqui que você usa tudo o que aprendeu sobre contexto, gênero, etc.</p>
                    <ul>
                        <li>Qual é a ideia principal que o autor está comunicando?</li>
                        <li>Como esta passagem se encaixa no argumento do livro e na história da salvação?</li>
                        <li>O que isso ensina sobre Deus, Cristo, a humanidade, o pecado, a salvação?</li>
                    </ul>
                    <h3>3. Aplicação: "Como isso muda minha vida?"</h3>
                    <p>A interpretação correta deve levar à transformação. A aplicação é a ponte entre o significado do texto e a sua vida hoje.</p>
                    <ul>
                        <li>Há um exemplo a seguir ou um pecado a evitar?</li>
                        <li>Há uma promessa a crer ou um mandamento a obedecer?</li>
                        <li>Como esta verdade muda a forma como eu penso, sinto e ajo?</li>
                        <li>A aplicação deve ser pessoal, prática e específica.</li>
                    </ul>
                `
            },
            {
                id: 'herm-10',
                title: 'Questionário Final: Hermenêutica',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre os princípios da interpretação bíblica.',
                questions: [
                    {
                        question: "Qual o principal propósito da hermenêutica bíblica?",
                        options: [
                            "Encontrar significados secretos nos textos.",
                            "Criar novas doutrinas para a igreja moderna.",
                            "Entender a intenção original do autor para a audiência original.",
                            "Provar que a Bíblia está cientificamente correta."
                        ],
                        answer: "Entender a intenção original do autor para a audiência original."
                    },
                    {
                        question: "O que significa dizer que 'contexto é rei' na interpretação?",
                        options: [
                            "Devemos focar apenas no contexto histórico dos reis de Israel.",
                            "O significado de um texto é determinado por seu ambiente literário, histórico e cultural.",
                            "Apenas os versículos mais famosos (reis) devem ser usados para doutrina.",
                            "Podemos ignorar o contexto se a mensagem parecer clara."
                        ],
                        answer: "O significado de um texto é determinado por seu ambiente literário, histórico e cultural."
                    },
                    {
                        question: "Ler a Bíblia como se tivesse sido escrita para nossa cultura moderna, ignorando o abismo histórico, é um erro chamado:",
                        options: [
                            "Exegese",
                            "Eisegese",
                            "Anacronismo",
                            "Alegoria"
                        ],
                        answer: "Anacronismo"
                    },
                    {
                        question: "Qual o papel do Espírito Santo na interpretação bíblica?",
                        options: [
                            "Revelar significados completamente novos que ninguém nunca viu.",
                            "Abrir nossa mente e coração para entender e aplicar a verdade já revelada.",
                            "Substituir a necessidade de estudo diligente.",
                            "Confirmar nossas opiniões pessoais sobre um texto."
                        ],
                        answer: "Abrir nossa mente e coração para entender e aplicar a verdade já revelada."
                    },
                    {
                        question: "O processo de 'tirar para fora' o significado do texto, respeitando a intenção do autor, é chamado de:",
                        options: [
                            "Eisegese",
                            "Exegese",
                            "Análise Sintática",
                            "Crítica Textual"
                        ],
                        answer: "Exegese"
                    },
                    {
                        question: "Impor nossas próprias ideias e preconceitos sobre a Escritura é um erro grave conhecido como:",
                        options: [
                            "Exegese",
                            "Hermenêutica",
                            "Eisegese",
                            "Iluminação"
                        ],
                        answer: "Eisegese"
                    },
                     {
                        question: "Na frase 'O Senhor é meu pastor', 'pastor' é um exemplo de qual figura de linguagem?",
                        options: [
                            "Hipérbole",
                            "Símile",
                            "Metáfora",
                            "Personificação"
                        ],
                        answer: "Metáfora"
                    },
                     {
                        question: "No sistema de tipologia, Cristo é o antítipo de qual figura do Antigo Testamento?",
                        options: [
                            "Moisés (como profeta e mediador)",
                            "Adão (como cabeça de uma raça)",
                            "O Cordeiro Pascal (como sacrifício)",
                            "Todas as opções acima"
                        ],
                        answer: "Todas as opções acima"
                    },
                     {
                        question: "Qual etapa do método O.I.A. corresponde à pergunta 'O que eu vejo no texto?'",
                        options: [
                            "Observação",
                            "Interpretação",
                            "Aplicação",
                            "Correlação"
                        ],
                        answer: "Observação"
                    },
                     {
                        question: "O método histórico-gramatical foca primariamente em:",
                        options: [
                            "Na resposta emocional do leitor ao texto.",
                            "Na gramática, sintaxe e contexto histórico do texto.",
                            "Em encontrar significados ocultos e alegóricos.",
                            "Na opinião de teólogos modernos sobre o texto."
                        ],
                        answer: "Na gramática, sintaxe e contexto histórico do texto."
                    }
                ]
            }
        ]
    },
    {
        id: 'pregacao-expositiva',
        title: 'Fundamentos da Pregação Expositiva',
        description: 'Descubra o método de pregação que honra o texto bíblico, expondo seu real significado e aplicando-o à vida da igreja.',
        lessons: [
            {
                id: 'expo-1',
                title: 'O Que é um Sermão Expositivo?',
                content: `
                    <h2>Mais do que um Comentário Corrente</h2>
                    <p>A pregação expositiva é mais do que simplesmente ler um texto e comentá-lo. Haddon Robinson a definiu de forma clássica como:</p>
                    <p><em>"A comunicação de um conceito bíblico, derivado de e transmitido através de um estudo histórico, gramatical e literário de uma passagem em seu contexto, que o Espírito Santo primeiro aplica à personalidade e experiência do pregador, e depois através dele à sua congregação."</em></p>
                    <h3>Características Chave:</h3>
                    <ul>
                        <li><strong>O Ponto do Texto é o Ponto do Sermão:</strong> O objetivo principal do pregador não é compartilhar suas próprias ideias, mas expor a ideia central da passagem bíblica. A mensagem vem do texto, não é imposta a ele.</li>
                        <li><strong>A Estrutura do Texto Informa a Estrutura do Sermão:</strong> A forma como o autor bíblico desenvolveu seu argumento deve, em grande parte, moldar a forma como o sermão é estruturado. Isso garante que a ênfase do sermão seja a mesma do texto.</li>
                        <li><strong>Autoridade na Palavra:</strong> A autoridade do pregador não vem de sua eloquência ou inteligência, mas do fato de ele estar dizendo o que a Palavra de Deus diz. O sermão deve ecoar um claro "Assim diz o Senhor".</li>
                    </ul>
                `
            },
            {
                id: 'expo-2',
                title: '7 Passos da Preparação',
                content: `
                    <h2>Um Processo de Estudo e Oração</h2>
                    <p>Preparar um sermão expositivo é um trabalho árduo que exige disciplina e dependência do Espírito Santo. Aqui estão os passos essenciais:</p>
                    <ul>
                        <li><strong>1. Selecione a Passagem:</strong> Escolha uma unidade de pensamento completa (um parágrafo, uma perícope). Evite pregar sobre um único versículo isolado.</li>
                        <li><strong>2. Estude a Passagem em seu Contexto:</strong> Leia-a repetidamente. Faça o trabalho hermenêutico: análise histórica, cultural, gramatical e literária.</li>
                        <li><strong>3. Identifique a Ideia Exegética:</strong> Qual é a ideia principal que o autor bíblico estava comunicando à sua audiência original? Escreva isso em uma única frase clara.</li>
                        <li><strong>4. Estruture o Sermão:</strong> Organize os pontos do seu sermão de forma que eles exponham a ideia principal da passagem. Cada ponto deve ser uma parte do todo.</li>
                        <li><strong>5. "Dê Carne" ao Esqueleto:</strong> Adicione explicações, ilustrações, citações e outros elementos que ajudem a tornar a mensagem clara, memorável e interessante.</li>
                        <li><strong>6. Prepare a Introdução e a Conclusão:</strong> A introdução deve captar a atenção e apresentar o tema. A conclusão deve resumir a mensagem e chamar a uma resposta clara e específica.</li>
                        <li><strong>7. Ore Sobre o Sermão:</strong> Peça que a mensagem primeiro transforme você antes de tentar pregá-la a outros. Dependa do Espírito para dar poder à sua pregação.</li>
                    </ul>
                `
            },
            {
                id: 'expo-3',
                title: 'A Grande Ideia do Sermão',
                content: `
                    <h2>Do Texto à Proposição</h2>
                    <p>Um dos conceitos mais importantes na pregação expositiva, popularizado por Haddon Robinson, é a "Grande Ideia" (Big Idea). Um bom sermão expositivo deve ser sobre uma única ideia dominante que emerge do texto.</p>
                    <p>A Grande Ideia é composta de duas partes:</p>
                    <ul>
                        <li><strong>O Assunto:</strong> Sobre o que o autor está falando? (Respondido em poucas palavras)</li>
                        <li><strong>O Complemento:</strong> O que o autor está dizendo sobre o que ele está falando? (Respondido em uma frase)</li>
                    </ul>
                    <p><strong>Exemplo em 1 Pedro 5:6-7:</strong></p>
                    <ul>
                        <li><strong>Assunto:</strong> Ansiedade do crente.</li>
                        <li><strong>Complemento:</strong> O crente pode lançar sua ansiedade sobre Deus porque Ele cuida dele.</li>
                    </ul>
                    <p>Juntas, formam a <strong>Grande Ideia:</strong> "Porque Deus cuida de nós, podemos humildemente lançar toda a nossa ansiedade sobre Ele." Todo o sermão - introdução, pontos, ilustrações e conclusão - deve servir para explicar, provar e aplicar esta única ideia.</p>
                `
            },
            {
                id: 'expo-4',
                title: 'A Arte da Ilustração',
                type: 'lesson',
                content: `
                    <h2>Janelas para a Verdade</h2>
                    <p>Ilustrações são para um sermão o que as janelas são para uma casa: elas deixam a luz entrar. Elas não provam a verdade do texto, mas a iluminam, tornando-a mais clara, memorável e compreensível para os ouvintes.</p>
                    <h3>Propósitos de uma Boa Ilustração:</h3>
                    <ul>
                        <li><strong>Clarificar:</strong> Ajudam a explicar um conceito teológico abstrato ou complexo de forma concreta.</li>
                        <li><strong>Conectar:</strong> Criam uma ponte entre o mundo antigo da Bíblia e o mundo moderno do ouvinte.</li>
                        <li><strong>Engajar:</strong> Capturam a atenção e o interesse, ajudando as pessoas a se lembrarem do ponto principal.</li>
                    </ul>
                    <h3>Princípios para Boas Ilustrações:</h3>
                    <ul>
                        <li><strong>Sirva ao Texto:</strong> A ilustração deve servir para explicar o ponto do texto, e não o contrário. Não escolha um texto para caber na sua ilustração favorita.</li>
                        <li><strong>Seja Relevante:</strong> Use exemplos da vida cotidiana, da história, da ciência ou de outras áreas que seus ouvintes entendam.</li>
                        <li><strong>Seja Breve:</strong> Uma ilustração não é um segundo sermão. Conte a história, faça a conexão e siga em frente.</li>
                        <li><strong>Seja Autêntico:</strong> Ilustrações pessoais podem ser muito poderosas, mas use-as com moderação e humildade, nunca se colocando como o herói.</li>
                    </ul>
                `
            },
            {
                id: 'expo-5',
                title: 'A Importância da Aplicação',
                content: `
                    <h2>Da Doutrina ao Dever</h2>
                    <p>Um sermão não está completo até que a verdade do texto seja aplicada à vida dos ouvintes. A aplicação responde à pergunta: "E daí?". Como essa verdade bíblica deve mudar a maneira como vivemos na segunda-feira?</p>
                    <h3>Características de uma Boa Aplicação:</h3>
                    <ul>
                        <li><strong>Específica:</strong> Evite generalidades como "ame mais a Deus". Em vez disso, sugira formas concretas de como isso pode ser feito no casamento, no trabalho, na escola, etc.</li>
                        <li><strong>Centrada no Evangelho:</strong> A aplicação não deve ser um mero moralismo ("faça mais, tente mais"). Ela deve fluir da graça de Deus em Cristo. A motivação para a mudança é a gratidão pelo que Cristo já fez.</li>
                        <li><strong>Realista:</strong> Entenda as lutas e o contexto de sua congregação. A aplicação deve ser desafiadora, mas não esmagadora.</li>
                        <li><strong>Variada:</strong> Aplique a verdade a diferentes áreas da vida: mente (pensamento), coração (afeições), vontade (escolhas) e mãos (ações).</li>
                    </ul>
                `
            },
            {
                id: 'expo-6',
                title: 'Pregando os Diferentes Gêneros',
                content: `
                    <h2>Adaptando a Abordagem</h2>
                    <p>A pregação expositiva não é um método "tamanho único". A forma como pregamos deve respeitar o gênero literário do texto.</p>
                    <ul>
                        <li><strong>Narrativas:</strong> Recrie a história. Ajude a congregação a sentir a tensão, a alegria e a dor dos personagens. Extraia o princípio teológico focado em Deus e aplique-o, evitando o moralismo simplista.</li>
                        <li><strong>Salmos (Poesia):</strong> Pregue para o coração. Ajude as pessoas a usarem a linguagem dos Salmos para expressar suas próprias emoções a Deus, seja de louvor, lamento ou confiança.</li>
                        <li><strong>Profetas:</strong> Conecte o contexto da aliança de Israel com os princípios eternos da justiça e fidelidade de Deus. Mostre como as promessas messiânicas se cumprem em Cristo.</li>
                        <li><strong>Epístolas:</strong> Siga o argumento lógico do autor. Explique a doutrina claramente e depois mostre como as exortações práticas fluem dessa doutrina.</li>
                    </ul>
                `
            },
            {
                id: 'expo-7',
                title: 'Introduções e Conclusões',
                content: `
                    <h2>Começando e Terminando Bem</h2>
                    <p>A introdução e a conclusão são as partes do sermão que as pessoas mais tendem a lembrar. Elas merecem atenção especial.</p>
                    <h3>A Introdução:</h3>
                    <p>O objetivo é duplo: capturar a atenção dos ouvintes e introduzir o tema do sermão, geralmente apresentando a tensão ou a pergunta que o texto responde.</p>
                    <ul>
                        <li>Comece com uma história, uma pergunta intrigante, uma estatística surpreendente ou uma citação poderosa.</li>
                        <li>Crie uma ponte entre o mundo do ouvinte e o mundo do texto.</li>
                        <li>Deve ser breve e ir direto ao ponto.</li>
                    </ul>
                    <h3>A Conclusão:</h3>
                    <p>O objetivo é resumir a Grande Ideia do sermão e chamar os ouvintes a uma resposta específica, clara e prática.</p>
                    <ul>
                        <li>Não introduza novas informações.</li>
                        <li>Reafirme a ideia principal de forma concisa e memorável.</li>
                        <li>Chame a uma resposta específica (arrependimento, fé, adoração, ação).</li>
                        <li>Termine com paixão e convicção, apontando para a suficiência de Cristo.</li>
                    </ul>
                `
            },
            {
                id: 'expo-8',
                title: 'Usando Comentários e Ferramentas',
                content: `
                    <h2>Auxiliares no Estudo</h2>
                    <p>Nenhum pregador é uma ilha. Comentários bíblicos, léxicos e outras ferramentas de estudo são recursos valiosos para aprofundar nosso entendimento do texto.</p>
                    <h3>Como Usar Comentários:</h3>
                    <ul>
                        <li><strong>Use-os por último:</strong> Faça seu próprio trabalho de observação e interpretação primeiro. Deixe o texto falar com você antes de ouvir outras vozes. Isso evita que sua interpretação seja apenas um eco da de outra pessoa.</li>
                        <li><strong>Use vários tipos:</strong> Consulte comentários de diferentes perspectivas: técnicos (focados no grego/hebraico), exegéticos (focados no significado do texto) e expositivos (focados na pregação).</li>
                        <li><strong>Não seja um escravo deles:</strong> Comentários são guias, não autoridades infalíveis. A autoridade final é a Escritura. Use-os para testar suas conclusões, obter novos insights e entender passagens difíceis.</li>
                    </ul>
                    <h3>Outras Ferramentas:</h3>
                    <p>Bíblias de estudo, dicionários bíblicos, atlas e softwares bíblicos (como Logos ou e-Sword) podem enriquecer imensamente sua compreensão do contexto histórico, cultural e linguístico.</p>
                `
            },
            {
                id: 'expo-9',
                title: 'Ferramenta: Gerador de Esboço',
                type: 'generator',
                content: `
                    <h2>✨ Gerador de Esboço de Sermão</h2>
                    <p>Use nossa ferramenta de IA para criar um esboço expositivo inicial para sua pregação. Insira uma passagem bíblica (ex: João 3:16-21) e a IA irá gerar uma estrutura com introdução, pontos principais e uma conclusão, servindo como um ponto de partida para seu estudo aprofundado.</p>
                `
            },
             {
                id: 'expo-10',
                title: 'Questionário Final: Pregação',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre os fundamentos da pregação expositiva.',
                questions: [
                    {
                        question: "Qual é a principal característica de um sermão expositivo?",
                        options: [
                            "Ter pelo menos 50 minutos de duração.",
                            "O ponto principal do sermão ser o ponto principal do texto bíblico.",
                            "Usar muitas ilustrações e histórias engraçadas.",
                            "Ser pregado por um pregador famoso."
                        ],
                        answer: "O ponto principal do sermão ser o ponto principal do texto bíblico."
                    },
                    {
                        question: "De onde vem a autoridade do pregador expositivo?",
                        options: [
                            "De sua própria inteligência e carisma.",
                            "De sua posição na igreja.",
                            "Do fato de que ele está proclamando fielmente a Palavra de Deus.",
                            "Da quantidade de livros que ele leu."
                        ],
                        answer: "Do fato de que ele está proclamando fielmente a Palavra de Deus."
                    },
                    {
                        question: "O que é a 'Grande Ideia' de um sermão, segundo Haddon Robinson?",
                        options: [
                            "A parte mais emocionante da história contada.",
                            "Uma única frase que resume sobre o que o texto fala e o que ele diz sobre o assunto.",
                            "Um resumo de três pontos do sermão.",
                            "Uma citação famosa para iniciar a pregação."
                        ],
                        answer: "Uma única frase que resume sobre o que o texto fala e o que ele diz sobre o assunto."
                    },
                    {
                        question: "Qual é o principal propósito de uma ilustração em um sermão?",
                        options: [
                            "Provar que o ponto do pregador está correto.",
                            "Entreter a congregação e preencher o tempo.",
                            "Iluminar e clarificar a verdade do texto bíblico.",
                            "Mostrar o quão culto o pregador é."
                        ],
                        answer: "Iluminar e clarificar a verdade do texto bíblico."
                    },
                    {
                        question: "Uma boa aplicação de sermão deve ser:",
                        options: [
                            "Sempre geral e abstrata.",
                            "Focada apenas em moralismo, sem mencionar o evangelho.",
                            "Específica, centrada no evangelho e realista.",
                            "Tão difícil que ninguém consiga cumprir."
                        ],
                        answer: "Específica, centrada no evangelho e realista."
                    },
                    {
                        question: "Ao pregar uma narrativa, o que o pregador deve evitar?",
                        options: [
                           "Recriar a tensão da história.",
                           "Focar em Deus como o herói principal.",
                           "Apresentar os personagens como meros exemplos morais, ignorando o plano de Deus.",
                           "Aplicar a mensagem ao público."
                        ],
                        answer: "Apresentar os personagens como meros exemplos morais, ignorando o plano de Deus."
                    },
                    {
                        question: "Quando é o momento ideal para consultar comentários bíblicos na preparação do sermão?",
                        options: [
                           "Antes mesmo de ler a passagem, para saber o que procurar.",
                           "Apenas depois de ter feito seu próprio estudo exegético inicial.",
                           "Apenas durante a pregação, para ter ideias novas.",
                           "Nunca, pois o pregador deve depender apenas do Espírito Santo."
                        ],
                        answer: "Apenas depois de ter feito seu próprio estudo exegético inicial."
                    },
                    {
                        question: "Qual o principal objetivo da conclusão de um sermão?",
                        options: [
                           "Introduzir um novo tópico para o próximo sermão.",
                           "Contar uma piada para que as pessoas saiam felizes.",
                           "Resumir a Grande Ideia e chamar a uma resposta específica.",
                           "Repetir todos os pontos do sermão palavra por palavra."
                        ],
                        answer: "Resumir a Grande Ideia e chamar a uma resposta específica."
                    },
                    {
                        question: "Ao pregar um Salmo de lamento, o foco principal deve ser em:",
                        options: [
                           "Criticar o salmista por sua falta de fé.",
                           "Ajudar a congregação a usar a linguagem do Salmo para expressar sua própria dor a Deus.",
                           "Provar que os crentes nunca devem se sentir tristes.",
                           "Encontrar uma profecia sobre Cristo em cada versículo."
                        ],
                        answer: "Ajudar a congregação a usar a linguagem do Salmo para expressar sua própria dor a Deus."
                    },
                    {
                        question: "A ferramenta de IA para gerar esboços neste curso serve para:",
                        options: [
                           "Substituir completamente o estudo do pregador.",
                           "Escrever o sermão inteiro, incluindo as ilustrações.",
                           "Fornecer um sermão pronto para ser pregado sem alterações.",
                           "Criar um esboço inicial que serve como ponto de partida para um estudo aprofundado."
                        ],
                        answer: "Criar um esboço inicial que serve como ponto de partida para um estudo aprofundado."
                    }
                ]
            }
        ]
    },
    {
        id: 'teologia-sistematica',
        title: 'Introdução à Teologia Sistemática',
        description: 'Explore as doutrinas fundamentais da fé cristã de forma organizada, desde a revelação de Deus até a doutrina das últimas coisas.',
        lessons: [
            {
                id: 'ts-1',
                title: 'O Que é Teologia Sistemática?',
                content: `
                    <h2>Definição e Metodologia</h2>
                    <p><strong>Teologia Sistemática</strong> é o estudo que busca organizar todas as doutrinas da Bíblia de forma lógica e coerente. Diferente da Teologia Bíblica, que traça o desenvolvimento de um tema através da história da revelação, a Teologia Sistemática pergunta: "O que a Bíblia inteira ensina hoje sobre um determinado tópico?".</p>
                    <p>Ela reúne todas as passagens relevantes sobre um assunto (Deus, Cristo, Salvação, etc.), as correlaciona e as resume em uma declaração doutrinária clara.</p>
                    <h3>Por que estudar sistematicamente?</h3>
                    <ul>
                        <li><strong>Para Conhecer a Deus Corretamente:</strong> Ajuda-nos a formar uma visão completa e equilibrada do caráter e da vontade de Deus.</li>
                        <li><strong>Para Viver Sabiamente:</strong> Nossas crenças (doutrina) impactam diretamente nosso comportamento (ética).</li>
                        <li><strong>Para Defender a Fé:</strong> Fornece uma base sólida para a apologética e para corrigir erros doutrinários.</li>
                    </ul>
                `
            },
            {
                id: 'ts-2',
                title: 'Doutrina da Revelação (Bibliologia)',
                content: `
                    <h2>Como Deus se Faz Conhecido</h2>
                    <p>Bibliologia é o estudo da Bíblia. A base de todo o nosso conhecimento sobre Deus é a sua auto-revelação.</p>
                    <ul>
                        <li><strong>Revelação Geral:</strong> Deus se revela de forma geral a todas as pessoas através da criação (Romanos 1:20) e da consciência humana (Romanos 2:14-15). Esta revelação é suficiente para tornar o homem indesculpável, mas insuficiente para a salvação.</li>
                        <li><strong>Revelação Especial:</strong> Deus se revela de forma particular para a salvação, primariamente através das Escrituras e culminando na pessoa de Jesus Cristo (Hebreus 1:1-2).</li>
                    </ul>
                    <h3>A Natureza da Escritura</h3>
                    <p>A teologia evangélica afirma que a Escritura é:</p>
                    <ul>
                        <li><strong>Inspirada:</strong> "Soprada por Deus" (2 Timóteo 3:16), significando que Deus superintendeu os autores humanos para que escrevessem exatamente o que Ele queria, usando seus próprios estilos e personalidades.</li>
                        <li><strong>Inerrante:</strong> Livre de erros em tudo o que afirma em seus manuscritos originais.</li>
                        <li><strong>Autoritativa:</strong> A Palavra de Deus tem a autoridade final sobre nossa fé e vida.</li>
                    </ul>
                `
            },
            {
                id: 'ts-3',
                title: 'Doutrina de Deus (Teologia Própria)',
                content: `
                    <h2>O Ser e os Atributos de Deus</h2>
                    <p>Este é o estudo de Deus Pai. Analisamos seu caráter através de seus atributos, que são tradicionalmente divididos em duas categorias:</p>
                    <ul>
                        <li><strong>Atributos Incomunicáveis:</strong> Aqueles que pertencem somente a Deus. Ex: Onipotência (todo-poderoso), Onipresença (presente em todos os lugares), Onisciência (sabe todas as coisas), Imutabilidade (não muda).</li>
                        <li><strong>Atributos Comunicáveis:</strong> Aqueles que Deus compartilha, em certa medida, com a humanidade. Ex: Amor, Justiça, Santidade, Sabedoria, Bondade.</li>
                    </ul>
                    <h3>A Trindade</h3>
                    <p>A doutrina da Trindade afirma que Deus é um em essência e três em pessoa: Pai, Filho e Espírito Santo. Cada pessoa é plenamente Deus, e há apenas um Deus. Esta é uma verdade fundamental revelada nas Escrituras, embora o termo "Trindade" não apareça.</p>
                `
            },
            {
                id: 'ts-4',
                title: 'Doutrina de Cristo (Cristologia)',
                content: `
                    <h2>A Pessoa e Obra de Jesus Cristo</h2>
                    <p>Cristologia foca em quem Jesus é e o que Ele fez.</p>
                    <h3>A Pessoa de Cristo</h3>
                    <p>A Bíblia ensina que Jesus é plenamente Deus e plenamente homem. Ele possui duas naturezas, uma divina e uma humana, unidas em uma só pessoa para sempre. Isso é chamado de <strong>União Hipostática</strong>. Negar sua divindade ou sua humanidade é uma heresia.</p>
                    <h3>A Obra de Cristo</h3>
                    <ul>
                        <li><strong>Sua Morte (Expiação):</strong> Cristo morreu na cruz como um sacrifício substitutivo, pagando a penalidade pelos nossos pecados e satisfazendo a justiça de Deus.</li>
                        <li><strong>Sua Ressurreição:</strong> Sua ressurreição corpórea validou quem Ele era, garantiu nossa justificação e assegurou nossa futura ressurreição.</li>
                        <li><strong>Seus Ofícios:</strong> Ele cumpre perfeitamente os três ofícios do Antigo Testamento: <strong>Profeta</strong> (revela Deus a nós), <strong>Sacerdote</strong> (nos representa diante de Deus) e <strong>Rei</strong> (reina sobre o universo e sobre nós).</li>
                    </ul>
                `
            },
            {
                id: 'ts-5',
                title: 'Doutrina do Espírito Santo (Pneumatologia)',
                content: `
                    <h2>A Terceira Pessoa da Trindade</h2>
                    <p>Pneumatologia é o estudo do Espírito Santo.</p>
                    <h3>A Pessoa do Espírito Santo</h3>
                    <p>O Espírito Santo não é uma força ou uma influência impessoal. Ele é uma pessoa divina, que possui intelecto, emoção e vontade. Ele é referido como Deus e realiza obras que só Deus pode fazer.</p>
                    <h3>A Obra do Espírito Santo</h3>
                    <ul>
                        <li><strong>No Mundo:</strong> Ele convence o mundo do pecado, da justiça e do juízo (João 16:8).</li>
                        <li><strong>Na Salvação:</strong> Ele regenera (dá nova vida), batiza (une o crente a Cristo e à Igreja), sela (garante a salvação) e habita no crente.</li>
                        <li><strong>Na Vida Cristã:</strong> Ele santifica (nos torna mais parecidos com Cristo), ilumina (nos ajuda a entender a Escritura), concede dons para o serviço e produz fruto em nós (Gálatas 5:22-23).</li>
                    </ul>
                `
            },
            {
                id: 'ts-6',
                title: 'Doutrina do Homem e do Pecado (Antropologia e Hamartiologia)',
                content: `
                    <h2>Criação, Queda e Consequências</h2>
                    <h3>Antropologia (O Homem)</h3>
                    <p>O homem foi criado por Deus, à Sua imagem e semelhança (<em>Imago Dei</em>). Isso significa que, de forma única na criação, refletimos o caráter de Deus em nossa capacidade de raciocinar, sentir, criar e nos relacionar. Nosso propósito era glorificar a Deus.</p>
                    <h3>Hamartiologia (O Pecado)</h3>
                    <p>Através da desobediência de Adão e Eva (a Queda), o pecado entrou no mundo. O pecado é qualquer falta de conformidade com a lei moral de Deus, seja em ato, atitude ou natureza.</p>
                    <ul>
                        <li><strong>Pecado Original:</strong> Herdamos de Adão uma natureza pecaminosa e a culpa pelo seu primeiro pecado.</li>
                        <li><strong>Depravação Total:</strong> Isso não significa que somos tão maus quanto poderíamos ser, mas que o pecado afetou todas as partes de nosso ser (mente, vontade, emoções), nos tornando incapazes de salvar a nós mesmos ou de agradar a Deus por nossos próprios méritos.</li>
                    </ul>
                `
            },
            {
                id: 'ts-7',
                title: 'Doutrina da Salvação (Soteriologia)',
                content: `
                    <h2>A Aplicação da Redenção</h2>
                    <p>Soteriologia estuda como a obra de Cristo é aplicada aos crentes. A "Ordem da Salvação" (<em>Ordo Salutis</em>) descreve os passos lógicos neste processo:</p>
                    <ul>
                        <li><strong>Eleição:</strong> A escolha de Deus, desde a eternidade, daqueles que Ele salvaria.</li>
                        <li><strong>Regeneração:</strong> O ato do Espírito Santo de nos dar uma nova vida espiritual.</li>
                        <li><strong>Conversão:</strong> Nossa resposta ao evangelho, que inclui fé (confiança em Cristo) e arrependimento (voltar-se do pecado para Deus).</li>
                        <li><strong>Justificação:</strong> O ato legal de Deus onde Ele declara o pecador justo, com base na justiça de Cristo imputada a nós.</li>
                        <li><strong>Santificação:</strong> O processo contínuo, ao longo da vida, onde somos progressivamente libertos do poder do pecado e nos tornamos mais semelhantes a Cristo.</li>
                        <li><strong>Glorificação:</strong> O estado final em que seremos completamente libertos da presença do pecado quando estivermos com Cristo.</li>
                    </ul>
                `
            },
            {
                id: 'ts-8',
                title: 'Doutrina da Igreja (Eclesiologia)',
                content: `
                    <h2>O Povo de Deus</h2>
                    <p>Eclesiologia é o estudo da Igreja.</p>
                    <h3>A Natureza da Igreja</h3>
                    <p>A Igreja é o corpo de Cristo, a comunidade de todos os crentes de todos os tempos. Ela é tanto:</p>
                    <ul>
                        <li><strong>Universal:</strong> Composta por todos os que foram salvos em Cristo, em todo o mundo e ao longo da história.</li>
                        <li><strong>Local:</strong> A expressão visível da igreja universal em uma localidade específica, onde os crentes se reúnem para adoração, ensino, comunhão e serviço.</li>
                    </ul>
                    <h3>As Ordenanças</h3>
                    <p>São símbolos sagrados instituídos por Cristo:</p>
                    <ul>
                        <li><strong>Batismo:</strong> A imersão em água que simboliza a união do crente com Cristo em Sua morte e ressurreição. É um testemunho público de fé.</li>
                        <li><strong>Ceia do Senhor:</strong> A participação no pão e no vinho, que simbolizam o corpo e o sangue de Cristo, proclamando Sua morte até que Ele venha.</li>
                    </ul>
                `
            },
            {
                id: 'ts-9',
                title: 'Doutrina das Últimas Coisas (Escatologia)',
                content: `
                    <h2>A Consumação da História</h2>
                    <p>Escatologia é o estudo dos eventos finais. Embora haja diferentes visões sobre a ordem exata dos eventos, os pontos centrais e não negociáveis para a fé cristã são:</p>
                    <ul>
                        <li><strong>A Segunda Vinda de Cristo:</strong> Jesus retornará de forma visível, pessoal e corporal para julgar o mundo e consumar Seu reino.</li>
                        <li><strong>A Ressurreição dos Mortos:</strong> Tanto os salvos quanto os perdidos serão ressuscitados corporalmente. Os salvos para a vida eterna e os perdidos para a condenação eterna.</li>
                        <li><strong>O Juízo Final:</strong> Todas as pessoas comparecerão diante de Deus para serem julgadas.</li>
                        <li><strong>O Estado Eterno:</strong> A criação de um Novo Céu e uma Nova Terra, onde os redimidos viverão na presença de Deus para sempre (Céu), e a separação eterna de Deus para os ímpios (Inferno).</li>
                    </ul>
                `
            },
            {
                id: 'ts-10',
                title: 'Questionário Final: Teologia Sistemática',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre as doutrinas fundamentais da fé cristã.',
                questions: [
                    {
                        question: "O que distingue a Teologia Sistemática da Teologia Bíblica?",
                        options: [
                            "A Teologia Sistemática ignora o Antigo Testamento.",
                            "A Teologia Sistemática organiza o que a Bíblia inteira ensina sobre tópicos específicos.",
                            "A Teologia Bíblica foca apenas no Novo Testamento.",
                            "Não há diferença entre elas."
                        ],
                        answer: "A Teologia Sistemática organiza o que a Bíblia inteira ensina sobre tópicos específicos."
                    },
                    {
                        question: "A doutrina da 'Inerrância' da Escritura significa que:",
                        options: [
                            "A Bíblia não contém figuras de linguagem.",
                            "A Bíblia está livre de erros em tudo o que afirma em seus manuscritos originais.",
                            "Todas as traduções da Bíblia são perfeitas.",
                            "A Bíblia é apenas um livro de histórias morais."
                        ],
                        answer: "A Bíblia está livre de erros em tudo o que afirma em seus manuscritos originais."
                    },
                    {
                        question: "A doutrina da Trindade afirma que:",
                        options: [
                            "Existem três deuses.",
                            "Deus se manifestou de três formas diferentes em momentos diferentes.",
                            "Deus é uma pessoa com três personalidades.",
                            "Deus é um em essência e três em pessoa: Pai, Filho e Espírito Santo."
                        ],
                        answer: "Deus é um em essência e três em pessoa: Pai, Filho e Espírito Santo."
                    },
                    {
                        question: "A 'União Hipostática' refere-se a:",
                        options: [
                            "A união da igreja com Cristo.",
                            "A união das duas naturezas de Cristo, divina e humana, em uma só pessoa.",
                            "A união do Antigo e Novo Testamento.",
                            "A união do crente com o Espírito Santo."
                        ],
                        answer: "A união das duas naturezas de Cristo, divina e humana, em uma só pessoa."
                    },
                    {
                        question: "A 'Depravação Total' ensina que:",
                        options: [
                            "Os seres humanos são tão maus quanto poderiam ser.",
                            "O pecado afetou todas as partes do ser humano, tornando-nos incapazes de nos salvar.",
                            "Apenas algumas pessoas são pecadoras.",
                            "O homem não tem capacidade de fazer o bem."
                        ],
                        answer: "O pecado afetou todas as partes do ser humano, tornando-nos incapazes de nos salvar."
                    },
                    {
                        question: "Qual termo descreve o ato legal de Deus declarando um pecador justo com base na obra de Cristo?",
                        options: ["Santificação", "Regeneração", "Justificação", "Glorificação"],
                        answer: "Justificação"
                    },
                    {
                        question: "Qual é o processo contínuo de se tornar mais parecido com Cristo ao longo da vida cristã?",
                        options: ["Justificação", "Santificação", "Adoção", "Eleição"],
                        answer: "Santificação"
                    },
                    {
                        question: "As duas ordenanças dadas à Igreja por Cristo são:",
                        options: [
                            "Pregação e Oração.",
                            "Batismo e Ceia do Senhor.",
                            "Dízimo e Oferta.",
                            "Confissão e Penitência."
                        ],
                        answer: "Batismo e Ceia do Senhor."
                    },
                    {
                        question: "Escatologia é o estudo de quê?",
                        options: [
                            "A natureza da Igreja.",
                            "A doutrina da salvação.",
                            "As últimas coisas ou eventos finais.",
                            "A obra do Espírito Santo."
                        ],
                        answer: "As últimas coisas ou eventos finais."
                    }
                ]
            }
        ]
    },
    {
        id: 'exegese-biblica',
        title: 'Exegese Bíblica: Ferramentas e Métodos',
        description: 'Aprenda o processo prático de "tirar para fora" o significado de um texto bíblico, usando ferramentas de análise gramatical, histórica e literária.',
        lessons: [
            {
                id: 'exe-1',
                title: 'Exegese vs. Hermenêutica',
                content: `
                    <h2>A Teoria e a Prática</h2>
                    <p>Embora os termos sejam frequentemente usados de forma intercambiável, existe uma distinção útil:</p>
                    <ul>
                        <li><strong>Hermenêutica:</strong> É a <em>ciência</em> e a <em>arte</em> da interpretação. Ela estabelece os princípios e as regras. A hermenêutica responde à pergunta: "Como devemos interpretar?".</li>
                        <li><strong>Exegese:</strong> É a <em>aplicação prática</em> desses princípios a uma passagem específica. A exegese responde à pergunta: "O que este texto significa?".</li>
                    </ul>
                    <p>A exegese é o trabalho de escavação, de usar as ferramentas da hermenêutica para "tirar para fora" (do grego <em>ex</em> = fora, <em>ago</em> = guiar) o significado pretendido pelo autor. O objetivo final da exegese é entender a passagem em seus próprios termos antes de aplicá-la aos nossos.</p>
                `
            },
            {
                id: 'exe-2',
                title: 'Análise Sintática e Estrutural',
                content: `
                    <h2>Observando a Gramática</h2>
                    <p>A forma como as frases são construídas é fundamental para o significado. A análise sintática envolve examinar as relações entre as palavras e as orações.</p>
                    <h3>Passos Práticos:</h3>
                    <ul>
                        <li><strong>Identifique o Verbo Principal:</strong> O que é a ação principal da frase?</li>
                        <li><strong>Encontre o Sujeito e o Objeto:</strong> Quem está agindo e sobre quem/o que a ação recai?</li>
                        <li><strong>Observe as Conjunções:</strong> Palavras como "porque", "portanto", "mas", "para que" são placas de sinalização lógicas. Elas mostram relações de causa, consequência, contraste e propósito.</li>
                        <li><strong>Analise as Orações Subordinadas:</strong> Como as orações secundárias modificam ou explicam a oração principal?</li>
                    </ul>
                    <p>Ferramentas como o "diagrama de frases" ou "arcos" podem ajudar a visualizar a estrutura de uma passagem e a identificar a ideia principal e as ideias de apoio.</p>
                `
            },
            {
                id: 'exe-3',
                title: 'Estudo de Palavras (Lexicologia)',
                content: `
                    <h2>O Significado em Contexto</h2>
                    <p>Estudar palavras-chave em suas línguas originais (hebraico e grego) pode trazer grande clareza. No entanto, é uma área com muitos perigos.</p>
                    <h3>Falácias Comuns a Evitar:</h3>
                    <ul>
                        <li><strong>Falácia da Raiz (Etimológica):</strong> Achar que o significado de uma palavra é determinado por sua raiz ou origem. O significado é determinado pelo uso no tempo do autor.</li>
                        <li><strong>Sobrecarga Semântica:</strong> Despejar todos os significados possíveis de uma palavra em uma única ocorrência dela. O contexto determina qual significado é o correto.</li>
                        <li><strong>Anacronismo:</strong> Ler um significado moderno de uma palavra em um texto antigo (ex: a palavra grega <em>dynamis</em> e "dinamite").</li>
                    </ul>
                    <p>A regra de ouro é: <strong>o contexto determina o significado da palavra</strong>. Use léxicos e dicionários para ver o <em>leque de significados possíveis</em> de uma palavra, mas deixe o contexto imediato ser o seu guia final para determinar qual significado o autor pretendia.</p>
                `
            },
            {
                id: 'exe-4',
                title: 'Análise do Contexto Literário',
                content: `
                    <h2>Traçando o Argumento</h2>
                    <p>Já estabelecemos que o contexto é rei. Na exegese, isso significa traçar o fluxo de pensamento do autor através do livro.</p>
                    <h3>Como Fazer na Prática:</h3>
                    <ol>
                        <li><strong>Leia a Passagem Imediata:</strong> Leia o parágrafo ou capítulo onde sua passagem está localizada várias vezes. Qual é o tópico principal?</li>
                        <li><strong>Esboce a Seção:</strong> Identifique como sua passagem se conecta com o que vem antes e depois. Crie um breve esboço do argumento da seção maior.</li>
                        <li><strong>Consulte o Esboço do Livro:</strong> Entenda como sua seção se encaixa na estrutura geral e no propósito do livro inteiro. Como ela contribui para a mensagem principal do autor?</li>
                    </ol>
                    <p>Pergunte constantemente: "Por que o autor disse isso exatamente aqui?". A resposta a essa pergunta geralmente revela o ponto principal.</p>
                `
            },
            {
                id: 'exe-5',
                title: 'Análise Histórico-Cultural',
                content: `
                    <h2>O Mundo por Trás do Texto</h2>
                    <p>Para construir a ponte sobre o abismo do tempo, precisamos pesquisar o ambiente original da passagem.</p>
                    <h3>Ferramentas e Recursos:</h3>
                    <ul>
                        <li><strong>Dicionários Bíblicos:</strong> Fornecem informações sobre pessoas, lugares, costumes e conceitos. (Ex: Dicionário Bíblico de Easton, Dicionário Vine).</li>
                        <li><strong>Enciclopédias Bíblicas:</strong> Oferecem artigos mais aprofundados sobre tópicos importantes.</li>
                        <li><strong>Comentários de Fundo (Background):</strong> Existem comentários dedicados especificamente a explicar o contexto cultural do AT e NT (Ex: Comentário do Contexto Cultural da Bíblia de Keener & Walton).</li>
                        <li><strong>Atlas Bíblicos:</strong> Ajudam a visualizar a geografia e as distâncias, o que pode iluminar muitas narrativas.</li>
                    </ul>
                    <p>Entender, por exemplo, a relação entre um senhor e um escravo no Império Romano do primeiro século é crucial para entender passagens em Filemom ou Colossenses.</p>
                `
            },
            {
                id: 'exe-6',
                title: 'Síntese Teológica',
                content: `
                    <h2>Do Texto à Teologia</h2>
                    <p>Após a análise detalhada (desmontar o texto), o passo final da exegese é a síntese: juntar tudo para formar uma conclusão teológica.</p>
                    <h3>Perguntas para a Síntese:</h3>
                    <ul>
                        <li><strong>Ideia Central:</strong> Qual é a ideia principal e atemporal que esta passagem ensina? (Também chamada de princípio teológico).</li>
                        <li><strong>Teologia Bíblica:</strong> Como esta passagem se encaixa na grande narrativa da Bíblia? Ela desenvolve um tema da aliança? Aponta para Cristo?</li>
                        <li><strong>Teologia Sistemática:</strong> O que esta passagem contribui para o nosso entendimento geral sobre as principais doutrinas (Deus, Cristo, pecado, salvação, etc.)?</li>
                    </ul>
                    <p>A exegese cuidadosa é o fundamento sobre o qual a sã doutrina é construída. Ela nos impede de usar a Bíblia como uma mera coleção de versículos de prova, e nos ajuda a entender a mensagem coerente de Deus.</p>
                `
            },
            {
                id: 'exe-7',
                title: 'Crítica Textual Básica',
                content: `
                    <h2>Temos o Texto Original?</h2>
                    <p>A Crítica Textual é a ciência que busca restaurar o texto original das Escrituras comparando os manuscritos antigos que sobreviveram. Como não temos os autógrafos (os documentos originais), os estudiosos analisam milhares de cópias para determinar a leitura mais provável.</p>
                    <h3>Princípios Básicos:</h3>
                    <ul>
                        <li>As variantes textuais (diferenças entre os manuscritos) são, em sua esmagadora maioria, pequenas (erros de ortografia, ordem de palavras) e nenhuma delas afeta qualquer doutrina cristã central.</li>
                        <li>A leitura mais antiga geralmente é preferível.</li>
                        <li>A leitura mais difícil (que os escribas teriam mais probabilidade de tentar "corrigir") é muitas vezes a original.</li>
                    </ul>
                    <p>O grande número de manuscritos do Novo Testamento nos dá uma confiança extremamente alta de que o texto que temos hoje é uma representação fiel do original. Entender o básico da crítica textual ajuda a responder perguntas sobre por que diferentes traduções às vezes têm notas de rodapé mencionando variantes.</p>
                `
            },
            {
                id: 'exe-8',
                title: 'Uso de Ferramentas Digitais',
                content: `
                    <h2>Recursos para o Estudante Moderno</h2>
                    <p>Hoje temos acesso a ferramentas de exegese que os reformadores nem sonhariam. Elas podem acelerar e aprofundar nossa pesquisa, mas devem ser usadas com sabedoria.</p>
                    <h3>Ferramentas Populares:</h3>
                    <ul>
                        <li><strong>BibleHub.com:</strong> Um site gratuito fantástico que oferece Bíblias paralelas, interlineares (grego/hebraico com português), léxicos de Strong e comentários.</li>
                        <li><strong>Blue Letter Bible (blb.org):</strong> Outro excelente recurso gratuito com funcionalidades semelhantes.</li>
                        <li><strong>Softwares de Bíblia (Logos, Accordance, BibleWorks):</strong> Programas pagos que são extremamente poderosos, oferecendo vastas bibliotecas de comentários, livros, léxicos e ferramentas de análise linguística avançada. São um investimento significativo, mas inestimáveis para pastores e estudantes sérios.</li>
                    </ul>
                    <p><strong>Cuidado:</strong> A ferramenta não substitui o cérebro! Use esses recursos para obter dados e informações, mas o trabalho de interpretação e síntese ainda é seu, sob a guia do Espírito Santo.</p>
                `
            },
            {
                id: 'exe-9',
                title: 'Estudo de Caso: Filipenses 2:5-11',
                content: `
                    <h2>Aplicando o Processo</h2>
                    <p>Vamos aplicar o que aprendemos a uma das passagens mais ricas do Novo Testamento, muitas vezes chamada de "Hino de Cristo".</p>
                    <ol>
                        <li><strong>Análise Estrutural:</strong> A passagem tem duas partes principais: a humilhação de Cristo (vv. 6-8) e sua exaltação por Deus (vv. 9-11). O versículo 5 serve como a exortação que motiva tudo: "Tende em vós o mesmo sentimento que houve também em Cristo Jesus".</li>
                        <li><strong>Estudo de Palavras:</strong>
                            <ul>
                                <li><em>morphe</em> (v. 6, "forma"): Refere-se à natureza ou essência interior. Ele existia na essência de Deus.</li>
                                <li><em>harpagmos</em> (v. 6, "usurpação"): Uma coisa a ser agarrada ou explorada para ganho próprio. Cristo não considerou sua igualdade com Deus como algo a ser usado para seu próprio proveito.</li>
                                <li><em>ekenōsen</em> (v. 7, "esvaziou-se"): Ele não se esvaziou de sua divindade, mas de seu status e privilégios divinos, adicionando a si uma natureza humana.</li>
                            </ul>
                        </li>
                        <li><strong>Contexto Histórico-Cultural:</strong> A cultura greco-romana valorizava a honra, o status e o poder. A humildade de Cristo, um Deus que se torna um servo e morre uma morte vergonhosa de escravo (crucificação), era um conceito radical e subversivo.</li>
                        <li><strong>Síntese Teológica:</strong> Esta passagem é uma das afirmações mais fortes da divindade e humanidade de Cristo (Cristologia). Ela ensina que a exaltação vem através da humilhação e serve como o modelo supremo para a vida cristã, combatendo o orgulho e a desunião que ameaçavam a igreja de Filipos.</li>
                    </ol>
                `
            },
            {
                id: 'exe-10',
                title: 'Questionário Final: Exegese Bíblica',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre o processo prático de exegese.',
                questions: [
                    {
                        question: "Qual é a principal diferença entre hermenêutica e exegese?",
                        options: [
                            "Não há diferença.",
                            "Hermenêutica é a teoria da interpretação, enquanto exegese é a sua aplicação prática.",
                            "Exegese é o estudo do Antigo Testamento, e hermenêutica do Novo Testamento.",
                            "Hermenêutica é para leigos, exegese é para pastores."
                        ],
                        answer: "Hermenêutica é a teoria da interpretação, enquanto exegese é a sua aplicação prática."
                    },
                    {
                        question: "Na análise sintática, por que as conjunções (como 'portanto', 'porque') são importantes?",
                        options: [
                            "Elas indicam onde o parágrafo deve terminar.",
                            "Elas não são importantes e podem ser ignoradas.",
                            "Elas funcionam como placas de sinalização, mostrando a relação lógica entre as ideias.",
                            "Elas sempre apontam para o verbo principal."
                        ],
                        answer: "Elas funcionam como placas de sinalização, mostrando a relação lógica entre as ideias."
                    },
                    {
                        question: "A 'falácia da raiz' no estudo de palavras é acreditar que:",
                        options: [
                            "O significado de uma palavra é sempre o mesmo em toda a Bíblia.",
                            "O significado de uma palavra é determinado por sua origem etimológica, e não por seu uso em contexto.",
                            "Apenas as palavras na raiz hebraica são importantes.",
                            "Uma palavra pode ter todos os seus significados possíveis ao mesmo tempo."
                        ],
                        answer: "O significado de uma palavra é determinado por sua origem etimológica, e não por seu uso em contexto."
                    },
                    {
                        question: "Qual é o objetivo principal da análise histórico-cultural?",
                        options: [
                            "Provar que a Bíblia é historicamente precisa.",
                            "Memorizar datas e nomes de reis.",
                            "Entender o mundo por trás do texto para interpretar a passagem com mais precisão.",
                            "Criticar os costumes antigos por não serem modernos."
                        ],
                        answer: "Entender o mundo por trás do texto para interpretar a passagem com mais precisão."
                    },
                    {
                        question: "O que é a Crítica Textual?",
                        options: [
                            "Criticar o conteúdo teológico da Bíblia.",
                            "A ciência de comparar manuscritos antigos para determinar o texto original.",
                            "Uma forma de dizer que a Bíblia tem erros.",
                            "A análise da estrutura literária de um livro."
                        ],
                        answer: "A ciência de comparar manuscritos antigos para determinar o texto original."
                    },
                    {
                        question: "Qual é o passo final do processo exegético, onde se reúne tudo o que foi analisado?",
                        options: [
                            "Observação",
                            "Análise de palavras",
                            "Síntese Teológica",
                            "Aplicação pessoal"
                        ],
                        answer: "Síntese Teológica"
                    },
                    {
                        question: "Em Filipenses 2, o ato de Cristo se 'esvaziar' (ekenōsen) significa que Ele:",
                        options: [
                            "Deixou de ser Deus enquanto esteve na Terra.",
                            "Abriu mão de Seus privilégios e status divinos, adicionando a si uma natureza humana.",
                            "Esqueceu-se de Sua identidade divina.",
                            "Esvaziou o céu de sua presença."
                        ],
                        answer: "Abriu mão de Seus privilégios e status divinos, adicionando a si uma natureza humana."
                    }
                ]
            }
        ]
    },
    {
        id: 'generos-literarios',
        title: 'Análise de Gêneros Literários',
        description: 'A Bíblia não é um único livro, mas uma biblioteca. Aprenda a interpretar cada gênero literário de acordo com suas próprias regras.',
        lessons: [
            {
                id: 'gen-1',
                title: 'Introdução aos Gêneros',
                content: `
                    <h2>A Biblioteca de Deus</h2>
                    <p>Ignorar o gênero literário de um livro da Bíblia é como tentar ler um poema da mesma forma que se lê um manual de instruções. Cada gênero tem suas próprias "regras" de comunicação. Reconhecer o gênero de uma passagem é o primeiro passo para entendê-la corretamente.</p>
                    <p>Os principais gêneros na Bíblia incluem: Narrativa, Lei, Poesia, Sabedoria, Profecia, Evangelho, Parábola, Epístola e Apocalíptico. Este curso explorará as características de cada um.</p>
                `
            },
            {
                id: 'gen-2',
                title: 'Interpretando Narrativas',
                content: `
                    <h2>As Histórias de Deus</h2>
                    <p>Grande parte da Bíblia, especialmente o Antigo Testamento, é composta de narrativas. Elas não são apenas coleções de exemplos morais. São histórias que revelam o caráter de Deus e seu plano redentor.</p>
                    <h3>Princípios Chave:</h3>
                    <ul>
                        <li><strong>O Herói é Sempre Deus:</strong> Embora as narrativas se concentrem em personagens humanos falhos (Abraão, Davi, Pedro), o protagonista principal é sempre Deus. Pergunte: "O que essa história me ensina sobre Deus?".</li>
                        <li><strong>Descritivo vs. Prescritivo:</strong> As narrativas descrevem o que aconteceu, não necessariamente prescrevem que devemos fazer o mesmo. O fato de Davi ter tido várias esposas não é um endosso da poligamia.</li>
                        <li><strong>Busque o Ponto Teológico:</strong> O autor da narrativa tinha um propósito ao contar a história. Qual é a mensagem teológica que ele está comunicando através dos eventos?</li>
                    </ul>
                `
            },
            {
                id: 'gen-3',
                title: 'Interpretando a Lei',
                content: `
                    <h2>Os Pactos e a Lei Mosaica</h2>
                    <p>A Lei do Antigo Testamento (os primeiros cinco livros da Bíblia) foi dada a Israel em um contexto de aliança. Ela continha leis civis, cerimoniais e morais. Para o cristão, é crucial entender como a Lei se aplica hoje, à luz da nova aliança em Cristo.</p>
                    <h3>Categorias da Lei:</h3>
                    <ul>
                        <li><strong>Lei Moral:</strong> Princípios atemporais que refletem o caráter de Deus (ex: os Dez Mandamentos) continuam sendo um guia para a vida cristã, pois são reafirmados no Novo Testamento.</li>
                        <li><strong>Lei Civil:</strong> Leis que governavam a nação teocrática de Israel. Elas não se aplicam diretamente a nós, mas nos ensinam sobre a justiça de Deus.</li>
                        <li><strong>Lei Cerimonial:</strong> Leis sobre o sacerdócio, sacrifícios e pureza. Elas não se aplicam diretamente a nós porque foram perfeitamente cumpridas em Jesus Cristo.</li>
                    </ul>
                `
            },
            {
                id: 'gen-4',
                title: 'Interpretando Poesia (Salmos)',
                content: `
                    <h2>A Linguagem do Coração</h2>
                    <p>A poesia hebraica não se baseia em rima, mas em <strong>paralelismo</strong>. Esta é a ideia principal para entender os Salmos e outras porções poéticas.</p>
                    <h3>Tipos de Paralelismo:</h3>
                    <ul>
                        <li><strong>Sinonímico:</strong> A segunda linha repete a ideia da primeira com palavras diferentes (Ex: Salmo 19:1).</li>
                        <li><strong>Antitético:</strong> A segunda linha contrasta com a ideia da primeira (Ex: Provérbios 10:1).</li>
                        <li><strong>Sintético:</strong> A segunda linha desenvolve ou completa a ideia da primeira (Ex: Salmo 1:3).</li>
                    </ul>
                    <p>A poesia usa linguagem figurativa e emocional. Devemos interpretá-la de forma menos literal e mais focada nos sentimentos e na teologia que ela expressa.</p>
                `
            },
            {
                id: 'gen-5',
                title: 'Interpretando Profecia',
                content: `
                    <h2>Mensageiros da Aliança</h2>
                    <p>Os profetas do AT eram primariamente "pregadores da aliança" para Israel, chamando o povo de volta à fidelidade a Deus. A predição do futuro era parte de seu ministério, mas não a única parte.</p>
                    <h3>Princípios de Interpretação:</h3>
                    <ul>
                        <li><strong>Entenda o Contexto Histórico:</strong> A quem o profeta estava falando? Qual era o pecado que ele estava confrontando?</li>
                        <li><strong>Distinguir Profecia Cumprida e Futura:</strong> Muitas profecias messiânicas já se cumpriram em Cristo, enquanto outras aguardam sua segunda vinda.</li>
                        <li><strong>Reconhecer a Linguagem Figurada:</strong> A profecia está repleta de metáforas e símbolos.</li>
                    </ul>
                `
            },
            {
                id: 'gen-6',
                title: 'Interpretando os Evangelhos',
                content: `
                    <h2>Retratos de um Rei</h2>
                    <p>Os Evangelhos (Mateus, Marcos, Lucas, João) são um gênero único. Eles são biografias teológicas. Cada autor do Evangelho tinha um propósito específico e selecionou e organizou seus materiais para apresentar um retrato particular de Jesus.</p>
                    <ul>
                        <li><strong>Mateus:</strong> Jesus como o Messias Rei, o cumprimento das profecias do AT.</li>
                        <li><strong>Marcos:</strong> Jesus como o Servo Sofredor.</li>
                        <li><strong>Lucas:</strong> Jesus como o Salvador de todos, com ênfase nos marginalizados.</li>
                        <li><strong>João:</strong> Jesus como o Filho de Deus, divino e eterno.</li>
                    </ul>
                    <p>Ao ler os Evangelhos, compare as histórias (perícopes) entre si e pergunte por que cada autor incluiu ou omitiu certos detalhes.</p>
                `
            },
            {
                id: 'gen-7',
                title: 'Interpretando Epístolas',
                content: `
                    <h2>Cartas para a Igreja</h2>
                    <p>As epístolas (de Romanos a Judas) são cartas escritas a igrejas ou indivíduos específicos para tratar de situações concretas. Elas são "documentos ocasionais".</p>
                    <h3>Processo de Interpretação:</h3>
                    <ol>
                        <li><strong>Reconstrua a Situação:</strong> Qual problema ou questão o autor está abordando na igreja? (Ex: Divisão em Corinto, legalismo na Galácia).</li>
                        <li><strong>Identifique o Argumento:</strong> Trace o fluxo lógico do autor. Como a doutrina (primeira parte da carta) se conecta com a prática (segunda parte)?</li>
                        <li><strong>Encontre o Princípio Atemporal:</strong> Extraia o princípio teológico universal da situação específica.</li>
                        <li><strong>Aplique à Situação Atual:</strong> Como esse princípio se aplica a nós hoje?</li>
                    </ol>
                `
            },
            {
                id: 'gen-8',
                title: 'Interpretando Literatura Apocalíptica',
                content: `
                    <h2>Visões do Fim</h2>
                    <p>A literatura apocalíptica (encontrada em partes de Daniel, Ezequiel e proeminentemente em Apocalipse) usa linguagem altamente simbólica, visões e imagens cósmicas para revelar a soberania de Deus sobre a história, especialmente em tempos de perseguição.</p>
                    <h3>Chaves de Interpretação:</h3>
                    <ul>
                        <li><strong>Não interprete literalmente:</strong> Os números, cores e criaturas fantásticas são símbolos.</li>
                        <li><strong>Busque o pano de fundo do AT:</strong> A maioria dos símbolos em Apocalipse é tirada de livros como Daniel, Ezequiel e Isaías.</li>
                        <li><strong>Foque na Mensagem Central:</strong> A mensagem principal é de esperança e encorajamento: apesar do caos aparente, Deus está no controle e Cristo será vitorioso.</li>
                    </ul>
                `
            },
            {
                id: 'gen-9',
                title: 'Juntando Tudo: A Unidade da Bíblia',
                content: `
                    <h2>Uma História, Vários Gêneros</h2>
                    <p>Apesar da diversidade de gêneros, a Bíblia conta uma única e grande história: a história da redenção de Deus através de Jesus Cristo. Cada gênero contribui para essa história de uma maneira única.</p>
                    <ul>
                        <li>A <strong>Lei</strong> estabelece o padrão de santidade de Deus e nossa necessidade de um Salvador.</li>
                        <li>A <strong>Narrativa</strong> mostra Deus agindo na história para cumprir suas promessas.</li>
                        <li>A <strong>Poesia</strong> nos dá a linguagem para responder a Deus em meio às alegrias e dores da vida.</li>
                        <li>A <strong>Profecia</strong> nos dá esperança na soberania e fidelidade de Deus.</li>
                        <li>Os <strong>Evangelhos</strong> são o centro da história, onde Deus se torna homem.</li>
                        <li>As <strong>Epístolas</strong> explicam as implicações da vida, morte e ressurreição de Cristo para a nossa vida.</li>
                        <li>O <strong>Apocalíptico</strong> nos mostra o fim da história, a vitória final de Cristo.</li>
                    </ul>
                    <p>Aprender a ler cada gênero bem nos ajuda a apreciar a beleza e a profundidade de toda a Escritura.</p>
                `
            },
            {
                id: 'gen-10',
                title: 'Questionário Final: Gêneros Literários',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre os diferentes gêneros literários da Bíblia.',
                questions: [
                    {
                        question: "Qual é o princípio hermenêutico mais importante ao ler uma narrativa bíblica?",
                        options: ["Tentar imitar tudo o que os personagens fazem.", "Lembrar que Deus é o verdadeiro herói da história.", "Focar apenas nas genealogias.", "Ignorar o contexto do Antigo Testamento."],
                        answer: "Lembrar que Deus é o verdadeiro herói da história."
                    },
                    {
                        question: "Para um cristão, as leis cerimoniais do Antigo Testamento são:",
                        options: ["Ainda obrigatórias em todos os detalhes.", "Totalmente irrelevantes e devem ser ignoradas.", "Cumpridas em Cristo e, portanto, não mais obrigatórias para nós.", "Aplicáveis apenas aos judeus."],
                        answer: "Cumpridas em Cristo e, portanto, não mais obrigatórias para nós."
                    },
                    {
                        question: "A principal característica da poesia hebraica é:",
                        options: ["Rima", "Métrica Iâmbica", "Paralelismo", "Acrósticos"],
                        answer: "Paralelismo"
                    },
                    {
                        question: "Os Evangelhos são melhor descritos como:",
                        options: ["Biografias modernas e objetivas.", "Coleções de ditados de Jesus.", "Biografias teológicas, cada uma com um retrato único de Jesus.", "Livros de história sobre o Império Romano."],
                        answer: "Biografias teológicas, cada uma com um retrato único de Jesus."
                    },
                    {
                        question: "O primeiro passo para interpretar uma epístola é:",
                        options: ["Aplicar cada mandamento diretamente à sua vida.", "Ignorar a primeira metade doutrinária e focar na prática.", "Tentar reconstruir a situação original da igreja que a recebeu.", "Contar quantas vezes a palavra 'graça' aparece."],
                        answer: "Tentar reconstruir a situação original da igreja que a recebeu."
                    },
                    {
                        question: "Qual é a abordagem correta para a literatura apocalíptica, como o livro de Apocalipse?",
                        options: ["Interpretar tudo literalmente, incluindo os dragões e as bestas.", "Focar na mensagem central de esperança e soberania de Deus, reconhecendo a linguagem simbólica.", "Usá-la para prever datas exatas de eventos futuros.", "Ignorá-la por ser muito confusa."],
                        answer: "Focar na mensagem central de esperança e soberania de Deus, reconhecendo a linguagem simbólica."
                    }
                ]
            }
        ]
    },
    {
        id: 'pregacao-avancada',
        title: 'Pregação Expositiva Avançada',
        description: 'Vá além dos fundamentos. Aprenda técnicas avançadas para estruturar sermões, pregar séries, e conectar a grande narrativa da Bíblia em cada mensagem.',
        lessons: [
            {
                id: 'pa-1',
                title: 'Do Texto à Teologia Bíblica',
                content: `
                    <h2>Encontrando o Lugar na Grande História</h2>
                    <p>A pregação expositiva avançada vai além de explicar o que um texto significa; ela conecta esse significado à grande narrativa da redenção que se desenrola de Gênesis a Apocalipse. Isso é Teologia Bíblica.</p>
                    <p>Antes de pregar, pergunte-se:</p>
                    <ul>
                        <li><strong>Onde esta passagem se encaixa na linha do tempo da redenção?</strong> (Criação, Queda, Redenção, Consumação).</li>
                        <li><strong>Como este texto aponta para Cristo?</strong> Jesus disse que todo o AT fala sobre Ele (Lucas 24:27). Encontre os temas, tipos e promessas que se cumprem em Jesus.</li>
                        <li><strong>Como este texto desenvolve temas da aliança?</strong> (Aliança com Noé, Abraão, Moisés, Davi, Nova Aliança).</li>
                    </ul>
                    <p>Isso impede que seus sermões se tornem meras lições de moral e os transforma em proclamações do evangelho.</p>
                `
            },
            {
                id: 'pa-2',
                title: 'Estruturas de Sermão (Além dos 3 Pontos)',
                content: `
                    <h2>Deixando o Texto Ditar a Forma</h2>
                    <p>O sermão de "três pontos e um poema" pode ser útil, mas nem sempre honra a estrutura do texto. Um pregador avançado aprende a moldar seu sermão à forma literária da passagem.</p>
                    <h3>Estruturas Alternativas:</h3>
                    <ul>
                        <li><strong>A Estrutura da Narrativa:</strong> Introduza a tensão, desenvolva a complicação, apresente a resolução (geralmente em Cristo) e conclua com a aplicação.</li>
                        <li><strong>A Estrutura Fenomenológica (A Ideia Caída):</strong> Comece com uma condição humana caída com a qual todos se identificam, mostre como o texto diagnostica essa condição, e então apresente a solução do evangelho.</li>
                        <li><strong>A Estrutura do Paralelismo:</strong> Se o texto é um poema (como um Salmo), use o paralelismo (sinonímico, antitético) para estruturar seus pontos.</li>
                    </ul>
                    <p>A forma do sermão deve servir ao conteúdo, não o contrário.</p>
                `
            },
            {
                id: 'pa-3',
                title: 'Pregando Séries Expositivas',
                content: `
                    <h2>A Jornada Através de um Livro</h2>
                    <p>Pregar séries contínuas através de livros da Bíblia é uma das maneiras mais eficazes de ensinar toda a Palavra de Deus e de treinar sua congregação a ler a Bíblia por si mesma.</p>
                    <h3>Planejando uma Série:</h3>
                    <ol>
                        <li><strong>Escolha o Livro:</strong> Ore e considere as necessidades de sua congregação. Varie entre AT e NT, e diferentes gêneros.</li>
                        <li><strong>Estude o Livro Inteiro:</strong> Antes de pregar o primeiro sermão, leia o livro várias vezes para entender seu propósito geral, temas e estrutura.</li>
                        <li><strong>Divida em Unidades de Pregação (Perícopes):</strong> Divida o livro em unidades de pensamento lógicas. Cada unidade se tornará um sermão.</li>
                        <li><strong>Mantenha o Foco:</strong> Em cada sermão, lembre a congregação onde vocês estão no argumento geral do livro.</li>
                    </ol>
                `
            },
            {
                id: 'pa-4',
                title: 'O Sermão Centrado em Cristo (Cristocêntrico)',
                content: `
                    <h2>Todo Sermão é Sobre Jesus</h2>
                    <p>Pregar de forma cristocêntrica não significa forçar Jesus em cada versículo do Antigo Testamento. Significa mostrar como cada texto, em seu próprio contexto, aponta para a necessidade ou a provisão de Cristo.</p>
                    <h3>Como Pregar Cristo do AT:</h3>
                    <ul>
                        <li><strong>Tipologia:</strong> Mostre como pessoas (Adão, Moisés), eventos (Êxodo) e instituições (Templo, sacerdócio) prefiguram a pessoa e obra de Cristo.</li>
                        <li><strong>Promessa-Cumprimento:</strong> Trace as promessas da aliança através do AT e mostre seu cumprimento final em Jesus.</li>
                        <li><strong>Teologia Bíblica:</strong> Mostre como o texto se encaixa na história da redenção que culmina em Cristo. Por exemplo, a lei moral nos mostra nosso pecado e nossa necessidade de um Salvador; as narrativas de fracasso de Israel nos mostram nossa necessidade de um verdadeiro Rei.</li>
                    </ul>
                `
            },
            {
                id: 'pa-5',
                title: 'Lidando com Textos Difíceis',
                content: `
                    <h2>A Coragem de Pregar a Palavra Toda</h2>
                    <p>Pregadores expositivos não podem se dar ao luxo de pular passagens difíceis - textos sobre julgamento, violência no AT, ou doutrinas complexas.</p>
                    <h3>Abordagens para Textos Difíceis:</h3>
                    <ul>
                        <li><strong>Faça o Trabalho Exegético Extra:</strong> Não seja superficial. Consulte os melhores comentários e recursos para entender as nuances.</li>
                        <li><strong>Seja Humilde:</strong> Admita quando uma passagem é difícil. Sua congregação apreciará sua honestidade.</li>
                        <li><strong>Confie na Suficiência da Escritura:</strong> Acredite que até os textos difíceis são úteis para o ensino (2 Tim 3:16).</li>
                        <li><strong>Conecte ao Evangelho:</strong> Mostre como até mesmo as passagens de julgamento revelam a santidade de Deus e, por contraste, a beleza de Sua graça em Cristo.</li>
                    </ul>
                `
            },
            {
                id: 'pa-6',
                title: 'A Melodia do Evangelho em Cada Gênero',
                content: `
                    <h2>O Som Consistente da Graça</h2>
                    <p>O evangelho não é apenas um tópico, é a "melodia" que deve ser ouvida em cada sermão, independentemente do gênero do texto.</p>
                    <ul>
                        <li><strong>Na Lei:</strong> A melodia do evangelho é ouvida quando a Lei expõe nosso pecado e nos leva a Cristo, nosso cumpridor da Lei.</li>
                        <li><strong>Na Narrativa:</strong> A melodia é ouvida na fidelidade de Deus a um povo infiel, apontando para a fidelidade final em Cristo.</li>
                        <li><strong>Na Sabedoria:</strong> A melodia é ouvida quando vemos que Cristo é a personificação da sabedoria de Deus (1 Cor 1:30).</li>
                        <li><strong>Nos Profetas:</strong> A melodia é ouvida nas promessas de um novo coração e uma nova aliança, cumpridas em Jesus.</li>
                    </ul>
                `
            },
            {
                id: 'pa-7',
                title: 'A Entrega do Sermão: Paixão e Clareza',
                content: `
                    <h2>A Verdade em Chamas</h2>
                    <p>Um sermão expositivo não é uma palestra acadêmica. A verdade exegética deve ser comunicada com paixão e clareza que se conectem tanto com a mente quanto com o coração.</p>
                    <h3>Elementos de uma Boa Entrega:</h3>
                    <ul>
                        <li><strong>Contato Visual:</strong> Conecte-se com sua congregação.</li>
                        <li><strong>Variedade Vocal:</strong> Use o tom, o ritmo e o volume para adicionar ênfase e manter o interesse.</li>
                        <li><strong>Autenticidade:</strong> Seja você mesmo. Deixe que a verdade do texto afete você genuinamente, e essa paixão será contagiante.</li>
                        <li><strong>Clareza:</strong> Use linguagem simples. Evite o jargão teológico. O objetivo é ser entendido, não impressionar.</li>
                    </ul>
                `
            },
            {
                id: 'pa-8',
                title: 'Chamando à Resposta: A Arte do Apelo',
                content: `
                    <h2>O "Portanto" do Sermão</h2>
                    <p>Cada sermão deve chamar a uma resposta. O "apelo" não se limita a um convite para a salvação, mas inclui todos os tipos de aplicação que o texto exige.</p>
                    <h3>Tipos de Resposta a Chamar:</h3>
                    <ul>
                        <li><strong>Arrependimento e Fé:</strong> Para os não crentes.</li>
                        <li><strong>Adoração e Louvor:</strong> Em resposta ao caráter de Deus.</li>
                        <li><strong>Confiança e Descanso:</strong> Em resposta às promessas de Deus.</li>
                        <li><strong>Obediência Específica:</strong> Em resposta aos mandamentos de Deus.</li>
                        <li><strong>Mudança de Pensamento:</strong> Arrependimento intelectual, alinhando nossas crenças com a verdade do texto.</li>
                    </ul>
                    <p>A conclusão deve ser clara, direta e motivada pelo evangelho.</p>
                `
            },
            {
                id: 'pa-9',
                title: 'Autoavaliação e Crescimento Contínuo',
                content: `
                    <h2>O Pregador que Nunca Para de Aprender</h2>
                    <p>Os melhores pregadores são aprendizes ao longo da vida. O crescimento na pregação requer uma autoavaliação honesta e a disposição para melhorar.</p>
                    <h3>Métodos para Crescimento:</h3>
                    <ul>
                        <li><strong>Ouça seus próprios sermões:</strong> É doloroso, mas incrivelmente útil para identificar tiques verbais, problemas de clareza e ritmo.</li>
                        <li><strong>Busque feedback construtivo:</strong> Peça a mentores ou irmãos de confiança para avaliar seus sermões de forma honesta, tanto no conteúdo quanto na entrega.</li>
                        <li><strong>Leia amplamente:</strong> Leia bons livros sobre pregação, teologia e outros assuntos para enriquecer sua mente e suas ilustrações.</li>
                        <li><strong>Ouça bons pregadores:</strong> Aprenda com outros, não para imitá-los, mas para ser inspirado e afiado por eles.</li>
                    </ul>
                `
            },
            {
                id: 'pa-10',
                title: 'Questionário Final: Pregação Avançada',
                type: 'quiz',
                content: 'Teste seu conhecimento sobre técnicas avançadas de pregação expositiva.',
                questions: [
                    {
                        question: "O que significa pregar um texto à luz da 'Teologia Bíblica'?",
                        options: ["Ignorar o contexto do Antigo Testamento.", "Conectar o significado do texto à grande narrativa da redenção em Cristo.", "Focar apenas nas implicações morais.", "Aplicar o texto apenas à igreja primitiva."],
                        answer: "Conectar o significado do texto à grande narrativa da redenção em Cristo."
                    },
                    {
                        question: "Uma estrutura de sermão 'fenomenológica' ou da 'ideia caída' começa com:",
                        options: ["Um ponto doutrinário profundo.", "A solução do evangelho.", "Uma condição humana universal de quebrantamento ou pecado.", "A biografia do autor do livro."],
                        answer: "Uma condição humana universal de quebrantamento ou pecado."
                    },
                    {
                        question: "Qual é a maior vantagem de pregar séries expositivas através de livros da Bíblia?",
                        options: ["É mais fácil e rápido de preparar.", "Permite que o pregador evite tópicos difíceis.", "Ensina a congregação a ler a Bíblia e garante que todo o conselho de Deus seja pregado.", "Impressiona as pessoas com o conhecimento do pregador."],
                        answer: "Ensina a congregação a ler a Bíblia e garante que todo o conselho de Deus seja pregado."
                    },
                    {
                        question: "Pregar Cristo a partir de uma passagem da Lei do Antigo Testamento geralmente envolve mostrar que:",
                        options: ["Devemos seguir todas as leis cerimoniais hoje.", "A Lei é irrelevante para os cristãos.", "A Lei revela nossa incapacidade de sermos justos e aponta para nossa necessidade de Cristo.", "Os sacrifícios de animais ainda são eficazes."],
                        answer: "A Lei revela nossa incapacidade de sermos justos e aponta para nossa necessidade de Cristo."
                    },
                    {
                        question: "Ao enfrentar um texto difícil sobre o julgamento de Deus, o pregador deve:",
                        options: ["Pular o texto e pregar sobre um mais fácil.", "Pregá-lo fielmente, mostrando como ele revela a santidade de Deus e a beleza da graça em Cristo.", "Suavizar a mensagem para não ofender ninguém.", "Focar apenas no aspecto histórico e evitar a aplicação."],
                        answer: "Pregá-lo fielmente, mostrando como ele revela a santidade de Deus e a beleza da graça em Cristo."
                    }
                ]
            }
        ]
    }
];

export const QUESTION_BANK: QuestionCategory[] = [
    {
        id: 'hermeneutica',
        name: 'Hermenêutica',
        questions: [
            {
                question: "O processo de impor as próprias ideias sobre o texto bíblico, em vez de extrair o significado do próprio texto, é conhecido como:",
                options: ["Exegese", "Eisegese", "Anacronismo", "Tipologia"],
                answer: "Eisegese",
                explanation: "Eisegese é o oposto da exegese. É quando o intérprete 'coloca para dentro' do texto suas próprias ideias, em vez de 'tirar para fora' o significado pretendido pelo autor."
            },
            {
                question: "Qual é a 'regra de ouro' da interpretação bíblica?",
                options: ["A Bíblia interpreta a si mesma", "O contexto determina o significado", "Tudo deve ser interpretado literalmente", "A aplicação é mais importante que a interpretação"],
                answer: "O contexto determina o significado",
                explanation: "A regra mais fundamental da hermenêutica é que um texto sem contexto é um pretexto. O significado de qualquer versículo é controlado pelo seu ambiente literário, histórico e cultural."
            },
            {
                question: "Quando a Bíblia atribui características humanas a Deus, como 'a mão do Senhor', que figura de linguagem está sendo usada?",
                options: ["Metáfora", "Hipérbole", "Símile", "Antropomorfismo"],
                answer: "Antropomorfismo",
                explanation: "Antropomorfismo (do grego 'anthropos' = homem, 'morphe' = forma) é a atribuição de forma ou características humanas a Deus para nos ajudar a entender Seu caráter e ações."
            }
        ]
    },
    {
        id: 'pregacao-expositiva',
        name: 'Pregação Expositiva',
        questions: [
            {
                question: "Qual é o princípio central da pregação expositiva?",
                options: [
                    "O sermão deve ser sempre temático.",
                    "A ideia principal do texto deve ser a ideia principal do sermão.",
                    "O sermão deve ter exatamente três pontos.",
                    "O pregador deve usar muitas ilustrações."
                ],
                answer: "A ideia principal do texto deve ser a ideia principal do sermão.",
                explanation: "A marca de um sermão verdadeiramente expositivo é a fidelidade ao texto. O objetivo do pregador é expor o que já está no texto, garantindo que o ponto principal do sermão seja o mesmo que o ponto principal da passagem bíblica."
            },
            {
                question: "Segundo Haddon Robinson, a 'Grande Ideia' de um sermão consiste em duas partes. Quais são elas?",
                options: [
                    "Introdução e Conclusão",
                    "Assunto e Complemento",
                    "Ilustração e Aplicação",
                    "Doutrina e Dever"
                ],
                answer: "Assunto e Complemento",
                explanation: "A 'Grande Ideia' é uma frase única que resume a mensagem. Ela é formada pelo 'Assunto' (sobre o que o texto está falando?) e o 'Complemento' (o que o texto está dizendo sobre o assunto?)."
            }
        ]
    },
     {
        id: 'teologia-sistematica',
        name: 'Teologia Sistemática',
        questions: [
            {
                question: "O que a doutrina da 'Justificação' afirma?",
                options: [
                    "É o processo de se tornar mais santo ao longo da vida.",
                    "É um ato legal de Deus em que Ele declara o pecador justo.",
                    "É o ato de Deus nos dar uma nova vida espiritual.",
                    "É a escolha de Deus daqueles que serão salvos."
                ],
                answer: "É um ato legal de Deus em que Ele declara o pecador justo.",
                explanation: "A justificação é um evento único e legal, não um processo. Baseia-se na obra de Cristo, onde nossa culpa é imputada a Ele e Sua justiça é imputada a nós. A santificação é o processo contínuo de crescimento."
            },
            {
                question: "A doutrina da Trindade ensina que Deus é:",
                options: [
                    "Três deuses em uma aliança.",
                    "Uma pessoa que se manifesta em três modos.",
                    "Um Deus que existe eternamente em três pessoas.",
                    "Um Deus com três nomes diferentes."
                ],
                answer: "Um Deus que existe eternamente em três pessoas.",
                explanation: "A definição ortodoxa da Trindade é que existe um só Deus, e este único Deus existe eternamente como três pessoas distintas: o Pai, o Filho e o Espírito Santo. Cada pessoa é plenamente Deus."
            }
        ]
    },
    {
        id: 'generos-literarios',
        name: 'Gêneros Literários',
        questions: [
            {
                question: "Ao ler uma narrativa do Antigo Testamento, qual erro comum o intérprete deve evitar?",
                options: [
                    "Ver Deus como o protagonista.",
                    "Tratar os personagens como meros exemplos morais (bons ou maus).",
                    "Considerar o contexto histórico e cultural.",
                    "Procurar como a história se encaixa no plano de redenção."
                ],
                answer: "Tratar os personagens como meros exemplos morais (bons ou maus).",
                explanation: "Um erro comum é o moralismo, que reduz as narrativas a simples lições de 'faça' ou 'não faça' baseadas nos personagens. O foco principal deve ser o que a história revela sobre o caráter e os propósitos de Deus."
            },
            {
                question: "Qual é a abordagem correta para as leis civis e cerimoniais do Pentateuco para o cristão hoje?",
                options: [
                    "Devem ser seguidas literalmente.",
                    "Foram completamente cumpridas em Cristo e não nos obrigam da mesma forma que obrigavam Israel.",
                    "São as únicas leis que os cristãos precisam seguir.",
                    "São totalmente irrelevantes e sem valor."
                ],
                answer: "Foram completamente cumpridas em Cristo e não nos obrigam da mesma forma que obrigavam Israel.",
                explanation: "As leis civis governavam Israel como nação, e as leis cerimoniais apontavam para o sacrifício de Cristo. Com a vinda de Cristo e a Nova Aliança, essas leis foram cumpridas. Elas ainda nos ensinam sobre o caráter de Deus, mas não se aplicam diretamente a nós."
            }
        ]
    }
];
