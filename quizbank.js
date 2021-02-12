




const q = [
    {question: '1. Who invented java script?', options: ['breinfen eich', 'Praneet', 'Gaurav', 'Saurav'], answer: 0, answerSelected: null},
    {question: '2. Who invented c language??', options: ['red hoffmen', 'ken thompson', 'dennis ritchi', 'all of the above'], answer: 2, answerSelected: null},
    {question: '3. What is my gender?', options: ['Male', 'Female'], answer: 0, answerSelected: null},
]

function startQuestion(index) {
    const localQuestion = q[index]
    const container = document.createElement('div');
    const questionText = document.createElement('div')
    questionText.innerText = localQuestion.question;
    container.appendChild(questionText);

    const optionsContainer = document.createElement('div');
        for (let i = 0; i< localQuestion.options.length; i++) {
        const label = document.createElement('label');
        label.innerHTML = localQuestion.options[i];
        const option = document.createElement('input');
        option.name = index;
        option.type = 'radio';
        option.addEventListener('click', function click() {
            console.log(index, i)
            q[index].answerSelected = i;
        })
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(option);
    }
    container.appendChild(optionsContainer);

    return container;
}

function submitQuiz() {
    for (let i = 0; i < q.length; i++) {
        console.log(q[i])
        if (q.answerSelected === q.answer) {
            console.log('correct');
        } else console.log("incorrect");
    }
}



function start() {
    const main = document.getElementById('main');
    for (let i = 0; i < q.length; i++) {
        const questionTag = startQuestion(i);
        main.appendChild(questionTag);
    }
    const button = document.createElement('button');
    button.innerText = 'Submit';
    button.addEventListener('click', submitQuiz)
    main.appendChild(button)
}