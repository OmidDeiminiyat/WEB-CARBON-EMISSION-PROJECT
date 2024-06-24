

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
      carbonData(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  
function recivedUrl(){
    const url = document.getElementById('GreenCheck').value;
    console.log(url);
    fetchData(url);
}


function carbonData(items) {
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
    const apiEndpoint = `https://api.ipify.org?format=json&domain=${domain}`;
    
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(`IP Address for ${domain}: ${data.ip}`);
      carbonDataRecived(data.ip)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  


  // script.js
// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

  