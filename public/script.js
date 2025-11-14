async function updateData() {
  const res = await fetch("/data");
  const data = await res.json();

  document.getElementById("temp").textContent = data.temperature;
  document.getElementById("hum").textContent = data.humidity;

  const log = document.getElementById("log");
  const time = new Date().toLocaleTimeString();
  log.innerHTML += `<p>[${time}] Data updated: Temp ${data.temperature}°C | Hum ${data.humidity}%</p>`;
  log.scrollTop = log.scrollHeight;
}

setInterval(updateData, 1000);
updateData();
