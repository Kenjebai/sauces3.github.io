function sendwhatsapp(){
  let phonenumber = "+996702944777";

  var name1;
  var data1;
  function taste(){
    const qq = document.querySelectorAll('.vals');
    for (let i = 0; i < qq.length; i++){
      if(qq[i].checked){
        data1 = qq[i].value;
        break;
      }
    }
    name1 = data1;
  }
  taste()

  var name2;
  var data2;
  function ww(){
    const ee = document.querySelectorAll('.nasyshennost');
    for(let i = 0; i < ee.length; i++){
      if(ee[i].checked){
        data2 = ee[i].value;
        break;
      }
    }
    name2 = data2;
  }
  ww();
  
  var name5;
  var data5;
  function japans(){
    const jj = document.querySelectorAll('.japon');
    for(let i = 0; i < jj.length; i++){
      if(jj[i].checked){
        data5 = jj[i].value;
        break;
      }
    }
    name5 = data5;
  }
  japans();

  var name3;
  var data3
  const wa2 = function () {     
    const inputs = document.querySelectorAll('.grade');
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++){
      if(inputs[i].checked){
        data3 = inputs[i].value;
        break;
      }
    }
    name3 = data3;
  }
  wa2();

  var name4;
  var data4;
  function aa(){
    const bb = document.querySelectorAll('.cc');
    for(let i = 0; i < bb.length; i++){
      if(bb[i].checked){
        data4 = bb[i].value;
        break;
      }
    }
    name4 = data4;
  }
  aa()

  let name = document.querySelector('.name').value;
  let phone = document.querySelector('.phone').value;
  let email = document.querySelector('.email').value;
  let message1 = document.querySelector('.message2').value;
  let message = document.querySelector('.message').value;
  let url = "https://wa.me/" + phonenumber + "?text=" 
  +"*Как вам вкус соевого соуса? :* " +name1+"%0a"
  +"*Как вы оцениваете насыщенность вкуса? :* " +name2+"%0a"
  +"*Чем этот соус отличается от тех, которые вы пробовали раньше? :* " +message1+"%0a"
  +"*Общая оценка соуса по шкале от 1 до 5 (1 - совсем не понравился, 5 - превосходный соус) :* " +name3+"%0a"
  +"*Купили бы вы этот соус для домашнего использования? :* " +name4+"%0a"
  +"*Есть ли что-то, что вы хотели бы улучшить в этом соусе? :* " +message+"%0a"
  +"*Имя :* " +name+"%0a"
  +"*Телефон :* " +phone+"%0a"
  +"*Емайл :* " +email+"%0a%0a";
    
  window.open(url, '_blank').focus();
}

