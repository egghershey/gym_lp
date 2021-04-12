function fncBMI() {
  var bmi, w, h; // BMI=bmi, 体重=w,身長h
  w = eval(document.bmi.bmiWeight.value);
  h = eval(document.bmi.bmiHeight.value)/100; //mに変換
  bmi = w / (h*h);
  
  document.bmi.bmiAns.value = bmi;
}