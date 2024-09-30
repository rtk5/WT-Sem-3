const route = "https://instantly-secure-chicken.ngrok-free.app/crackit"; // Replace with the actual route

// If you don't have your SRN yet
fetch(route + "?srn=pes2ug23cs485")
  .then(response => response.json())
  .then(data => console.log(data));

// If you already have your SRN
fetch(route, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ srn: 'pes2ug23cs485' })
})
  .then(response => response.json())
  .then(data => console.log(data));