class Questions {
    constructor(question, answeres) {
        this.question = question;
        this.answeres = answeres;
    }
}

class Answeres {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.f = 0;
        this.h = 0;
        this.g = 0;
    }

    set(answerNumber, value) {
        switch (answerNumber) {
            case 0: this.a = value; break;
            case 1: this.b = value; break;
            case 2: this.c = value; break;
            case 3: this.d = value; break;
            case 4: this.e = value; break;
            case 5: this.f = value; break;
            case 6: this.g = value; break;
            case 7: this.h = value; break;
        }
    }

    getAvailable() {
        return 10 - (this.a + this.b + this.c + this.d + this.e + this.f + this.g + this.h);
    }
}

class Result {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class ResultType {
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }
}

var types = [
    new ResultType('PR - Praktyczny Realizator', 'To osoba praktyczna, operatywna, nastawiona na konkretne działanie. Potrafi ocenić realność i szanse powodzenia projektu oraz wdrażać plany i marzenia w czyn. Jest doskonałym wykonawcą projektów wymyślonych przez innych. W pracy zespołowej koncentruje się na organizowaniu pracy i praktycznym wykorzystaniu zasobów posiadanych przez zespół (ludzie i ich umiejętności, narzędzia, środki, metody).'),
    new ResultType('KL - Koordynujący Lider', 'To ktoś potrafiący zwiększyć efektywność zespołu poprzez właściwą koordynację działań jej członków. Istotą jego postępowania jest zachęta, przekonywanie, godzenie kontrowersji, słuchanie opinii innych. Ma zdolność wyciągania i angażowania w działanie wszystkich członków zespołu tak, aby jak najlepiej wykorzystać ich indywidualne możliwości.'),
    new ResultType('AK - Ambitny Komendant', 'To osoba o wysokiej motywacji i potrzebie osiągnięć próbująca zmusić zespół do stawiania coraz ambitniejszych celów i bardziej intensywnego działania. Jako typ ambitnego lidera gromi innych za opieszałość, spoczywanie na laurach i bezwładność. Jednak  w odróżnieniu od Koordynatora istotą jego działania jest ostra krytyka, wymuszanie i obrażanie, co rodzi opór i wywołuje sytuacje konfliktowe.'),
    new ResultType('KP - Kreatywny Pomysłodawca', 'Jest to osoba kreatywna, opierająca się na wyobraźni i niestandardowym podejściu do zagadnień. Lubi pracować w samotności i skupiać się na poszukiwaniu nowatorskich rozwiązań problemów przed którymi stanęła grupa. Często w swoich pomysłach nie liczy się z realiami obowiązujących procedur i ograniczeń, za co jest krytykowana przez praktycznie nastawionych członków zespołu.'),
    new ResultType('WŁ - Wszędobylski Łącznik', 'To osoba posiadająca rozliczne kontakty, dzięki którym potrafi dotrzeć do różnych miejsc i informacji przydatnych dla zespołu. Jest osobą niezwykle uzdolnioną interpersonalnie, entuzjastyczną i przyjazną, dzięki czemu jest bardzo dobrze odbierana przez innych. Ma zdolności do kontaktowania ludzi i uczestniczenia w negocjacjach. Jest też bardzo dobrym ambasadorem grupy na zewnątrz.'),
    new ResultType('RA - Racjonalny Analityk', 'Jest to osoba o głębokiej wnikliwości i wysokiej inteligencji, krytyczna i obiektywna, z natury małomówna. Zwykle przyjmuje w zespole pozycję osoby stojącej z boku  i obserwującej. Wkracza wtedy, gdy ma zapaść rozstrzygająca decyzja. Jest nieoceniona w bezstronnej, rzeczowej analizie faktów, która pomaga grupie w wypracowaniu najlepszej decyzji, w sytuacji burzliwego ścierania się przeciwstawnych pomysłów.'),
    new ResultType('DZ - Dusza Zespołu', 'Jest to osoba ciepłą, łatwo nawiązująca kontakty, wrażliwa na emocje innych. Najważniejsze jest dla niej utrzymanie dobrej atmosfery w zespole. Dzięki swym zdolnościom dyplomatycznym pomaga neutralizować problemy interpersonalne w zespole, likwidować napięcia i łagodzić konflikty. Szczególnie przydatna w sytuacjach wewnętrznej walki pomiędzy członkami zespołu, nie konstruktywnej dyskusji, nadmiernej krytyki czy nagonki na jednego z członków zespołu.'),
    new ResultType('FP - Finiszujący Perfekcjonista', 'To osoba bardzo skrupulatna i zdyscyplinowana, skoncentrowana na jakości i metodycznym postępowaniu z dbałością o szczegóły. Czuje się odpowiedzialna za przebieg i wynik pracy zespołu. Stale zadręcza się niepokojem o to, czy wszystko idzie dobrze i stara się zapobiegać katastrofom poprzez sprawdzanie detali. Lubi doprowadzać sprawy do końca i „dopinać na ostatni guzik”'),
]

var questions = [
    // 1
    new Questions("Myślę, że na mój wkład w pracę zespołu składa się...",
        [
            "Moja zdolność szybkiego dostrzegania i wykorzystywania nowych możliwości",
            "Umiejętność współpracy z różnego typu osobami",
            "Generowanie pomysłów, które jest jedną z moich naturalnych właściwości",
            "To, że potrafię oddać głos innym, jeżeli widzę, że mają coś wartościowego co mogą wnieść do pracy grupy",
            "Moja efektywność, zdolność do „podążania do przodu”, powodująca doprowadzenie sprawy do końca",
            "Jeżeli coś może w efekcie doprowadzić grupę do wartościowego rezultatu robię to, nawet kosztem czasowej nie popularności",
            "Moje wyczucie tego, co jest realne i możliwe do wykonania",
            "To, że potrafię bez uprzedzeń czy nastawień wziąć pod uwagę różne, alternatywne metody działania, różne drogi prowadzące do rozwiązań"
        ]
    ),
    // 2
    new Questions("To, co mi głównie przeszkadza w pracy w zespole, to...",
        [
            "Zła organizacja i złe prowadzenie spotkań",
            "Gdy osoby, które mają coś ważnego do powiedzenia nie są dopuszczane do głosu przez innych",
            "Że, gdy pojawią się nowe idee ja zbytnio się rozpalam i rozgaduję, podczas gdy grupa idzie do przodu",
            "Mój obiektywny punkt widzenia, który utrudnia mi przyłączenie się z entuzjazmem i pełną gotowością do kolegów",
            "Jestem postrzegany jako zbytnio naciskający i autorytarny w sytuacjach, gdy pojawia się potrzeba konkretnych dokonań",
            "Jest mi trudno kierować zespołem, może dlatego, że jestem zbytnio wrażliwy na atmosferę grupy",
            "Mam skłonność do tego, aby zbytnio angażować się myślowo w nowe pomysły przez to tracę kontakt z tym co się dzieje",
            "Moi koledzy postrzegają mnie jako niepotrzebnie zamartwiającego się detalami i rozważeniem tego, że coś się może nie udać"
        ]
    ),
    // 3
    new Questions("Kiedy jestem zaangażowany w projekt wspólnie z innymi:",
        [
            "Zwykle potrafię wpływać na innych bez wywierania presji",
            "Moja czujność zapobiega popełnianiu błędów czy zaniedbań",
            "Często wywieram nacisk na podejmowanie działań w celu uniknięcia straty czasu lub w trosce o to, aby nie zagubić głównego tematu",
            "Można liczyć na to, że wniosę coś oryginalnego",
            "Jestem zawsze gotów wesprzeć czyjąś sugestię, jeżeli jest ona korzystna dla wspólnego interesu",
            "Zawsze poszukuję nowych trendów, świeżych pomysłów, możliwości rozwoju",
            "Moja zdolność trzeźwej oceny sytuacji pomaga grupie w podejmowaniu właściwych decyzji",
            "Można polegać na tym, że sprawdzę, czy całość pracy jest dobrze zorganizowana"
        ]
    ),
    // 4
    new Questions('Moje charakterystyczne podejście do pracy w zespole polega na tym, że...', 
        [
            'Jestem szczególnie zainteresowany poznaniem innych osób',
            'Nie mam oporów przed rzucaniem wyzwania poglądom innych i byciem w mniejszości w związku z właściwymi poglądami',
            'Zazwyczaj znajduję dobre argumenty dla obalenia nierozsądnej propozycji',
            'Myślę, że mam talent do wdrażania, wprowadzania w życie planów opracowanych przez zespół',
            'Mam tendencję do pomijania rzeczy oczywistych i wychodzenia z czymś nieoczekiwanym',
            'Wnoszę trochę perfekcjonizmu do każdego działania, jakie podejmuję w zespole',
            'Chętnie nawiązuję pożyteczne kontakty poza grupą',
            'Chociaż jestem zainteresowany różnymi punktami widzenia, nie waham się z podjęciem decyzji, jeżeli musi być ona podjęta'
        ]
    ),
    // 5
    new Questions('W swoich działaniach szczególnie lubię...', 
        [
            'Analizować sytuację i rozważać wszystkie możliwości wyboru',
            'Znajdować praktyczne, skuteczne rozwiązania problemów',
            'Umacniać dobre więzi w zespole, budować współpracę',
            'Mieć możliwość wywierania wpływu na decyzję',
            'Spotykać ludzi, którzy mają coś nowego do zaproponowania',
            'Skłaniać innych do porozumienia w sprawie przyjęcia wspólnego kierunku działania',
            'Móc skoncentrować się w pełni na swoim wycinku zadań',
            'Mieć takie pole działania, które pozwala mi wykorzystać wyobraźnię'
        ]
    ),
    // 6
    new Questions('Kiedy nagle dostaję trudne zadanie, mało czasu i nieprzychylnych ludzi...', 
        [
            'Chciałbym móc zaszyć się w kącie i samemu znaleźć wyjście z impasu przed rozpoczęciem działania',
            'Nawiąże natychmiast kontakt z osobami o najbardziej pozytywnym podejściu',
            'Szukałbym sposobu na zredukowanie własnego obciążenia zadaniem poprzez dobrze przemyślane rozłożenie go na pozostałych',
            'Moje naturalne  poczucie presji czasu, czy presji sytuacji daje mi pewność, że zmieszczę się w czasie',
            'Wierzę, że pozostanę spokojny i zachowam zdolność do logicznego myślenia',
            'Pomimo presji mogę pracować systematycznie trzymając się obranego kierunku',
            'Byłbym gotowy przejąć kierownictwo w sytuacji gdy czuję, że grupa nie robi postępów',
            'Otworzyłbym dyskusją, aby podzielić się pomysłami i spowodować, by ruszyć coś do przodu'
        ]
    ),
    // 7
    new Questions('Mam problemy w pracy w grupie w związku z tym, że...', 
        [
            'Okazuję niecierpliwość w stosunku do tych, którzy blokują pójście do przodu',
            'Jestem krytykowny za zbytnią drobiazgowość, powolność w decyzjach, zbytnie analizowanie i nieumiejętność oparcia się na własnej intuicji',
            'Przywiązuję zbyt dużą wagę do poprawności i jakości, co często opóźnia realizację zadań',
            'Mam skłonności do szybkiego nudzenia się, mobilizują mnie do działania tylko intrygujące tematy',
            'Mam trudność z rozpoczęciem działania, dopóki cele nie są jasno określone',
            'Czasami mam kłopoty z wyjaśnieniem innym złożonych, skomplikowanych pomysłów, które mi się nasunęły',
            'Jestem świadomy, że wymagam od innych tego, czego sam nie mogę zrobić',
            'Waham się wypowiadać swoje argumenty, kiedy stoję naprzeciw realnej opozycji'
        ]
    )
];

var answeres = [
    new Answeres(), new Answeres(), new Answeres(), new Answeres(),
    new Answeres(), new Answeres(), new Answeres(),
]

function slide(groupNumber, answerNumber, value) {
    let numberValue = Number(value);
    // if (numberValue <= 0)
    //     return;

    let answerGroup = answeres[groupNumber];
    answerGroup.set(answerNumber, numberValue);

    let available = answerGroup.getAvailable();
    // przeliczanie ograniczeń dla suwaków
    for(let i = 0; i < 8; i++) {
        let sliderDom = document.getElementById(`slider-${groupNumber}-${i}`);
        let currentValue = Number(sliderDom.value);
        let widthWithAvailable = Math.max(currentValue+available,available);

        let maxAttribute = sliderDom.attributes.getNamedItem('max');
        sliderDom.style.width = widthWithAvailable*10 + '%';
        maxAttribute.value = widthWithAvailable;
    }
}

function calculateResults() {
    let a1 = answeres[0];
    let a2 = answeres[1];
    let a3 = answeres[2];
    let a4 = answeres[3];
    let a5 = answeres[4];
    let a6 = answeres[5];
    let a7 = answeres[6];

    let pr = a1.g + a2.a + a3.h + a4.d + a5.b + a6.f + a7.e;
    let kl = a1.d + a2.b + a3.a + a4.h + a5.f + a6.c + a7.g;
    let ak = a1.f + a2.e + a3.c + a4.b + a5.d + a6.g + a7.a;
    let kp = a1.c + a2.g + a3.d + a4.e + a5.h + a6.a + a7.f;
    let wl = a1.a + a2.c + a3.f + a4.g + a5.e + a6.h + a7.d;
    let ra = a1.h + a2.d + a3.g + a4.c + a5.a + a6.e + a7.b;
    let dz = a1.b + a2.f + a3.e + a4.a + a5.c + a6.b + a7.h;
    let fp = a1.e + a2.h + a3.b + a4.f + a5.g + a6.d + a7.c;
    
    let resultWithTypes = [
        new Result('PR - Praktyczny Realizator', pr),
        new Result('KL - Koordynujący Lider', kl),
        new Result('AK - Ambitny Komendant', ak),
        new Result('KP - Kreatywny Pomysłodawca', kp),
        new Result('WŁ - Wszędobylski Łącznik', wl),
        new Result('RA - Racjonalny Analityk', ra),
        new Result('DZ - Dusza Zespołu', dz),
        new Result('FP - Finiszujący Perfekcjonista', fp),
    ];
    let ordered = resultWithTypes.sort((a, b) => b.value - a.value);

    let questionsDiv = document.getElementById('questions');
    questionsDiv.style.display = 'none';

    let introductionDiv = document.getElementById('introduction');
    introductionDiv.style.display = 'none';

    window.scrollTo(0, 0);

    let resultsTableHtml = generateResultsTable(ordered);
    let definitionsTableHtml = generateDefinitions();

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h1>Wyniki</h1>' + resultsTableHtml + definitionsTableHtml;
}

function generateDefinitions() {
    /*
    <div class="definitions">
        <div class="single-definition">
            <h2>KL - Koordynujący Lider</h2>
            <p>Opis</p>
        </div>
    </div> 
    */

    let definitionsHtml = '';
    types.forEach(type => {
        definitionsHtml += `<div class="single-definition"><h2>${type.type}</h2><p>${type.description}</p></div>`;
    });

    let definitionsFinalHtml = `<div class="definitions">${definitionsHtml}</div>`;
    return definitionsFinalHtml;
}

function generateResultsTable(orderedResults) {
    /*
    <table class="results-table">
        <thead>
            <th>Rola</th>
            <th>Punkty</th>
            <th>Procent</th>
        </thead>
        <tbody>
            <tr>
                <td>KL - Koordynujący Lider</td>
                <td>15</td>
                <td>55%</td>
            </tr>
        </tbody>
    </table>
    */
   let resultsTableContent = '';
   orderedResults.forEach(result => {
    resultsTableContent += `<tr><td>${result.type}</td><td>${result.value}</td><td>${Math.round(result.value / 70 * 100)}%</td></tr>`;
   });
   let resultsTableHtml = `<table class="results-table"><thead><th>Rola</th><th>Punkty</th><th>Procent</th></thead><tbody>${resultsTableContent}</tbody></table>`;
   return resultsTableHtml;
}

function generateQuestionsHtml() {
    let sumHtml = '';
    for(let i = 0; i < questions.length; i++)
        sumHtml += getQuestionHtml(i);

    sumHtml += "<div class='submit-section'><button class='submit' onclick='calculateResults()'>Wyświetl wyniki</button></div>";
    return sumHtml
}

function getQuestionHtml(questionIndex) {
    /*
    <div class="question">
        <h2>Myślę, że na mój wkład w pracę zespołu składa się</h2>
        <div class="answer-block">
            <p>Moja zdolność szybkiego dostrzegania i wykorzystywania nowych możliwości</p>
            <div class="slider">
                <input type="range" min="0" max="10" step="1" value="0" id="slider-1-1" list="values" onchange="slide(1, 1, this.value)">
                <datalist id="values">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                    <option value="6" label="6"></option>
                    <option value="7" label="7"></option>
                    <option value="8" label="8"></option>
                    <option value="9" label="9"></option>
                    <option value="10" label="10"></option>
                </datalist>
            </div>
        </div>
    </div>
    */
   let answeresHtml = '';
   let question = questions[questionIndex];
   for(let i = 0; i < 8; i++) {
        let singleAnswerHtml = `<input type="range" min="0" max="10" step="1" value="0" id="slider-${questionIndex}-${i}" list="values" onchange="slide(${questionIndex}, ${i}, this.value)">`;
        singleAnswerHtml += `<datalist id="values">${[...Array(11).keys()].map(v => `<option value="${v}" label="${v}"></option>`).reduce((sum, curr) => sum += curr)}</datalist>`;
        
        answeresHtml += `<div class="answer"><p>${question.answeres[i]}</p><div class="slider">${singleAnswerHtml}</div></div>`;
   }
   let questionHtml = `<div class="question"><h2>${question.question}</h2><div class="answer-block">${answeresHtml}</div></div>`;
   return questionHtml;
}