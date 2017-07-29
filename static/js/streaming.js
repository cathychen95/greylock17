var recognition = new webkitSpeechRecognition();
recognition.continuous = true; // Suitable for dictation.
recognition.interimResults =
    true; // If we want to start receiving results even if they are not final.
recognition.lang = "en-US";
recognition.maxAlternatives = 1;

recognition.onstart = function() {
  // TODO: What to do when recording?
  console.log("onstart");
};

recognition.onend = function() {
  // TODO: What to do when finished?
  console.log("onend")
};

recognition.onresult = function(event) {
  console.log("onresult");
  if (typeof(event.results) === 'undefined') {
    console.log("something is wrong");
    recognition.stop();
    return;
  }

  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) { // Final results
      console.log("final results: " +
                  event.results[i][0].transcript);

    } else { //  interim...
      console.log("interim results: " +
                  event.results[i][0].transcript); // You can use these results
                                                   // to give the user near real
                                                   // time experience.
    }
  }
};
