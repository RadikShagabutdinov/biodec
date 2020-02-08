const MAP_CENTER = [56.995205, 60.459628];

export function yandexMap() {
  const myMap = new window.ymaps.Map("map", {
    center: MAP_CENTER,
    zoom: 15,
    behaviors: ['default'],
    controls: [],
  }, {});
  const myPlacemark = new window.ymaps.Placemark(myMap.getCenter(), { name: 'Контакты' }, {});
  myMap.geoObjects.add(myPlacemark);
};

export function googleMap() {
  const position = { lat: MAP_CENTER[0], lng: MAP_CENTER[1] };
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 15,
    disableDefaultUI: true,
  });
  const myPlacemark = new window.google.maps.Marker({ position, map });
}
