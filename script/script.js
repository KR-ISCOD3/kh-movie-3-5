new Typed(".auto-type", {
  strings: ["រឿងភាគ", "រឿងដំុ", "នឹងតុក្កតា"],
  loop: true,
  typeSpeed: 120,
  backSpeed: 120,
});

const header = document.getElementById("nav");

header.style.padding = "35px 0";

window.onscroll = function () {
  const scrollvalue = window.scrollY;
  // console.log(scrollvalue);

  if (scrollvalue > 120) {
    header.style.padding = "16px 0";
    header.style.backgroundColor = "#0d0d0d";
    header.style.transition = "0.3s ease-in";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "35px 0";
    header.style.transition = "0.3s ease-out";
  }
};

var movieAarr = [
  {
    title: "ចញ្ជៀងខ្មោច",
    year: "២០១៨",
    duration: 120,
    rate: 4.3,
    category: "scary",
    img: "./assets/images/movie1.png",
  },
  {
    title: "ឃើញក្បាលខ្ញំុទេ",
    year: "២០២៤",
    duration: 160,
    rate: 4.5,
    category: "scary",
    img: "./assets/images/movie2.png",
  },
  {
    title: "ខ្មោចចូល",
    year: "២០២៣",
    duration: 123,
    rate: 4.8,
    category: "scary",
    img: "./assets/images/movie3.png",
  },
  {
    title: "ខ្មោចពោះធំ",
    year: "២០២៥",
    duration: 123,
    rate: 4.2,
    category: "scary",
    img: "./assets/images/movie4.png",
  },
];

var scarymovie = document.getElementById("scarymovie");


scarymovie.innerHTML = "";
movieAarr.forEach((e) => {
  scarymovie.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 ">
            <div class="px-3">
                <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2">
                    <img src="${e.img}" alt="" class="w-100 h-100 object-fit-cover">
                </div>

                <div class="d-flex justify-content-between mt-4 mb-2">
                    <h3 class="text-light font-kh-bayon">${e.title}</h3>
                    <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <p class="border border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                    <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center ">
                        <i class="bi bi-alarm me-2 fw-bolder text-blue-400 fw-bold"></i>
                        <p class="text-light m-0 fw-bolder">${e.duration} min</p>
                        &ensp;
                        <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                        <p class="text-light m-0 fw-bolder">${e.rate}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});
