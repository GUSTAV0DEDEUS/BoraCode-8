TweenMax.staggerFrom(".card" , 1, {
  delay: 0,
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .4);

TweenMax.staggerFrom(".container" , 1, {
  delay: 0,
  opacity:0,
  x: -20,
  ease: Expo.ease
});

TweenMax.staggerFrom(".card .text" , .6, {
  delay: 2,
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .5);

TweenMax.staggerFrom(".container .text .content" , .6, {
  delay: 4,
  opacity:0,
  x: -20,
  ease: Expo.ease
}, .5);

