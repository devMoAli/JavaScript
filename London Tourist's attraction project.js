var canvascontents,
  originalImage,
  greyImage,
  redImage,
  blueImage,
  greenImage,
  negativeImage,
  rainbowImage,
  framedImage,
  blurImage = null;

// to get filters processed on new image every time //
function loadImage() {
  var finput = document.getElementById("Imagefile");
  canvascontents = document.getElementById("canvas");
  originalImage = new SimpleImage(finput);
  greyImage = new SimpleImage(finput);
  redImage = new SimpleImage(finput);
  blueImage = new SimpleImage(finput);
  greenImage = new SimpleImage(finput);
  negativeImage = new SimpleImage(finput);
  rainbowImage = new SimpleImage(finput);
  framedImage = new SimpleImage(finput);
  blurImage = new SimpleImage(finput);
  originalImage.drawTo(canvascontents);
}

// To check if the image has been loaded //
function isImageComplete(thisimage) {
  if (thisimage == null || !thisimage.complete()) {
    alert("image not loaded");
    return false;
  } else {
    return true;
  }
}
// to Get the Image Dimensions //
function showsize() {
  var dimensions = document.getElementById("dimensions");
  dimensions.innerText = "Image is: " + canvas.width + " X " + canvas.height;
}

// Filters //
// Grey filter //
function doGrey() {
  if (isImageComplete(greyImage)) {
    GreyFilter();
    greyImage.drawTo(canvas);
  } else {
    alert("Image Not Uploded");
  }
}

function GreyFilter() {
  for (var pixel of greyImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}
// Red filter //
function doRed() {
  if (isImageComplete(redImage)) {
    // check if image is loaded
    RedFilter(); // perform filter operation
    redImage.drawTo(canvascontents); // display image on canvas
  }
}

function RedFilter() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}
// Blue filter //
function doBlue() {
  if (isImageComplete(blueImage)) {
    // check if image is loaded
    BlueFilter(); // perform filter operation
    blueImage.drawTo(canvascontents); // display image on canvas
  }
}

function BlueFilter() {
  for (var pixel of blueImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
}
// Green filter //
function doGreen() {
  if (isImageComplete(greenImage)) {
    // check if image is loaded
    GreenFilter(); // perform filter operation
    greenImage.drawTo(canvascontents); // display image on canvas
  }
}

function GreenFilter() {
  for (var pixel of greenImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}
// Negative Filter //
function doNegative() {
  if (isImageComplete(negativeImage)) {
    NegativeFilter();
    negativeImage.drawTo(canvascontents);
  }
}

function NegativeFilter() {
  for (var pixel of negativeImage.values()) {
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    var avg = (red + green + blue) / 3;
    pixel.setAlpha(255);
    pixel.setRed(255 - red);
    pixel.setGreen(255 - green);
    pixel.setBlue(255 - blue);
  }
}

function doRainbow() {
  if (isImageComplete(rainbowImage)) {
    // check if image is loaded
    RainbowFilter(); // perform filter operation
    rainbowImage.drawTo(canvascontents); // display image on canvas
  }
}

function RainbowFilter() {
  var height = rainbowImage.getHeight();
  for (var pixel of rainbowImage.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y <= height / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > height / 7 && y <= (2 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(1.2 * avg - 51);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (2 * height) / 7 && y <= (3 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (3 * height) / 7 && y <= (4 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }
    if (y > (4 * height) / 7 && y <= (5 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > (5 * height) / 7 && y <= (6 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
    if (y > (6 * height) / 7 && y <= (7 * height) / 7) {
      if (avg < 128) {
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      }
      if (avg >= 128) {
        pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4 * avg + 153);
      }
    }
  }
}

// Frame Filter //
function doFrame() {
  if (isImageComplete(framedImage)) {
    FrameFilter();
    framedImage.drawTo(canvascontents);
  }
}

function FrameFilter() {
  var width = framedImage.getWidth();
  var height = framedImage.getHeight();
  for (var pixel of framedImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (y < 15) {
      pixel.setRed(255);
      pixel.setGreen(215);
      pixel.setBlue(0);
    }
    if (y > height - 15) {
      pixel.setRed(255);
      pixel.setGreen(215);
      pixel.setBlue(0);
    }
    if (x < 15) {
      pixel.setRed(255);
      pixel.setGreen(215);
      pixel.setBlue(0);
    }
    if (x > width - 15) {
      pixel.setRed(255);
      pixel.setGreen(215);
      pixel.setBlue(0);
    }
  }
}
//to make blur effect
function doBlur() {
  var newImage = new SimpleImage(blurImage.getWidth(), blurImage.getHeight());
  for (var pixel of blurImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5) {
      newImage.setPixel(x, y, pixel);
    } else {
      var random = Math.floor(Math.random() * 23 - 11);
      var newX = random + x;
      var newY = random + y;
      if (newX > 0 && newX <= blurImage.getWidth() - 1) {
        if (newY > 0 && newY <= blurImage.getHeight() - 1) {
          var newPixel = blurImage.getPixel(newX, newY);
          newImage.setPixel(x, y, newPixel);
        }
      }
    }
  }
  newImage.drawTo(canvascontents);
}
// Rest Image to original //
function reset() {
  originalImage.drawTo(canvas);
}
// Clear Canvas //
function clearCanvas() {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
