const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

// Function to Start Game
function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
// Function to Go to Next Question
function setNextQuestion() {

}
// Function for Selecting an Answer
function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false }
        ]
    }
]