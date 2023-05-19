const userAgents = [
  {
    name: 'Chrome',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
  },
  {
    name: 'Firefox',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0'
  },
  {
    name: 'Safari',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
  }
];

function changeUserAgent(userAgent) {
  const headers = new Headers();
  headers.append('User-Agent', userAgent);

  fetch('https://www.example.com', {
    headers: headers
  })
    .then(response => response.text())
    .then(data => console.log(data));
}

let selectAgent = document.getElementById('userAgent');
let select = document.createElement('select');
userAgents.forEach(userAgent => {
  const option = document.createElement('option');
  option.text = userAgent.name;
  option.value = userAgent.value;
  select.add(option);
});
select.addEventListener('change', (event) => {
  const userAgent = event.target.value;
  changeUserAgent(userAgent);
});
selectAgent.appendChild(select);

const userAgentElement = document.getElementById('user-agent');
userAgentElement.appendChild(select);