const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let ind = 0;
  let current = code[ind];
  let len = (code.length - 1);

  function goodGuess(){
    if (ind === len) {       
      alert("Hurrah!  You are a genius");
      reset();
    } else {
    ind++;
    current = code[ind];
    }
  }

  function reset(){
    ind = 0;
    current = code[0];
  }


  document.addEventListener('keydown', function(e) {
    let myKey = parseInt(e.which || e.details);
    if (myKey === current) {
      goodGuess();
    } else {
      console.log(myKey);
        reset();
    }
  });

}
