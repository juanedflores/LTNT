const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

whats_cap = document.getElementById('whats_caption');

slidesContainer.addEventListener('scroll', (event) => {
  console.log('scrolled');
});

nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  if (slidesContainer.scrollLeft < slideWidth) {
    whats_cap.innerHTML = 'Nana’s mother writes in the Armenian alphabet in Karabakh Armenian dialect: “Hello, did you take the exam?” And sends her a picture of the food coupons they got as there are food shortages during the blockade and everything is rationed.';
  } else if (slidesContainer.scrollLeft >= slideWidth * 1 && slidesContainer.scrollLeft < slideWidth * 2) {
    whats_cap.innerHTML =
      'Message of her father written with Cyrillic alphabet in a mix of Karabakh Armenian dialect and Russian: “My darling baby girl, today you have the honor of representing your school, an institution that gives you a ticket for a new life. I know you have a strong personality and disappointments should not take you down. It does not matter that we are not physically with you. You know that you are always in our hearts filled of love. Show us all the strength of your soul. We are proud of you my joy. May God be with us.”';
  } else if (slidesContainer.scrollLeft >= slideWidth * 2 && slidesContainer.scrollLeft < slideWidth * 3) {
    whats_cap.innerHTML = 'Photo of Nana studying without electricity during the blockade.';
  } else if (slidesContainer.scrollLeft >= slideWidth * 3 && slidesContainer.scrollLeft < slideWidth * 4) {
    whats_cap.innerHTML = 'Nana’s mother sends her a text in Armenian:';
  }
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  console.log(slideWidth);
  console.log(slidesContainer.scrollLeft);
  if (slidesContainer.scrollLeft > slideWidth * 3) {
    whats_cap.innerHTML = 'Photo of Nana studying without electricity during the blockade.';
  } else if (slidesContainer.scrollLeft <= slideWidth * 3 && slidesContainer.scrollLeft > slideWidth * 2) {
    whats_cap.innerHTML =
      'Message of her father written with Cyrillic alphabet in a mix of Karabakh Armenian dialect and Russian: “My darling baby girl, today you have the honor of representing your school, an institution that gives you a ticket for a new life. I know you have a strong personality and disappointments should not take you down. It does not matter that we are not physically with you. You know that you are always in our hearts filled of love. Show us all the strength of your soul. We are proud of you my joy. May God be with us.”';
  } else if (slidesContainer.scrollLeft >= slideWidth * 2 && slidesContainer.scrollLeft > slideWidth) {
    whats_cap.innerHTML = 'Nana’s mother writes in the Armenian alphabet in Karabakh Armenian dialect: “Hello, did you take the exam?” And sends her a picture of the food coupons they got as there are food shortages during the blockade and everything is rationed.';
  } else {
    whats_cap.innerHTML = 'Nana sends a picture of her at her high school graduation to her family. Messages in English. Message of her father written with Cyrillic alphabet in Karabakh Armenian dialect: “my darling baby girl, it’s cold, be careful not to catch a cold”';
  }
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next',
  },
});

var mood_board_el = document.getElementById('mood_board');
var board_img_list = [];
var chaos_img = [
  'images/chaos/Chaos1.png',
  'images/chaos/Chaos2.png',
  'images/chaos/Chaos3.png',
  'images/chaos/Chaos4.png',
  'images/chaos/Chaos5.png',
  'images/chaos/Chaos6.png',
  'images/chaos/Chaos7.png',
  'images/chaos/Chaos15.png',
  'images/chaos/Chaos16.png',
  'images/chaos/Chaos17.png',
  'images/chaos/Chaos18.png',
  'images/chaos/Chaos19.png',
  'images/chaos/Chaos20.png',
  'images/chaos/Chaos21.png',
];

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

window.onload = function () {
  for (var i = 0; i < mood_board_el.children.length; i++) {
    const obj = {};
    obj.el = mood_board_el.children[i];
    obj.tick = Math.floor(Math.random() * 40) + 65;
    board_img_list.push(obj);
  }
};

var chooser = randomNoRepeats(chaos_img);

var past_intro = 0;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

captions = document.getElementById('captions');
var updateCaptions = function () {
  var activeSlide = document.querySelector('div.swiper-slide-active');
  var caption = activeSlide.dataset.caption;
  if (activeSlide.hasAttribute('data-caption')) {
    captions.innerHTML = caption;
  }
};

swiper.on('slideChangeTransitionEnd', function () {
  updateCaptions();
});

var script_index = 0;

var sound = new Howl({
  src: ['audio_files/astrig_intro.wav'],
  sprite: {
    track_01: [0, 5000],
    track_02: [5937, 10000],
    track_03: [16000, 19000],
    track_04: [36000, 25000],
    track_05: [61700, 22000],
    track_06: [85000, 31000],
    track_07: [116000, 19500],
    track_08: [136000, 17000],
  },
});

var ambience = new Howl({
  src: ['audio_files/background_noise.wav'],
});

sound_array = ['track_01', 'track_02', 'track_03', 'track_04', 'track_05', 'track_06', 'track_07', 'track_08', 'track_09', 'track_10', 'track_11', 'track_12'];

function stringSplitter(string) {
  str_array = string.split(/(\s+)/).filter(function (e) {
    return e.trim().length > 0;
  });
  return str_array;
}

empty_string = '[ Click to Start ] <p></p> ';

sec0 = 'What would you do if you only had several hours to flee a home you will never be able to return to?';

sec1 = `As a daughter of immigrants and a member
of a nation which has more people living in the diaspora
than in its state, the question of cultural heritage has
always tormented me.`;

sec2 = `The places where my family comes from
do not exist anymore. Or at least, not like they used to. 
I grew up witnessing our elders yearning for home and hearing
stories about how they were persecuted and fled, hanging
onto their keys until their very last breath, dreaming of
going back to homes which had been destroyed a long time ago. 
`;

sec3 = `Part of the Armenian heritage is a series of traumas
and pain that carry on from one generation to another. Historically,
Armenians resided in Eastern Anatolia, in regions that were once part
of the Ottoman Empire, now modern Turkey. Those who survived during
the genocide lost everything. Everything, that is, except their
identity and heritage. Through the preservation of dialects, dishes,
and stories.`;

sec4 = `This collective affected me too. Most of my life I rejected
parts of my identity, I did not want to carry the sadness or trauma of
my Armenian heritage. So I worked as hard as I could to be as French as
I could, and only kept the positive aspects of my Armenian heritage
— my family, the language, music and food. As if our collective trauma
did not shape all of it.`;

sec5 = `As an emerging journalist I found myself focusing on the
intersection between geopolitics, territory, marginality and memory.
I did not expect, however, to see history repeat itself through the
collective trauma of Armenians facing yet another mass exodus and I
needed to document it. In September 2023, after several wars and a
prolonged blockade, the region of Nagorno-Karabakh was emptied of all
its Armenian inhabitants. Much of the physical cultural heritage sites
were destroyed.`;

sec6 = `Over the three year period reporting from Nagorno-Karabakh,
there’s this one phrase that kept repeating when 
I asked how they dealt with the constant uncertainty, how they lived
with the constant shadow of war and violence: they would always say:
Կարծես թե վաղը չկար “like there’s no tomorrow”.`;

sec7 = `This website tells the stories of people, who just like my own
grandparents and great-grandparents had left, holding keys to homes
they knew they would not be able to go back to.`;

script_array = [sec0, sec1, sec2, sec3, sec4, sec5, sec6, sec7];

var intro_text_el = document.getElementById('intro_text');
typeWriter = new Typewriter(intro_text_el, {
  loop: false,
  cursor: '|',
  delay: 190,
  deleteSpeed: 10,
});

stringArray = stringSplitter(empty_string);

for (var i = 0; i < stringArray.length; i++) {
  typeWriter.pasteString(stringArray[i] + ' ');
}
