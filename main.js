// ТАЙМЕР

document.addEventListener('DOMContentLoaded', function() {

  
  
    let timerStart= localStorage.getItem('test');
  
    if (timerStart=== null) {
      localStorage.setItem('test', Date.now());
      localStorage.setItem('day', new Date().getDay());
    }

    if (localStorage.getItem('day') === new Date().getDay()) {
      localStorage.setItem('test', Date.now());
    }

  
  
    var cd5 = new Countdown({
      cont: document.querySelector(".timer-container"),
      date: +localStorage.getItem("test") + 4053000 ,
      outputTranslation: {
        day: "Days",
        hour: "Godzin",
        minute: "Minut",
        second: "Sekund",
      },
      endCallback: function () {
        document
          .querySelector(".timer-container")
          .insertAdjacentHTML(
            "beforeend",
            '<div style="display: flex;height: 50px;align-items: center;justify-content: center;background: red;font-weight: bold;"></div>'
          );
      },
      outputFormat: "hour|minute|second",
    });
    cd5.start();
    // console.log(localStorage.getItem("test"))
    // console.log(timerStart);
  })
  
  
  