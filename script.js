const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
});

sr.reveal('.content',{delay: 350, origin:'top'});
sr.reveal('.content a',{delay: 500, origin:'bottom'});
sr.reveal('.col50',{delay: 500, origin:'bottom'});
sr.reveal('.logo span',{delay: 1000, origin:'bottom'});
sr.reveal('.logo',{delay: 200, origin:'left'});
sr.reveal('.navigation',{delay: 200, origin:'right'});


function startSlowColor() {
    var link = document.getElementById("slow-link");
    var currentColor = window.getComputedStyle(link).color;
    var targetColor = "red";
    var duration = 7500; // 10 secondes
  
    var startTime = null;
    function animateColor(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percent = progress / duration;
      if (percent > 1) percent = 1;
      var newColor = lerpColor(currentColor, targetColor, percent);
      link.style.color = newColor;
      if (percent < 1) {
        window.requestAnimationFrame(animateColor);
      }
    }
  
    window.requestAnimationFrame(animateColor);
  }
  
  function lerpColor(a, b, t) {
    var colorA = parseColor(a);
    var colorB = parseColor(b);
    var r = Math.round(lerp(colorA.r, colorB.r, t));
    var g = Math.round(lerp(colorA.g, colorB.g, t));
    var b = Math.round(lerp(colorA.b, colorB.b, t));
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  
  function parseColor(color) {
    var match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3])
      };
    } else {
      return null;
    }
  }
  
  function lerp(a, b, t) {
    return a * (1 - t) + b * t;
  }
  