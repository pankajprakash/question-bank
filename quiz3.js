
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  {
      question: " 1. Who is the founder of java script?",
      a: "krn thompson",
      b: "Breinden eich",
      c: "kevin peterson",
      answer: "B"
    },
  {
      question: " 2. Who is the founder of Instagram?", 
      a: "markzukerberg",
      b: "brian acton",
      c: "kevin systrom",
      answer: "C"
    },
  {
      question: " 3. who is the founder of facebook?",
      a: "Mark Zukerberg",
      b: "Brian acton",
      c: "stuard binoi",
      answer: "A"
    },
  {
      question: " 4. What is 8 x 12?",
      a: "88",
      b: "112",
      c: "96",
      answer: "C"
    }
    
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
  
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;

  test.innerHTML = "<h3>"+question+"</h3>";
  
 
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == questions[pos].answer){
  
    correct++;
  }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);correct