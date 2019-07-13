
  var assert = {
    isTrue: function(assertionToCheck,testname) {

      if (!assertionToCheck) {
        console.log("Failed!" + testname);
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Passed "+ testname );
    }
  }
}
