 const timeZone = document.querySelector('.timezone');
 const date = document.querySelector('.date');
 const button = document.querySelector('.btn');

 var split = new Date().toString().split(" ");
 var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
 function timeZoneFunc() {
     timeZone.textContent = `${split} + ${timeZoneFormatted}`;
 }

 const error = () => {
    date.textContent = 'Cannot find your location';
  }

  const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    date.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    date.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    date.textContent = 'Ссылка на карту';
  }

  button.addEventListener('click', () =>{
    date.href = '';
    date.textContent = '';

    if (!navigator.geolocation) {
        date.textContent = 'Geolocation is not supported by your browser';
      } else {
        date.textContent = 'Surching your geolocation';
        navigator.geolocation.getCurrentPosition(success, error);
      }
    timeZoneFunc();
    reverseGeocodingWithGoogle();
})