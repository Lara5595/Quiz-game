const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/* Questions for the game quiz*/

let questions = [
    {
        question: 'The inferior vena cava returns deoxygenated blood to the heart from?',
        choice1: 'The higher extremities and abdomen',
        choice2: 'The lower extremities and abdomen',
        choice3: 'abdomen only',
        choice4: 'A and B',
        answer: 2,
    },
    {
        question:
            "Heart valves serve what purpose?",
        choice1: "They prevent backflow of blood",
        choice2: "They allow backflow",
        choice3: "They keep you alive",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "The innermost layer of the heart is the?",
        choice1: "Epicardium",
        choice2: "Myocardium",
        choice3: "Endocardium",
        choice4: "innermost heart",
        answer: 3,
    },
    {
        question: "The top of the heart where the great vessels emerge is the?",
        choice1: "Base",
        choice2: "Left Ventricle",
        choice3: "Right Ventricle",
        choice4: "Bottom of the heart, at the leftmost tip",
        answer: 1,
    },
    
    {
        question: "Junctional brodycardia has a heart rate of?",
        choice1: "Less than 40",
        choice2: "More than 100",
        choice3: "More than 40",
        choice4: "Less than 25",
        answer: 1,
    },
    {
        question: "The normal heart is the size of a?",
        choice1: "Watermelon",
        choice2: "Banana",
        choice3: "Potato",
        choice4: "A mans fist",
        answer: 4,
    },
    {
        question: "Junctional tachycardia without visible P waves is best called?",
        choice1: "TVS",
        choice2: "SVT",
        choice3: "MEE",
        choice4: "QRS",
        answer: 2,
    },
    {
        question: "Which Junctional rhythm would not be treated with atropine? HINT Because atropine is to speed up the heart rate",
        choice1: "Accelerated Junctional Rhythm.",
        choice2: "Junctional Escape Rhythm.",
        choice3: "Junctional Tachycardia",
        choice4: "junctional bradycardia",
        answer: 3,
    },
    {
        question: "The parasympathetic nervous system causes?",
        choice1: "Decrease in the heart rate",
        choice2: "Increase in the heart rate",
        choice3: "Stable heart rate",
        choice4: "Accelerated junctional rhythm",
        answer: 1,
    },
    {
        question: "Accelerated junctional rhythm has a heart rate of?",
        choice1: "60-100",
        choice2: "More than 100",
        choice3: "More than 40",
        choice4: "Less than 40",
        answer: 1,
    },
    {
        question: "The AV node is located in the?",
        choice1: "Left-Atrium",
        choice2: "Top-Atrium",
        choice3: "Right-Atrium",
        choice4: "Bottom-Atrium",
        answer: 3,
    },
    {
        question: "What is Pericardial Fluid?",
        choice1: "Decreas in the heart rate",
        choice2: "Prevents backflow of the blood",
        choice3: "Increases friction of the pericardial layers as the rub against each other",
        choice4: "Decreases friction of the layers as they rub against each other",
        answer: 4,
    },
    {
        question: "The Apex of the heart is located at the?",
        choice1: "Bottom of the heart at the leftmost tip",
        choice2: "Top of the heart at the leftmost tip",
        choice3: "Bottom of the heart at the rightmost tip",
        choice4: "Top of the heart at the rightmost tip",
        answer: 1,
    },
    {
        question: "In low junctional rhythms, the P wave is ?",
        choice1: "Hidden inside the QRS",
        choice2: "Inverted following the QRS",
        choice3: "Inverted preceding the QRS",
        choice4: "Hidden preceding the QRS",
        answer: 2,
    },
    {
        question: "Which Junctional rhythm has the same heart rate of a sinus rhythm?",
        choice1: "Junctional bradycardia",
        choice2: "Junctional Tachycardia",
        choice3: "Junctional Escape Rhythm",
        choice4: "Accelerated Junctional Rhythm",
        answer: 4,
    },
    {
        question: "Which heart chamber delivers oxygenated blood to the entire body?",
        choice1: "Right Ventricle",
        choice2: "Heart Valves",
        choice3: "Upper Chambers",
        choice4: "Left Ventricle",
        answer: 4,
    },
    {
        question: "The layer of the heart that is damaged during a heart attact is the?",
        choice1: "Myocardium",
        choice2: "Epicardium",
        choice3: "Endocardium",
        choice4: "Right Layer of the heart",
        answer: 1,
    },
    {
        question: "The structure that prevents backflow of blood is the?",
        choice1: "Valve",
        choice2: "Myocardium",
        choice3: "Left Ventricle",
        choice4: "Epicardium",
        answer: 1,
    },
    {
        question: "PJC'S are a result of?",
        choice1: "Usurpation",
        choice2: "Premature junctional contractions",
        choice3: "Junctional Tachycardia",
        choice4: "PAC'S",
        answer: 1,
    },
    {
        question: "Junctional tachycardia is associated with which medication toxicity?",
        choice1: "Atropine",
        choice2: "Digitalis",
        choice3: "Digibind",
        choice4: "Tylenol",
        answer: 2,
    },
    {
        question: "In MID-junctional rhythms the P wave is?",
        choice1: "Hidden preceding the QRS",
        choice2: "Hidden inside the QRS",
        choice3: "Inverted preceding the QRS",
        choice4: "Inverted following the QRS",
        answer: 2,
    },
    {
        question: "In HIGH-junctional rhythms the P wave is?",
        choice1: "Inverted following the QRS",
        choice2: "Inverted preceding the QRS",
        choice3: "Hidden inside the QRS",
        choice4: "Hidden preceding the QRS",
        answer: 2,
    },
    {
        question: "A premature beat arising from the AV junction is called a?",
        choice1: "SVT",
        choice2: "TVS",
        choice3: "MEE",
        choice4: "PJC",
        answer: 4,
    },
    {
        question: "The fibrous tissue that divides the heart into right and left side is the?",
        choice1: "Septum",
        choice2: "Digitalis",
        choice3: "Valves",
        choice4: "Chambers",
        answer: 1,
    },
    {
        question: "The valve that seperates the right atrium and right ventricle is the?",
        choice1: "Isolation Valve",
        choice2: "Regulation Valve",
        choice3: "Tricuspid Valve",
        choice4: "Safety Relief Valves",
        answer: 3,
    },
    {
        question: "The heart valves open and close in response to changes in?",
        choice1: "Atropine",
        choice2: "Septum",
        choice3: "Valves",
        choice4: "Pressure",
        answer: 4,
    },
    {
        question: "Junctional tachycardia has a heart rate of?",
        choice1: "Lower than 40",
        choice2: "Greater than 100",
        choice3: "60-100",
        choice4: "Higher than 200",
        answer: 2,
    },
    {
        question: "Junctional rhythms originate in the?",
        choice1: "Accelerated junctional",
        choice2: "Atrioventicular Junction",
        choice3: "Junctional tachycardia",
        choice4: "Junctional bradycardia",
        answer: 2,
    },
    {
        question: "SVT and Junctional tachycardia are similar in that?",
        choice1: "Both can have hidden P waves",
        choice2: "Only one has hidden P waves",
        choice3: "None have hidden P waves",
        choice4: "They are similar already",
        answer: 1,
    },
    {
        question: "In which rhythm is decreased cardia output most likely to be a concern?",
        choice1: "Junctional tachycardia",
        choice2: "Junctional bradycardia",
        choice3: "Accelerated junctional",
        choice4: "Atrioventicular Junction",
        answer: 2,
    },
    {
        question: "A Junctional rhythm with a heart rate of 125 is called?",
        choice1: "Junctional tachycardia",
        choice2: "Junctional bradycardia",
        choice3: "Accelerated junctional",
        choice4: "Atrioventicular Junction",
        answer: 1,
    },
    {
        question: "Which valves open to allow the ventricels to fill?",
        choice1: "Tricuspic Valve",
        choice2: "Mitral Valve",
        choice3: "Pulmonic Valve",
        choice4: "Tricuspic and Mitral",
        answer: 4,
    },
    {
        question: "Through which structure must the blood travel in order to leave the right ventricle?",
        choice1: "Tricuspic Valve",
        choice2: "Mitral Valve",
        choice3: "Pulmonic Valve",
        choice4: "Tricuspic and Mitral",
        answer: 3,
    },
    {
        question: "What causes heart sounds?",
        choice1: "Closing of the heart valves",
        choice2: "Opening of the heart valves",
        choice3: "Everytime the heart pumps",
        choice4: "Blood going through the heart",
        answer: 1,
    },
    {
        question: "Condution to the atria in junctional rhythms is said to be?",
        choice1: "Mitral Valve",
        choice2: "Retrograde",
        choice3: "Accelerated junctional",
        choice4: "Atrioventicular Junction",
        answer: 2,
    },
    {
        question: "The vessel that delives oxygenated to the capillary bed is the?",
        choice1: "Posterior descending artery.",
        choice2: " P wave",
        choice3: "Capillaries",
        choice4: "Arteriole",
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 36

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()