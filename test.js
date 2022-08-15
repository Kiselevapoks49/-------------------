  var defects = document.getElementById("defect1");
  
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

        
        document.getElementById('defect1').innerHTML;
        var obj = JSON.parse(xhr.responseText);
        let res = [];
        for(var i in obj)

        res.innerHTML += res.push(obj[i]);
        res.innerHTML = "<option value>" + obj[i] + "</option>";
        
        document.getElementById('defect1').innerHTML = res.innerHTML;

        


        //const parse = JSON.parse(xhr.responseText); 
       

        //alert(res);

        //document.getElementsByName("defect").values=txt;
        
       
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


      document.getElementById('nameOborudovanie').innerHTML;
        var obj = JSON.parse(xhr.responseText);
        var res = [];
        for(var i in obj)

        res.innerHTML = res.push(obj[i]);
        res.innerHTML = "<option>" + res + "</option>";

        document.getElementById('nameOborudovanie').innerHTML = res.innerHTML;
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



   


