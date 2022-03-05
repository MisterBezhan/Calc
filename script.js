function discriminar(a, b, c) {
    return b * b - 4 * a * c;
  }
  
  function roots() {
  
    var a = document.getElementById('a').value.replace(',', '.');
    var b = document.getElementById('b').value.replace(',', '.');
    var c = document.getElementById('c').value.replace(',', '.');
  
    if (a == '') {
      a = 1;
    }
  
    if (b == '') {
      b = 1;
    }
  
    if (c == '') {
      c = 0;
    }
  
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
  
       if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return message.innerHTML = '<p class="error">Вы ввели некорректные значения!</p>';
    }
  
    if (a == 0) {
      return message.innerHTML = '<p class="error">Значение коэффициента <strong>а</strong> не может быть равно 0!</p>';
    }
  
    var d = discriminar(a, b, c);
  
    message.innerHTML = '<p class="alert">Значение дискриминанта: ' + d + '</p>';
  
    if (d > 0) {
    
      var x1 = (-b + Math.sqrt(d)) / (2 * a);
              x1 = Math.round(x1 * 100) / 100;
      var x2 = (-b - Math.sqrt(d)) / (2 * a);
              x2 = Math.round(x2 * 100) / 100;
  
      return message.innerHTML += '<p class="success">Дискриминант больше нуля, поэтому уравнение имеет два корня:<br>x1 &asymp; ' + x1 + '<br>x2 &asymp; ' + x2 + '</p>';
      
    } else if (d == 0) {
    
      var x1 = (-b + Math.sqrt(d)) / (2 * a);
              x1 = Math.round(x1 * 100) / 100;
  
      return message.innerHTML += '<p class="success">Дискриминант равен нулю, поэтому уравнение имеет один корень:<br>x1 &asymp; ' + x1 + '</p>';
      
    } else {
    
      return message.innerHTML += '<p class="success">Так как дискриминант меньше нуля, то уравнение не имеет корней.</p>';
      
    }
  
  }