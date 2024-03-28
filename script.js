// 1. Create 5 variables that store css style change
//     1. These can be colors, fonts, padding, display, etc.
// 2. Create 5 variables that store html content (titleHTML, footerHTML, belowTextHTML, )
//     1. These can be messages, text, and images,
// 3. Access 5 elements by ID and change their css in javascript using your variables
//        (organic, contents, footerLeft, footerRight, )
// 4. Access 5 elements by CLASS and change their css in javascript using your variables
//        (document.querySelector(".footer"), columnRightSideElements, )
// 5. Access 5 elements by ID and change their innerHTML in javascript using your variables
// 6. Access 5 elements by CLASS and change their innerHTML using your variables
// 7. Add 5 if statements based on styles or content to change your HTML or CSS
//     1. For example “if the color is blue, make it green, else make it red”
//     2. For example “if the width of an image is 500px, make the text next to it bigger”
//     3. For example “if the header is orange, make the background green”
//     4. Come up with fun ones!!
//        (isComicSans, titleDivs.length, organicElement, contentsElement, childColor, boxesElement)
// 8. Add 5 clickable functions throughout your project that do a mixture of the above tasks ^
//     1. For example “click on an image and make it dissappear”
//     2. For example “click on a piece of text and make it shrink”
//     3. For example “click on a button and delete some CSS”
//          (toggleFont, titleElement, boxesElement, columnRightsideElement)

// Storing the HTML code in a JavaScript variable
var titleHTML = `
  <div id="Title">
    <div>Human</div>
    <div>Being</div>
  </div>
`;

// Storing the HTML code in a JavaScript variable
var footerHTML = `
  <div class="footer">
    <div id="footerLeft">
      FROM: <br /><br />
      Forsakken Heaven <br />
      Fuckedup College <br />
      110911, Fake Loser
    </div>
    <div id="footerRight">
      TO: <br /><br />
      Crime Activities <br />
      Recreation Centre <br />
      06660 Juicy Tunnel, Hell
    </div>
  </div>
`;

// Storing the HTML code in a JavaScript variable
var belowTextHTML = `
  <div class="belowText">
    <div class="columnIngredients">
      <h2>
        INGREDIENTS: <br />
        Oxygen (65%), Carbon (10%), <br />
        Hydrogen (10%), Nitrogen (3%),<br />
        Calcium (1.5%), Phodiphorus (1.0%), <br />
        Potassium (0.35%), Sulphur (0.25%), <br />
        Sodium (0.15%), Magnesium (0.05%), <br />
        Copper (0.70%), Zinc (0.70%), <br />
        Selorium (0.70%), <br />
        Molybdonium (0.70%), Florine (0.70%), <br />
        Chlorine (0.70%), Indina (0.70%), <br />
        Manganese (0.70%), Cobalt (0.70%), <br />
        Iron (0.70%), Lithium (trace), <br />
        Strontium (trace), Aluminum (trace), <br />
        Sillicon (trace), Lead (trace), <br />
        Vanadium (trace), <br />
        Arsonic (trade), Bromine (trace)
      </h2>
    </div>
    <div class="columnRightSide">
      <div id="organic">
        <h1>100%</h1>
        <h2>ORGANIC</h2>
      </div>
      <div id="contents">
        <h1>
          Contents <br />
          may vary <br />
          in colour
        </h1>
      </div>
    </div>
  </div>
`;

// Variables for text and background colors
let fromTextColor = "#eb6961";
let fromBgColor = "#61e3eb";
let toTextColor = "#61e3eb";
let toBgColor = "#eb6961";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // change font everywhere upon a click.
  let isComicSans = false;

  function toggleFont() {
    if (!isComicSans) {
      // Change font to Comic Sans Serif
      document.body.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
      // Ensure the "Title" element also changes font
      document.getElementById("Title").style.fontFamily =
        "'Comic Sans MS', cursive, sans-serif";
      isComicSans = true;
    } else {
      // Change font back to Helvetica
      document.body.style.fontFamily = "Helvetica, Arial, sans-serif";
      // Ensure the "Title" element also changes font back to Helvetica
      document.getElementById("Title").style.fontFamily =
        "Helvetica, Arial, sans-serif";
      isComicSans = false;
    }
  }
  // Attach click event listener to the whole document body
  document.body.addEventListener("click", toggleFont);

  // change "Title"'s Background upon a click
  // Access the "Title" element by its ID
  var titleElement = document.getElementById("Title");

  // Check if the titleElement exists to avoid errors
  if (titleElement) {
    // Add click event listener to the "Title" element
    titleElement.addEventListener("click", function () {
      // Change the background color
      titleElement.style.backgroundColor = "#61e3eb";
      // Change the font size
      // Assuming you want to change the text size within the "Title" divs
      var titleDivs = titleElement.querySelectorAll("div");
      titleDivs.forEach(function (div) {
        div.style.fontSize = "180px";
      });
    });
  }

  //change color of Human and Being
  // Assuming the HTML structure is already in the document
  var titleDivs = document.querySelectorAll("#Title > div");

  if (titleDivs.length >= 2) {
    // Change the text color of the first half
    titleDivs[0].style.color = "#619eeb";

    // Change the text color of the second half
    titleDivs[1].style.color = "#ebae61";
  }

  // change background of boxes
  // Access the element with the class 'boxes'
  var boxesElement = document.querySelector(".boxes");

  // Check if the boxesElement exists to avoid errors
  if (boxesElement) {
    // Add click event listener to the 'boxes' element
    boxesElement.addEventListener("click", function () {
      // Change the background color
      boxesElement.style.backgroundColor = "#eb6961";
    });
  }

  // // Access elements by class name 'columnIngredients'
  // var columnIngredientsElements =
  //   document.getElementsByClassName("columnIngredients");

  // for (var i = 0; i < columnIngredientsElements.length; i++) {
  //   columnIngredientsElements[i].style.color = "#800080"; // Using a hex code for purple
  // }

  // Access the element with id 'organic'
  var organicElement = document.getElementById("organic");
  if (organicElement) {
    // Check if the current text color of 'organic' is white before changing it
    var organicElementColor = getComputedStyle(organicElement).color;
    if (organicElementColor === "rgb(255, 255, 255)") {
      // 'rgb(255, 255, 255)' corresponds to white
      organicElement.style.color = "#eb6961";
    }

    // Get all child elements
    var childElements = organicElement.querySelectorAll("*"); // Selects all child elements
    childElements.forEach(function (child) {
      // Check if the current text color of the child element is white before changing it
      var childColor = getComputedStyle(child).color;
      if (childColor === "rgb(255, 255, 255)") {
        // 'rgb(255, 255, 255)' corresponds to white
        child.style.color = "#eb6961";
      }
    });
  }

  // Access the element with id 'organic'
  var contentsElement = document.getElementById("contents");
  if (contentsElement) {
    // Check if the current text color of 'organic' is white before changing it
    var contentsElementColor = getComputedStyle(contentsElement).color;
    if (contentsElementColor === "rgb(255, 255, 255)") {
      // 'rgb(255, 255, 255)' corresponds to white
      contentsElement.style.color = "#61e3eb";
    }

    // Get all child elements
    var childElements = contentsElement.querySelectorAll("*"); // Selects all child elements
    childElements.forEach(function (child) {
      // Check if the current text color of the child element is white before changing it
      var childColor = getComputedStyle(child).color;
      if (childColor === "rgb(255, 255, 255)") {
        // 'rgb(255, 255, 255)' corresponds to white
        child.style.color = "#61e3eb";
      }
    });
  }

  var columnRightSideElements = document.querySelectorAll(".columnRightSide");

  // Add click event listener to each 'columnRightSide' element
  columnRightSideElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // On click, change the background color of '.belowText' elements
      document
        .querySelectorAll(".belowText")
        .forEach(function (belowTextElement) {
          belowTextElement.style.backgroundColor = "#619eeb";
        });
    });
  });

  // Access the footer by class and change its style
  var footer = document.querySelector(".footer");
  footer.style.backgroundColor = "white"; // Change background color to white

  // Access elements by class 'footer' and change their style
  var footerElements = document.querySelectorAll(".footer div");
  footerElements.forEach(function (element) {
    element.style.fontFamily = "Arial, sans-serif";
    element.style.padding = "20px";
  });

  // Access element by ID 'footerLeft' and change its style
  var footerLeft = document.getElementById("footerLeft");
  footerLeft.style.backgroundColor = fromBgColor;
  footerLeft.style.color = fromTextColor;

  // Access element by ID 'footerRight' and change its style
  var footerRight = document.getElementById("footerRight");
  footerRight.style.backgroundColor = toBgColor;
  footerRight.style.color = toTextColor;
});
