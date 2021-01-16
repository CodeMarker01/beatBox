/*
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    // console.log(this.audio);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

/*
 * Button class that keeps track of the button color based on a press
  Nhâp color và keycode vô
  nêu class beat return ve keyCode = "65" thi run id="65"
  script.js: button: new Button("#ffffff", 65);
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    console.log(this.element);
    this.setButtonColorInHTML();
    this.setATransitionEndListener();
  }

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.backgroundColor = "";
    this.element.style.boxShadow = "";
  };

  /*
   * Lam sao de mau no hien roi tat
   * Solution 1: dung keyup() de khi nha phim ra thi trigger deselect()
   * Solution 2: cho` 1 khoang time roi trigger deselect()
   * Solution 3: khi vua ket thuc transition (transitionend) thi trigger deselect()
   */
  setATransitionEndListener = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };
}
