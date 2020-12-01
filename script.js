function bug2()
{
  var counter = 0;
  var index = 0;
  var arrayOf10s = [];
  while(counter <= 100)
  {
    arrayOf10s[index] = counter;
    index = index + 1;
    counter = counter + 10;
  } 
  console.log(arrayOf10s);
  //"0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
}