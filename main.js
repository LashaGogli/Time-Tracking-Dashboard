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