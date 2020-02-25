import { myIcon } from "/js/app.js";
var skycons = new Skycons({ color: "white" });
// on Android, a nasty hack is needed: {"resizeClear": true}

// you can add a canvas by it's ID...
// skycons.add("icon2", Skycons.${icon});
let iconDetail = document.querySelector(".icon-detail");
let x = myIcon;
// // ...or by the canvas DOM element itself.
skycons.add(document.getElementById("icon2"), "cloudy");

// // if you're using the Forecast API, you can also supply
// // strings: "partly-cloudy-day" or "rain".

// start animation!
skycons.play();

// // you can also halt animation with skycons.pause()

// // want to change the icon? no problem:
// skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

// // want to remove one altogether? no problem:
// skycons.remove("icon2");
console.log(myIcon);
