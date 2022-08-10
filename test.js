function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);


var url = "http://10.15.101.91/test/hs/CentralService/Get_oborudovanie ";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Basic QmFzaWM6U0ZNNlprRTFZMkYwZFhFPQ==");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var nameOborudovanie = `{
    "number": "здесь или часть наименования оборудования или инвентарного номера"
    }
    
`;

xhr.send(nameOborudovanie);

var url = "http://10.15.101.91/test/hs/CentralService/defects  ";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Basic QmFzaWM6U0ZNNlprRTFZMkYwZFhFPQ==");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

var url = "http://10.15.101.91/test/hs/CentralService/GetSotrudnik ";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Basic QmFzaWM6U0ZNNlprRTFZMkYwZFhFPQ==");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "name": "лома"
}

`;

xhr.send(data);

var url = "http://10.15.101.91/test/hs/CentralService/insertDef  ";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Basic QmFzaWM6U0ZNNlprRTFZMkYwZFhFPQ==");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "nameOborudovanie": "Машина листогибочная Sahinler RM 1550-90",
  "vidDef": "Электрический",
  "podrazdelenie": [
    "Служба энергетика"
  ],
  "opisanie": "Тестовое описание дефекта",
  "komment": "Тестовый комментарий дефекта",
  "otvetstv": "659d0fac-a00b-11ea-8177-0cc47a594943",
  "PK": "SA00",
  "userPK": "lomanov_ds",
  "Guid": "fcd38171-703b-11eb-8eb4-0cc47a594943"
}

`;

xhr.send(data);


