<html>
<head><title>Sum of two numbers</title></head>

  <script>
  function myFunction() {
      var x, y,sum;
      x = parseFloat(document.getElementById('firstnumber').value);
      y = parseFloat(document.getElementById('secondnumber').value);
      sum = x + y;
      document.getElementById('answer').value = sum;
  }
  </script>


<body>
  <h1>My First Heading</h1>
  First number: <br> <input type="number" id="firstnumber"><br>
  Second number:<br> <input type="number" id="secondnumber"><br>
  <button type="button" onclick="myFunction()">Submit</button><br>
  Answer: <input type="number" id="answer">

</body>
</html>
