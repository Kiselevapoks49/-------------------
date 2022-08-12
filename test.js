  var defects = document.getElementById('defects');
  
  function GetDefects() {
  
  var url = "http://10.15.101.91/test/hs/CentralService/defects";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Authorization", "Basic SFM6ZkE1Y2F0dXE=");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        
        myObj = [];
        myObj = JSON.parse(xhr.responseText);
              txt = "<select>"
              for (xhr.responseText in myObj) {
                   txt += "<option>" + myObj.name;
              }
              txt += "</select>" 
              document.getElementById("defect").innerHTML = txt;

    }};
    
   xhr.send();}

   //оборудование

   function GetOborudovanie() {

   var url = "http://10.15.101.91/test/hs/CentralService/Get_oborudovanie";
   var xhr = new XMLHttpRequest();
   xhr.open("POST", url);

   xhr.setRequestHeader("Authorization", "Basic SFM6ZkE1Y2F0dXE=");
   xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
   xhr.setRequestHeader("Content-Type", "application/json");

   xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

   var data = `{
   "number": "155"
    }`;

   xhr.send(data);}

   //сотрудники 

   function GetSotrudnik () {

   var url = "http://10.15.101.91/test/hs/CentralService/GetSotrudnik";
   var xhr = new XMLHttpRequest();
   xhr.open("POST", url);

   xhr.setRequestHeader("Authorization", "Basic SFM6ZkE1Y2F0dXE=");
   xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
   xhr.setRequestHeader("Content-Type", "application/json");

   xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

   var data = `{
   "name": "ива"
    }`;

   xhr.send(data);}

















   //заявка 

   //var url = "http://10.15.101.91/test/hs/CentralService/insertDef";
   //var xhr = new XMLHttpRequest();
   //xhr.open("POST", url);

   //xhr.setRequestHeader("Authorization", "Basic SFM6ZkE1Y2F0dXE=");
   //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
   //xhr.setRequestHeader("Content-Type", "application/json");

   //xhr.onreadystatechange = function () {
   //if (xhr.readyState === 4) {
      //console.log(xhr.status);
      //console.log(xhr.responseText);

      //if (this.status != 200) {
       // console.log(this.statusText);
        //return;
      //} else {
   //}}};

   //var data = `{"nameOborudovanie": "Машина листогибочная Sahinler RM 1550-90",
   //"vidDef": "Электрический",
   //"podrazdelenie": [
   //  "Служба энергетика"
   //],
   //"opisanie": "Тестовое описание дефекта",
   //"komment": "Тестовый комментарий дефекта",
   //"otvetstv": "659d0fac-a00b-11ea-8177-0cc47a594943",
   //"PK": "SA00",
   //"userPK": "lomanov_ds",
   //"Guid": "fcd38171-703b-11eb-8eb4-0cc47a594943"
  //}`;

   

   //xhr.send(data);



   


