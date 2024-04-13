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
    if (numberValue <= 0)
        return;

    let answerGroup = answeres[groupNumber];
    answerGroup.set(answerNumber, numberValue);

    let available = answerGroup.getAvailable();
    // przeliczanie ograniczeń dla suwaków
    for(let i = 1; i < 8; i++) {
        let sliderDom = document.getElementById(`slider-${groupNumber}-${i}`);
        let currentValue = Number(sliderDom.value);
        let widthWithAvailable = Math.max(currentValue+available,available);

        let maxAttribute = sliderDom.attributes.getNamedItem('max');
        sliderDom.style.width = widthWithAvailable*10 + '%';
        maxAttribute.value = widthWithAvailable;
    }
}

function generateQuestionsHtml() {
    let sumHtml = '';
    for(let i = 0; i < questions.length; i++)
        sumHtml += getQuestionHtml(i);

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