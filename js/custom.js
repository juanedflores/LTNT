var script_index = 0;

var sound = new Howl({
  src: ['audio_files/voice_intro_full.wav'],
  sprite: {
    track_01: [0, 5000],
    track_02: [5937, 10000],
    track_03: [16000, 19000],
    track_04: [36000, 25000],
    track_05: [61700, 22000],
    track_06: [85000, 31000],
    track_07: [116000, 19500],
    track_08: [136000, 15000],
  },
});

sound_array = ['track_01', 'track_02', 'track_03', 'track_04', 'track_05', 'track_06', 'track_07', 'track_08', 'track_09', 'track_10', 'track_11', 'track_12'];

function stringSplitter(string) {
  str_array = string.split(/(\s+)/).filter(function (e) {
    return e.trim().length > 0;
  });
  return str_array;
}

empty_string = '[ Click to Start ]';

sec0 = 'What would you do if you only had several hours to flee a home you will never be able to return to? ';

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
there’s this one phrase (or senitment) that kept repeating when I.
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
typeWriter.start();

document.addEventListener('click', function (e) {
  sound.stop();
  typeWriter.deleteAll().callFunction(() => {
    console.log('Hello?');
    //sound.play('track_08');
    sound.play(sound_array[script_index]);
    script_index++;
  });

  // AFTER SCRIPT IS DONE
  if (script_index == script_array.length) {
    console.log('reached the end');
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
    typeWriter.start();
  }
  console.log('Clicked on body');
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
