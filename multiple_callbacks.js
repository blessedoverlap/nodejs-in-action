function doSomething() {
  return false;
}

function asycFunc(success, failure) {
  if (doSomething()) {
    success();
  } else {
    failure();
  }
}

asycFunc(
  function() {
    console.log('I handle success.');
  },
  function() {
    console.log('I handle failure.');
  }
);
