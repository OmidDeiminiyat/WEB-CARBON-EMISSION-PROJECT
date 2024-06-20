

async function fetchData(domain) {
    const apiEndpoint = `https://api.thegreenwebfoundation.org/api/v3/greencheck/${domain}`;
    
    try {
      const response = await fetch(apiEndpoint, {
        headers: {
          'accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      greenData(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  
function recivedUrl(){
    const url = document.getElementById('GreenCheck').value;
    console.log(url);
    fetchData(url);
}


function greenData(items) {
    const firstData = document.getElementById('dataRecived');
    console.log(items.green);
    let colors = 'white';
    if (items.green == true) {
         colors = 'Green'
    } else if(items.green != true) {
         colors = 'Red'
    }
    firstData.innerHTML = ''

    let newElements = `<h1>Company: ${items.hosted_by} </h1>
    <h2>Website Url: ${items.hosted_by_website} </h2>
    <p>Carbon health status is: ${colors}</p>`

    firstData.innerHTML = newElements;
}


// CO2 check


async function carbonDataRecived(domain) {
    const apiEndpoint = `https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${domain}`;
    
    try {
      const response = await fetch(apiEndpoint, {
        headers: {
          'accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      carbonData(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  
function carbon(){
    const url = document.getElementById('Carboncheck').value;
    console.log(url);
    fetchIPAddress(url);
}


function carbonData(items) {
    const firstData = document.getElementById('carbonData');
    console.log(items.green);
    let colors = 'white';
    if (items.green == true) {
         colors = 'Green'
    } else if(items.green != true) {
         colors = 'Red'
    }
    firstData.innerHTML = ''

    let newElements = `<h1>Checked ip: ${items.checked_ip} </h1>
    <h2>Country: ${items.country_name} , Year: ${items.year}</h2>
    <p>Carbon_intensity: ${items.carbon_intensity}, Generation from fosdil: ${items.generation_from_fossil}</p>`

    firstData.innerHTML = newElements;
}



async function fetchIPAddress(domain) {
    const apiEndpoint = `https://dns.google/resolve?name=${domain}&type=A`;

    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const ipAddress = data.Answer[0].data;
        console.log(`IP Address for ${domain}: ${ipAddress}`);
        carbonDataRecived(ipAddress)
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }


  

  