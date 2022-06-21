$(".sneaky-button").hide();
$(".sneaky-div").hide();
$(".hidden-img").hide();

function buttonClick(buttonName) {
  var functionDict = {
    "b1": function() {
      alert("congrats on hitting this button");
    },
    "b2": function() {
      $("body").css("background-color", "#" + Math.floor(Math.random()*16777215).toString(16));
    },
    "b3": function() {
      $("#central-heading").text("woah this text changed")
    },
    "b4": function () {
      $("button[name='b5']").show();
      $("button[name='b4']").hide();
    },
    "b5": function () {
      $("button[name='b4']").show();
      $("button[name='b5']").hide();
    },
    "b6": function () {
      $(".highlighted-section").slideToggle();
      $(".sneaky-button").slideToggle();
    },
    "b7": function() {
      $(".main-div").slideToggle();
      $(".sneaky-div").slideToggle();
    },
    "b8": function() {
      var i = $(".hidden-img")
      if (i.css("opacity") == 1) {
        console.log(i.css("opacity"));
        i.animate({opacity: 0});
      }
      else {
        i.show();
        i.animate({opacity: 1});
      }

    }
  }

  functionDict[buttonName]();
}

for (const button of $('.btn')) {
  button.addEventListener("click", function () {
    buttonClick(button.name);
  })
}
