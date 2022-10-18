const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": " ",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};
function cari() {
  let negara = document.getElementById("negara").value;

  fetch(
    "https://covid-193.p.rapidapi.com/statistics?country=" + negara,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let total = response.response[0].cases.total;
      let country = response.response[0].country;
      let active = response.response[0].cases.active;
      let new1 = response.response[0].cases.new;
      let recovered = response.response[0].cases.recovered;
      let tested = response.response[0].tests.total;
      let death = response.response[0].deaths.total;
      document.getElementById("neg").innerHTML = country;
      document.getElementById("total").innerHTML = total;
      document.getElementById("active").innerHTML = active;
      document.getElementById("new").innerHTML = new1;
      document.getElementById("recovered").innerHTML = recovered;
      document.getElementById("tested").innerHTML = tested;
      document.getElementById("death").innerHTML = death;
      console.log(country);
    })
    .catch((err) => console.error(err));
}
