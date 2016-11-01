String.prototype.repeat = function(n) {
   return(new Array(n + 1)).join(this);
};

val = [];
var amax = [];

/**
 * Rotates the input depending on the mode.
 *
 * @param {"Isaac Senn"} text How the text should be rotated.
 * @param {5} mode How the text should be rotated.
 * @param {TRUE} reversed [Optional] - Reverses the order of text.
 * @param {2} whitespaces [Optional] - Spacing between slanted text.
 * @return The input value rotated depending on the selected mode.
 * @customfunction
 */

function ROTATE(text, mode, reversed, whitespaces) {
  if (typeof text != "string") {
	return "Parameter one expects a string not a(n) " + typeof text + " value [" + text + "].";
  }
	
  if (typeof mode != "number") {
	return "Parameter two expects a number value not a(n) " + typeof mode + " value [" + mode + "].";
  }
	
  if (typeof reversed == "undefined") {
	reversed = false;
  } else if (typeof reversed != "number") {
	return "Parameter three expects a boolean value not a(n) " + typeof reversed + " value [" + reversed + "].";
  }
	
  if (whitespaces !== undefined && mode == (1 || 2 || 3)) {
	return "Parameter three is not compatible with mode " + mode + ".";
  } else if (typeof whitespaces === "undefined") {
	whitespaces = 2;
  } else if (typeof whitespaces !== "number") {
	return "Parameter three expects a number value not a(n) " + typeof whitespaces + " value [" + whitespaces + "].";
  } else {
    switch(mode) {
      case 1: // 90 deg
        if (reversed) {
          return text.split("").reverse().join("\n");
        } else {
          return text.split("").join("\n");
        }
        break;
      case 2: // rows
        if (reversed) {
          return text.split("").reverse();
        } else {
          return text.split("");
        }
        break;
      case 3: // slanted text
        for (i = 0; i < text.length; i++) {
          val.push(" ".repeat([i] * whitespaces) + text.split("")[i]);
        }
        
        if (reversed) {
          return val.join("\n");
        } else {
          return val.reverse().join("\n");
        }
        break;
      case 4: // slanted words
        for (i = 0; i < text.split(" ").length; i++) {
          amax.push(text.split(" ")[i].length);
        }
        
        var max = Math.max.apply(Math, amax)+1;
        
        for (i = 0; i < text.split("").length; i++) {
          val.push(" ".repeat([i] % max * whitespaces) + text.split("")[i]);
        }
        
        if (reversed) {
          return val.reverse().join("\n");
        } else {
          return val.join("\n");
        }
        break;
      case 5: // slanted statement
        for (i = 0; i < text.split(" ").length; i++) {
          val.push(" ".repeat([i] * whitespaces) + text.split(" ")[i]);	
        }
        
        if (reversed) {
          return val.reverse().join("\n");
        } else {
          return val.join("\n");
        }
        break;
      default:
        return "Invalid";
    }
  }
}
