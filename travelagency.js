console.log('This is an awesome "travel" agency');

var travelAgent = prompt("Can I help you?");

if (travelAgent ==='yes') {
console.log ("you have no idea what you are in to!");
 answer = prompt("Are you ready to choose your adventure: ready or not ready?");
   if (answer === 'ready') {
     answer = prompt("do you want to go to: a) Sri-Lanka, b)Japan or c) surprise trip?");
          if ( answer ==='a') {
            answer = prompt("are you going to live: a) on the beach, b) in the jungles or c) in the foreign family?");
                if ( answer === "a") {
                  answer = prompt("do you: a)make a tent, b)steal from the natives or c) move to the jungles?");
                  if (answer ==="a"){
                    answer =alert("Congrats! You get 3 points for being so smart!");
                  }else if (answer === "b"){
                    answer =alert("You get only 1 points for trying to survive, but you are a mean person!");
                  }else if (answer === "c"){
                    answer =alert("You get 1 point for trying to survive, but you are a quiter!");
                  }else {
                    answer = prompt("go back an start over");
                    location.reload();
                  }
                }else if ( answer === "b") {
                  answer =prompt("do you: a) hunt, b) steal from the natives or c) become vegetarian?");
                  if (answer === "a"){
                    answer =alert("Congrat! You get 3 point for hard work!");
                  }else if (answer === "b"){
                    answer =alert("You get only 1 point for trying to survive, but you are a mean person!");
                  }else if (answer ==="c"){
                    answer =alert("Congrats! You get 3 points for being so smart!");
                  }else {
                    answer = prompt("go back an start over");
                    location.reload();
                  }
                }else if ( answer ==="c"){
                  answer =prompt("do you: a)learn the language, b) move to the beach c) move to the jungles?");
                  if (answer ==="a"){
                    answer =alert("Congrats! You get 3 points for trying so hard!");

                  }else if (answer ==="b"){
                    answer =alert("You get only 1 points for quitting");

                  }else if (answer ==="c"){
                    answer =alert("You get only 1 points for quitting");
                  }else {
                        location.reload();
                  }
                }else {
                  answer = prompt("go back an start over");
                  location.reload();
                }


          }else if (answer === "b") {
            answer=prompt("are you going to a) live with monks, b) live on a rabbit island or c)live on a cat island?");
                if (answer === "a") {
                  answer =prompt("what do you choose: a)be silent for a month, b)pay extra money to go somewhere else or c)stay with monks, but do not follow the rules?");
                  if (answer ==="a"){
                    answer =alert("Congrats! you get 3 points for trying something new!");
                  }else if (answer ==="b"){
                    answer =alert("You get 0 points for being a quitter!");
                  }else if (answer ==="c"){
                    answer =alert("You get only 1 point for staying, but you are a whimp!");
                  }else {
                    answer = prompt("go back an start over");
                    location.reload();
                  }

                } else if (answer === 'b') {
                  answer =prompt("what do you choose: a)adopt a rabbit, b) cook one or c) pay extra to leave?");
                  if (answer ==="a"){
                    answer =alert("Congarts! You get 3 points for being so kind");
                  }else if (answer ==="b") {
                    answer =alert("You get only 1 point for surviving, but you are a mean person.");
                  }else if (answer ==="c"){
                    answer =alert("You get 0 points for being a quitter!");
                  }else {
                    answer = prompt("go back an start over");
                    location.reload();
                  }

                }else if (answer === "c"){
                  answer =prompt("what do you do: a) adopt a cat, b)move to the rabbit island to eat rabbits c)pay extra to leave?");
                  if (answer ==="a"){
                    answer =alert("Congrats! You get 3 points for being so nice!");
                  }else if (answer ==="b") {
                    answer =prompt("You get only 1 point for trying to survive, but you are a mean person.");
                  }else if (answer ==="c"){
                    answer =alert("You get 0 points for being a quitter");
                  }else {
                    answer = prompt("go back an start over");
                    location.reload();
                  }
                }else {
                  answer = prompt("go back an start over");
                  location.reload();
                }

          } else if (answer ==="c") {
            answer = prompt("Surprise! you are going to Federal States of Micronesia! what do you want to do: a) take the trip, b)pay extra not to go or c)try to escape from the Island?");
            if (answer ==="a") {
                answer =prompt("Congrats! You get 3 points for trying something new!");

            }else if ( answer ==="b"){
              answer =prompt("You get 0 points for being a quitter");
            }else if (answer ==="c"){
              answer =prompt("You get 0 points for being a quitter")
            }else {
              answer = prompt("go back an start over");
              location.reload();
            }

          }else {
            answer = prompt("go back an start over");
            location.reload();

          }


    } else if (answer === 'not ready') {
    answer = prompt("get ready and say yes!")
    location.reload();
    } else {
    answer = prompt ("go back and start over");
    location.reload();
    }
}else if (travelAgent ==='no'){
  prompt("you need to say yes!");
}else {
  prompt("just say yes!");
}
