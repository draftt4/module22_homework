const button = document.querySelector('.btn');
const sizeContent = document.querySelector('.sizescreen');
const geoContent = document.querySelector('.geo');

const error = () => {
    geoContent.textContent = 'Cannot find your location';
  }

  const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    geoContent.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    geoContent.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    geoContent.textContent = 'Ссылка на карту';
  }


button.addEventListener('click', ()=> {
    sizeContent.textContent = `Your screen size is ${window.innerWidth} px + ${window.innerHeight} px`;

        geoContent.href = '';
        geoContent.textContent = '';

        if (!navigator.geolocation) {
            geoContent.textContent = 'Geolocation is not supported by your browser';
          } else {
            geoContent.textContent = 'Surching your geolocation';
            navigator.geolocation.getCurrentPosition(success, error);
          }
})

