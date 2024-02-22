// function to create a countdown function -- start
function countdown(n) {
    function tick() {
        console.log(n);
        if(n>0) {
            n--;
            setTimeout(tick,1000);
          } else {
            console.log('timer ends')
          }
    }
    tick();
  }
  countdown(10);
  // function to create a countdown function -- end
  
  //function to update a count after each seconds -- start
  function updateEachSeconds(n) {
    setInterval(() => {
        console.log(n);
        n++;
    },1000);
}

updateEachSeconds(10);
  //function to update a count after each seconds -- end

  // function to start a countdown and finish it on count 5 -- start
  function countdown(n) {
    function tick() {
        console.log(n);
        if (n > 0) {
            n--;
            if (n === 5) {
                console.log('Clearing countdown at 5');
                clearTimeout(timer); // Clear the timeout when count reaches 5
            } else {
                timer = setTimeout(tick, 1000);
            }
        } else {
            console.log('Timer ends');
        }
    }
    let timer = setTimeout(tick, 1000);
}

countdown(10);
  // function to start a countdown and finish it on count 5 -- end

  //function to show remaining hours from a certain date -- start;
  function countDown() {
    const requiredDate = new Date('02/25/2024');
    let remainingTime = requiredDate - new Date();

    function tick() {
        if (remainingTime > 0) {
            const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)); // Calculate remaining hours
            console.log(remainingHours);
            remainingTime -= 1000; // Decrease remaining time by 1 second
            setTimeout(tick, 1000);
        } else {
            console.log('Countdown end');
        }
    }

    tick(); // Start the countdown
}

countDown();
  //function to show remaining hours from a certain date -- start;



