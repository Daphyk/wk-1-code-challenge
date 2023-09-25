
//initialized detectDemeritPoints function
function detectDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints <= 12) {
        return `Points: ${demeritPoints}`;
      } else {
        return "License suspended";
      }
    }
  }
  
  // function speedDetector
  function speedDetector() {
    const input = prompt("Enter the car speed in (km/h):");
    const speed = parseInt(input);
  
    if (!isNaN(speed)) {
      const result = detectDemeritPoints(speed);
      alert(result);
    } else {
      alert("Invalid input. Enter a valid speed as a number.");
    }
  }

  //calling the function to detect speed and demerit ponts
  speedDetector();

