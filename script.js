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

const back = (val) =>{
    val -= val
    console.log(val)
    // document.querySelector(`song-${va}`)
}