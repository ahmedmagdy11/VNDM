document.getElementById("form").addEventListener("submit", async(event) => {
  event.preventDefault();
  const body = {
    name: document.getElementById("name"),
    age: document.getElementById("age"),
  };

  const response = await fetch('/',{
      method:'POST',
      body:JSON.stringify(body)
  })
  
});
