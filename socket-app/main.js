const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')



const getData = () => {

 axios({
   method: "POST",
   url: "https://zillowdimashirokovv1.p.rapidapi.com/GetChart.htm",
   headers: {
     "content-type": "application/x-www-form-urlencoded",
     "x-rapidapi-host": "ZillowdimashirokovV1.p.rapidapi.com",
     "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
     useQueryString: true,
   },
   data: {
     chartDuration: ["1year", "5years", "10years"],
     "unit-type": "dollar",
     "zws-id": "<required>",
   },
 })
   .then((response) => {
     console.log(response);
   })
   .catch((error) => {
     console.log(error);
   });
}

getBtn.addEventListener("click", getData)