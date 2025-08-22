let joke_list = [
  {"joke":"Why do programmers prefer dark mode? Because Light attracts bugs.","complexity":"1"},
  {"joke":"Why do Java developers wear glasses? Because they don't see sharp.","complexity":"1"},
  {"joke":"How many programmers does it take to change a Light bulb? None, that's a hardware problem.","complexity":"2"},
  {"joke":"Why do Python programmers prefer snake_case? Because they can't C#.","complexity":"2"},
  {"joke":"Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.","complexity":"2"},
  {"joke":"Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25.","complexity":"2"},
  {"joke":"Why did the programmer quit his job? Because he didn't get arrays.","complexity":"2"},
  {"joke":"Why do Linux programmers prefer using the terminal? Because they don't like Windows.","complexity":"3"}
];

let index = Math.floor(Math.random() * joke_list.length);
let selectedJoke = joke_list[index];
console.log(selectedJoke.joke + " (Complexity: " + selectedJoke.complexity + ")");
