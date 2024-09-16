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
    obj.tick = Math.floor(Math.random() * 100);
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

sec3 = `Part of the Armenia heritage is a series of traumas
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
there’s this one phrase (or senitment) that kept repeating when 
I asked how they dealt with the constant uncertainty, how they lived
with the constant shadow of war and violence: they would always say:
kartses te vary tchy kar “like there’s no tomorrow”.`;

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

menu_button = document.getElementById('menu_button');
typeWriter.start().callFunction(() => {
  document.getElementById('intro').style.cursor = 'pointer';
  //menu_button.setAttribute('data-src', 'documents/key_menu_white.json');
});

document.getElementById('intro').addEventListener('click', function (e) {
  sound.stop();
  document.getElementById('intro').style.pointerEvents = 'none';
  typeWriter.deleteAll().callFunction(() => {
    sound.play(sound_array[script_index]);
    ambience.play();
    script_index++;
    document.getElementById('intro').style.cursor = 'default';
    document.getElementById('intro').style.pointerEvents = 'none';
  });

  // AFTER SCRIPT IS DONE
  if (script_index == script_array.length) {
    document.getElementsByTagName('body')[0].style = 'overflow: visible';
    typeWriter.deleteAll().callFunction(() => {
      $('#intro_div').fadeOut(1200);
    });
  } else {
    // Write Text
    stringArray = stringSplitter(script_array[script_index]);
    for (var i = 0; i < stringArray.length; i++) {
      typeWriter.pasteString(stringArray[i] + ' ');
    }
    typeWriter.start().callFunction(() => {
      document.getElementById('intro').style.cursor = 'pointer';
      //menu_button.setAttribute('data-src', 'documents/key_menu_white.json');
      document.getElementById('intro').style.pointerEvents = 'auto';
    });
  }
});

menu_button = document.getElementById('menu_button');
menu_button.onclick = function () {
  menu_list = document.getElementById('menu_list');
  if (menu_list.style.visibility === 'hidden') {
    menu_list.style.visibility = 'visible';
  } else {
    menu_list.style.visibility = 'hidden';
  }
};

var intro_height = $('#intro').height();
var title_height = $('.title').height();

// SCROLL INTERACTION
document.addEventListener('scroll', (event) => {
  vol = scale(scrollY, 0, intro_height, 1.0, 0.0);
  vol_norm = Math.min(Math.max(parseFloat(vol), 0.0), 1.0);

  vw = scale(scrollY, 0, 1000, 50.0, 5.0);
  vw_norm = Math.min(Math.max(parseFloat(vol), 5.0), 50.0);

  if (scrollY > intro_height) {
    document.getElementById('menu_container').style.pointerEvents = 'auto';
    document.getElementById('menu_container').style.left = '10%';

    if (past_intro == 0) {
      menu_button.click();
      past_intro = -1;
    }
  }

  Howler.volume(vol_norm);

  // MOOD BOARD
  console.log(isInViewport(mood_board_el));
  if (isInViewport(mood_board_el)) {
    for (var i = 0; i < board_img_list.length; i++) {
      obj = board_img_list[i];
      obj.tick++;
      if (board_img_list[i].tick > 109) {
        obj.tick = 0;
        file = chooser();
        img = board_img_list[i].el.children[0];
        el = $(img);
        console.log(img);
        console.log(el);
        el.fadeOut('slow', function () {
          el.fadeIn('slow');
          img.src = file;
          rndTop = Math.floor(Math.random() * 60);
          rndLeft = Math.floor(Math.random() * 60);
          img.style.top = rndTop + '%';
          img.style.left = rndLeft + '%';
        });
      }
    }

    console.log(mood_board_el.children.length);
  }
});

// Mood board is in view
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
}

function moveLeft() {
  swiper.slidePrev();
  left_button = document.getElementById('left');
  right_button = document.getElementById('right');
  if (swiper.isBeginning) {
    left_button.children[0].src = '/images/arrow_left_muted.svg';
  } else {
    left_button.children[0].src = '/images/arrow_left.svg';
  }
  if (swiper.isEnd) {
    right_button.children[0].src = '/images/arrow_right_muted.svg';
  } else {
    right_button.children[0].src = '/images/arrow_right.svg';
  }
}

function moveRight() {
  swiper.slideNext();
  left_button = document.getElementById('left');
  right_button = document.getElementById('right');
  if (swiper.isBeginning) {
    left_button.children[0].src = '/images/arrow_left_muted.svg';
  } else {
    left_button.children[0].src = '/images/arrow_left.svg';
  }
  if (swiper.isEnd) {
    right_button.children[0].src = '/images/arrow_right_muted.svg';
  } else {
    right_button.children[0].src = '/images/arrow_right.svg';
  }
}

scroll_el = UIkit.scrollspy('#mood_board');
