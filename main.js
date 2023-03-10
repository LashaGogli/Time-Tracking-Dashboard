let somedata = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let transparetndivs = document.querySelectorAll(".transparetndiv");
let hourdiv = document.querySelectorAll(".hourdiv");
let previous = document.querySelectorAll(".previous");


transparetndivs.forEach((div, i) => {

  let tytleP = document.createElement("p");
  tytleP.classList.add("tytle");
  tytleP.textContent = somedata[i].title;
  div.appendChild(tytleP);
  let img = document.createElement('img');
  img.classList.add("dots");
  img.src = '3dots.svg';
  div.appendChild(img);

});

hourdiv.forEach((div, i) => {
  let someP = document.createElement("p");
  someP.classList.add("current");
  someP.textContent = somedata[i].timeframes.weekly.current + "hrs";
  div.appendChild(someP);
});

previous.forEach((div, i) => {
  let someP = document.createElement("p");
  someP.classList.add("previousP");
  someP.style.position = "absolute";
  someP.textContent = "Last week - " + somedata[i].timeframes.weekly.previous + "hrs";
  div.appendChild(someP);
});


let daily = document.querySelector(".daily");
let monthly = document.querySelector(".monthly");
let weekly = document.querySelector(".weekly");

daily.addEventListener("click", function () {


  daily.style.color = "white";
  weekly.style.color = "#7078C9";
  monthly.style.color = "#7078C9";

  hourdiv.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("current");
    someP.textContent = somedata[i].timeframes.daily.current + "hrs";
    div.appendChild(someP);

  });
  previous.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("previousP");
    someP.style.position = "absolute";
    someP.textContent = "Last day - " + somedata[i].timeframes.daily.previous + "hrs";
    div.appendChild(someP);
  });

})

monthly.addEventListener("click", function () {
  daily.style.color = "#7078C9";
  weekly.style.color = "#7078C9";
  monthly.style.color = "white";

  hourdiv.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("current");
    someP.textContent = somedata[i].timeframes.monthly.current + "hrs";
    div.appendChild(someP);

  });
  previous.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("previousP");
    someP.style.position = "absolute";
    someP.textContent = "Last month - " + somedata[i].timeframes.monthly.previous + "hrs";
    div.appendChild(someP);
  });

})

weekly.addEventListener("click", function () {
  daily.style.color = "#7078C9";
  weekly.style.color = "white";
  monthly.style.color = "#7078C9";
  

  hourdiv.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("current");
    someP.textContent = somedata[i].timeframes.weekly.current + "hrs";
    div.appendChild(someP);

  });
  previous.forEach((div, i) => {
    div.innerHTML = "";
    let someP = document.createElement("p");
    someP.classList.add("previousP");
    someP.style.position = "absolute";
    someP.textContent = "Last week - " + somedata[i].timeframes.weekly.previous + "hrs";
    div.appendChild(someP);
  });

})

// weekly.addEventListener("mousemove", function () {
//   weekly.style.color = "white";

// })
// daily.addEventListener("mousemove", function () {
//   daily.style.color = "white";

// })
// monthly.addEventListener("mousemove", function () {
//   monthly.style.color = "white";

// })
// weekly.addEventListener("mouseleave", function () {
//   weekly.style.color =  "#7078C9";

// })
// daily.addEventListener("mouseleave", function () {
//   daily.style.color =  "#7078C9";

// })
// monthly.addEventListener("mouseleave", function () {
//   monthly.style.color = "#7078C9";

// })