'use strict';

let t;

const clickedSong = (val) => {
    if (!t) {
        t = document.querySelector(`.song-${val}`);
        t.classList.toggle('hidden');
    } else {
        removeExist(t);
        t = document.querySelector(`.song-${val}`);
        t.classList.toggle('hidden');
    }
    return true
};

const removeExist = (t) => {
    t.classList.toggle("hidden");
};

const back = function (val) {
    document.querySelector(`.song-${val}`).classList.toggle("hidden");
    val = (val === 1) ? 8 : val - 1;
    document.querySelector(`.song-${val}`).classList.toggle("hidden");
    return true
}

const forward = (val) => {
    document.querySelector(`.song-${val}`).classList.toggle("hidden");
    val = (val === 8) ? 1 : val + 1
    document.querySelector(`.song-${val}`).classList.toggle("hidden");
    return true
}