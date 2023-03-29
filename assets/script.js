var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    
    for (x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
   var x = 0;
   console.log(x);

    for (x = 0; x < topics.length; x++) {
        console.log(x)
     if (topics[x] === "HTML") {
      console.log("Let's study HTML!");
    } else if (topics[x] === "CSS") {
      console.log("Let's study CSS!");
    } else if (topics[x] === "Git") {
      console.log("Let's study Git!");
    } else if (topics[x] === "JavaScript") {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
    }
}

function selectTopicRam() {
  
    if (randomTopic === "HTML") {
     console.log("Let's study HTML!");
   } else if (randomTopic === "CSS") {
     console.log("Let's study CSS!");
   } else if (randomTopic === "Git") {
     console.log("Let's study Git!");
   } else if (randomTopic === "JavaScript") {
     console.log("Let's study JavaScript!");
   } else {
     console.log('Please try again!');
   }
   }


/*
var studentInfo = ["Lu", 54, true];
console.log(studentInfo);

var shapes = ["triangle", "square", "pentagon", "circle"];

for(var x = 3; x > 0; x--) {
    console.log(shapes[x]);
   }

*/

function helloWorld() {
    console.log("Hello, world, I am a function!")
   }

console.log('Here are the topics we learned through Prework:');
selectTopic();
console.log('Which topic should we study first?');
selectTopicRam();