/* =====================================================
   HER SPECIAL DAY
   JAVASCRIPT
===================================================== */


/* =====================================================
   🎂 BIRTHDAY DATE

   ဒီမှာ သူ့မွေးနေ့ထည့်ပါ။

   ဥပမာ -
   22 September 2026

   "2026-09-22T00:00:00"
===================================================== */

const birthdayDate =
    new Date("2026-09-22T00:00:00").getTime();



/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        birthdayDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


setInterval(updateCountdown, 1000);

updateCountdown();



/* =====================================================
   PAGE SYSTEM
===================================================== */

const pages =
    document.querySelectorAll(".page");


function showPage(number) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document
        .getElementById("page" + number)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById("bgMusic");


const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


function playMusic() {

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.innerText = "♫";

        })
        .catch(() => {

            console.log(
                "Browser blocked autoplay"
            );

        });

}


musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicButton.innerText = "♫";

        } else {

            music.pause();

            musicButton.innerText = "🔇";

        }

    }
);



/* =====================================================
   PAGE 1 → PAGE 2
===================================================== */

document
    .getElementById("startButton")
    .addEventListener("click", () => {

        playMusic();

        showPage(2);

    });



/* =====================================================
   GIFT OPEN
===================================================== */

const gift =
    document.getElementById("gift");


const openGift =
    document.getElementById("openGift");


gift.addEventListener(
    "click",
    () => {

        gift.classList.add("open");

        setTimeout(() => {

            showPage(3);

            startTyping();

        }, 1300);

    }
);


openGift.addEventListener(
    "click",
    () => {

        gift.classList.add("open");

        setTimeout(() => {

            showPage(3);

            startTyping();

        }, 1300);

    }
);



/* =====================================================
   TYPEWRITER MESSAGE
===================================================== */

const message =

`Happy Birthday ♡

ဒီနေ့ဟာ မင်းအတွက်
အရမ်းလှပတဲ့နေ့လေးတစ်နေ့ ဖြစ်ပါစေ။

မင်းရဲ့အပြုံးလေးလိုပဲ
မင်းရဲ့နေ့ရက်တိုင်းလည်း
အမြဲလှပနေပါစေ။

May your birthday be
as beautiful as you are. ♡`;


let typingStarted = false;


function startTyping() {

    if (typingStarted) return;

    typingStarted = true;


    const element =
        document.getElementById(
            "typingText"
        );


    let index = 0;


    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message[index]
                    .replace(/\n/g, "<br>");

            index++;

            setTimeout(type, 35);

        }

    }


    type();

}



/* =====================================================
   NEXT BUTTONS
===================================================== */

document
    .querySelectorAll(".next-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const current =
                    [...pages]
                        .findIndex(
                            page =>
                                page.classList.contains(
                                    "active"
                                )
                        );


                showPage(current + 2);

            }
        );

    });



/* =====================================================
   STARS
===================================================== */

const stars =
    document.getElementById("stars");


for (let i = 0; i < 120; i++) {

    const star =
        document.createElement("span");


    star.className = "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.animationDelay =
        Math.random() * 4 + "s";


    star.style.animationDuration =
        2 + Math.random() * 4 + "s";


    stars.appendChild(star);

}



/* =====================================================
   FLOATING HEARTS
===================================================== */

const particleContainer =
    document.getElementById(
        "particles"
    );


function createParticle() {

    const heart =
        document.createElement("div");


    heart.className =
        "particle";


    const symbols = [
        "♡",
        "✦",
        "✧",
        "·"
    ];


    heart.innerText =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        8 + Math.random() * 14 + "px";


    heart.style.animationDuration =
        6 + Math.random() * 6 + "s";


    particleContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 13000);

}


setInterval(
    createParticle,
    700
);


for (let i = 0; i < 15; i++) {

    setTimeout(
        createParticle,
        i * 200
    );

}



/* =====================================================
   VIDEO
===================================================== */

const video =
    document.getElementById(
        "memoryVideo"
    );


video.addEventListener(
    "play",
    () => {

        music.volume = 0.08;

    }
);


video.addEventListener(
    "pause",
    () => {

        music.volume = 0.35;

    }
);


video.addEventListener(
    "ended",
    () => {

        music.volume = 0.35;

    }
);



/* =====================================================
   RESTART
===================================================== */

document
    .getElementById("restart")
    .addEventListener(
        "click",
        () => {

            typingStarted = false;

            document.getElementById(
                "typingText"
            ).innerHTML = "";

            showPage(1);

        }
    );