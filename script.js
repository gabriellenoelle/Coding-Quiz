const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Function to Start Game
function startGame () {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
// Function to Go to Next Question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}

// Function for Selecting an Answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which IS a commonly used data type in programming?',
        answers: [
            { text: 'prompt', correct: false},
            { text: 'string', correct: true },
            { text: 'keystroke', correct: false},
            { text: 'event', correct: false }
        ]
    },

    {
        question: 'Which programming language is the base of every webpage?',
        answers: [
            { text: 'HTML', correct: true},
            { text: 'Python', correct: false },
            { text: 'Ruby', correct: false },
            { text: 'Scratch', correct: false}
        ]
    },

    {
        question: 'Which programming language styles a webpage?',
        answers: [
            { text: 'Python', correct: false},
            { text: 'C#', correct: false },
            { text: 'CSS', correct: true },
            {text: 'HTML', correct: false }
        ]
    },

    {
        question: 'Which popular tool can help you debug your code?',
        answers: [
            { text: 'Console', correct: true},
            { text: 'Java', correct: false },
            { text: 'Keurig', correct: false },
            { text: 'Bootstrap', correct: false }
        ]
    },

    {
        question: 'What is Git?',
        answers: [
            { text: 'Version control software', correct: true},
            { text: 'Just a facebook-like social media site', correct: false },
            { text: 'A search engine', correct: false },
            { text: 'A database of boilerplate CSS styles', correct: false }
        ]
    },

    {
        question: 'What is the DOM?',
        answers: [
            { text: 'Dominant Document of a Repository', correct: false},
            { text: 'Document Object Model', correct: true },
            { text: 'A website where you can network with other programmers', correct: false },
            { text: 'GitHubs desktop app', correct: false }
        ]
    },

    {
        question: 'Should you always work on the Main branch when working on code?',
        answers: [
            { text: 'Yes! It should all be in one place to make it easier for others to see.', correct: false},
            { text: 'No! It needs to be worked on in different branches, especially when working in a team.', correct: true }
        ]
    },

    {
        question: 'Which is NOT a common data type used in programming?',
        answers: [
            { text: 'Boolean', correct: false},
            { text: 'Symbol', correct: true },
            { text: 'Number', correct: false },
            { text: 'String', correct: false }
        ]
    },

    {
        question: 'Who invented coding/computer programming?',
        answers: [
            { text: 'Bill Gates', correct: false},
            { text: 'Steve Jobs', correct: false },
            { text: 'Ada Lovelace & Charles Babbage', correct: true },
            { text: 'Charles Darwin', correct: false }
        ]
    },

]