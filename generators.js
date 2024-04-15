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

    let definitionsFinalHtml = `<div class="definitions"><h2 class='definitions-header'>Definicje</h2>${definitionsHtml}</div>`;
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

    sumHtml += `<div class='submit-section'><p class='explenation'>Jeżeli przycisk jest wyszarzony, to oznacza, że nie przydzieliłeś/aś wszystkich punktów.</p>
        <button id='submit' class='submit' onclick='calculateResults()' disabled>Wyświetl wyniki</button></div>`;
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