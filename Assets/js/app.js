var UserName = prompt("Type Name")

function StartGame() {

        var timerCount = 60
        var timerEl = document.querySelector("#timer")

        timerEl.textContent = timerCount

        var timer = window.setInterval(function() {
            timerCount--;
            timerEl.textContent = timerCount

            if(timerCount === 0) {
                clearInterval(timer)
                alert("Quiz Failed, Try Again")
            }
        }, 1000);

        var QuizScore = 0

        var questions = [
            { 
                q: "Your CSS belongs in which criteria?",
                choices: ["in-line HTML", "seperate style sheet", "Javascript functions"],
                a:"B" 
            }, 
            { 
                q: "What does CSS stand for?", 
                choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"], 
                a:"C"
            },
            { 
                q: "Inside which HTML element do we put the JavaScript?", 
                choices: ["<javascript>", "<script>", "<js>"], 
                a:"B"
            },
            { 
                q: "Where is the correct place to insert a JavaScript tag?", 
                choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body>"], 
                a:"A"
            },
            { 
                q: "JavaScript is interpreted by _________?", 
                choices: ["Client", "Server", "Object"], 
                a:"A"
            },
            { 
                q: "Using _______ statement is how you test for a specific condition.", 
                choices: ["Select", "If", "Switch"], 
                a:"B"
            },
            { 
                q: "The _______ method of an Array object adds and/or removes elements from an array.", 
                choices: ["Shift", "Reverse", "Splice"], 
                a:"C"
            },
            { 
                q: "Which of the following best describes JavaScript?", 
                choices: ["a scripting language precompiled in the browser.", "a low-level programming language.", "an object-oriented scripting language."], 
                a:"C"
            },
            { 
                q: "Which of the following are capabilities of functions in JavaScript?", 
                choices: ["Return a value", "Accept parameters and Return a value", "Accept parameters"], 
                a:"C"
            },
            { 
                q: " __________ JavaScript is also called server-side JavaScript.", 
                choices: ["Microsoft", "LiveWire", "Navigator"], 
                a:"B"
            }]

            
        var questionsPointer = 0

        var question = document.querySelector("#question")
        var optionA = document.querySelector("#optionA")
        var optionB = document.querySelector("#optionB")
        var optionC = document.querySelector("#optionC")


        function setQuestions() {

            if (questionsPointer === questions.length) {
                clearInterval(timer)
                alert("You're Done With " + timerCount + " Seconds left!")
                alert(UserName + " got " + QuizScore + " out of 10")
                console.log(UserName + QuizScore)
                return
            }
            question.textContent = questions[questionsPointer].q
            optionA.textContent = questions[questionsPointer].choices[0]
            optionB.textContent = questions[questionsPointer].choices[1]
            optionC.textContent = questions[questionsPointer].choices[2]
        }

        setQuestions()

        optionA.addEventListener("click", function () {
            if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
                alert("Correct Answer!")
                console.log("This is correct")
                QuizScore += 1
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                QuizScore -= 1
                timerCount -= 10
                questionsPointer++
            }
        })

        optionB.addEventListener("click", function () {
            if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
                alert("Correct Answer!")
                console.log("This is correct")
                QuizScore += 1
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                QuizScore -= 1
                timerCount -= 10
                questionsPointer++
            }
        })

        optionC.addEventListener("click", function () {
            if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
                alert("Correct Answer!")
                console.log("This is correct")
                QuizScore += 1
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                QuizScore -= 1
                timerCount -= 10
                questionsPointer++
            }
        })
}

document.querySelector("#StartGame").addEventListener("click", StartGame)