const lokasiPusat = {
  nama: "Kantor Pusat Jabnet",
  alamat: "Jl. Patriot No.35, Sukagalih, Kec. Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151",
  kota: "Garut, Jawa Barat",
  socialMedia: ["#", "Instagram Jabnet"],
  gmaps: ["https://maps.app.goo.gl/r3UGsJfBhgUTTwCn8", "Cek di Google Maps"],
  coord: [-7.197625, 107.883198], // Koordinat pusat Jabnet
};

const jalurKabel = [
  {
    nama: "Jalur Fiber Optik - Rute Cilawu",
    coords: [
      [-7.197625, 107.883198], // koordinat kantor pusat
      [-7.1998228995, 107.88525406],
      [-7.20311519087, 107.8854795047],
      [-7.2030946714, 107.8854464125],
      [-7.20313160642, 107.88710102],
      [-7.20578986602, 107.887111969],
      [-7.21012517839, 107.8887638481],
    ],
  },
  {
    nama: "Jalur Fiber Optik - Rute Atas",
    coords: [
      [-7.1998228995, 107.88525406],
      [-7.199582795933414, 107.8877701870515],
      [-7.197292330412231, 107.88680156364104],
      [-7.190380637165214, 107.8866257587556],
      [-7.190446689363021, 107.88931271800423],
      [-7.186875536948552, 107.8894004808785],
    ],
  },
  {
    nama: "Jalur Fiber Optik - Rute Bayongbong",
    coords: [
      [-7.197625, 107.883198], // koordinat kantor pusat
      [-7.1949892748759705, 107.88154524077659],
    ],
  },
];

const jabnetIcon = L.divIcon({
  html: `
              <div class="custom-marker-container">
                <svg width="45" height="72" viewBox="0 0 24 38.4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 7.875 12 26.4 12 26.4s12-18.525 12-26.4C24 5.373 18.627 0 12 0z" fill="#f37021"/>
                </svg>
                <!-- Logo Jabnet ditempatkan di atas pin -->
                <img src="/assets/img/Jabnet-Logo.png" class="jabnet-logo-on-pin w-75 h-50" alt="Logo Jabnet">
              </div>
            `,
  className: "",
  iconSize: [45, 72],
  iconAnchor: [22.5, 72],
  popupAnchor: [0, -72],
});

const map = L.map("map").setView(lokasiPusat.coord, 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markerPusat = L.marker(lokasiPusat.coord, { icon: jabnetIcon })
  .addTo(map)
  .bindPopup(
    L.popup({}).setContent(
      `<h5>${lokasiPusat.nama}</h5>
              <p>${lokasiPusat.alamat}</p>
              <p>${lokasiPusat.kota}</p>
              <div class="links">
                <a href="${lokasiPusat.socialMedia[0]}" target="_blank">${lokasiPusat.socialMedia[1]}</a>
                <a href="${lokasiPusat.gmaps[0]}" target="_blank">${lokasiPusat.gmaps[1]}</a>
              </div>`
    )
  );

// Gambar semua jalur kabel di peta
jalurKabel.forEach((jalur) => {
  const polyline = L.polyline(jalur.coords, {
    color: "blue",
    weight: 4,
    opacity: 0.7,
  }).addTo(map);

  polyline.bindTooltip(jalur.nama);
});
