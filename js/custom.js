var script_index = 0;

function stringSplitter(string) {
  str_array = string.split(/(\s+)/).filter(function (e) {
    return e.trim().length > 0;
  });
  return str_array;
}

console.log('Playing intro');
//document.getElementById('content_text').innerHTML = aboutCaseContent;

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
and pain that carry on from one generation to another.`;

sec4 = `The reason why there is a huge diaspora is that Armenians
used to live in Eastern Anatolia, in the Ottoman Empire, in regions
that are now modern Turkey.`;

sec5 = `When they left during the genocide, they lost everything.
  While they did not have any material things with them,
  they still did transmit a heritage.`;

sec6 = `Specific dialects, dishes. All this collective past affected
me too. Most of my life I rejected parts of my identity, I did not
want my Armenian heritage to be sad, dramatic, or traumatic.`;

sec7 = `So I worked as hard as I could to be as French as I could,
  and only kept the positive aspects of my Armenian heritage — my
family, the language, music and food. As if our collective trauma
did not shape all of it.`;

sec8 = `But I became a journalist, photographer and filmmaker. And
almost despite myself, I realized I was focusing on the intersection
between geopolitics, territory, marginality and memory.`;

sec9 = `What I did not expect was the collective trauma of Armenians
to wake up faced with another exodus, and for me to document it; after
several wars, a blockade, the region of Nagorno-Karabakh was emptied of
all its Armenian inhabitants.`;

sec10 = `Much of the physical cultural heritage was or is being destroyed.`;

sec11 = `Once again, the same images of displacement and loss. Nagorno-Karabakh
had its own specificity; a specific Armenian dialect, culinary and musical
specialities, its stones and soil. I started working in Nagorno-Karabakh after
the 2020 war, which was the year I graduated from university.`;

sec12 = `I felt the urge to tell the stories of people who
just like my own grandparents and great-grandparents had left,
holding keys to home they knew they would not be able to go back to. 
`;

script_array = [sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9, sec10, sec11, sec12];

console.log(script_array);

var intro_text_el = document.getElementById('intro_text');

typeWriter = new Typewriter(intro_text_el, {
  loop: false,
  cursor: '|',
  delay: 120,
  deleteSpeed: 10,
});

//typeWriter.start();

stringArray = stringSplitter(sec0);
for (var i = 0; i < stringArray.length; i++) {
  typeWriter.pasteString(stringArray[i] + ' ');
  //typeWriter.typeString(stringArray[i] + ' ');
  //typeWriter.pauseFor(140);
}
typeWriter
  .pauseFor(1000)
  .start()
  .callFunction(() => {
    $('#continue_key_button').fadeIn(1200);
  });

document.addEventListener('click', function (e) {
  typeWriter.deleteAll();
  console.log('Clicked on body');
  stringArray = stringSplitter(script_array[script_index]);
  for (var i = 0; i < stringArray.length; i++) {
    typeWriter.pasteString(stringArray[i] + ' ');
  }
  typeWriter.start();
  script_index++;
  audio.play();

  if (script_index == script_array.length) {
    console.log('reached the end');
    document.getElementsByTagName('body')[0].style = 'overflow: visible';
    //document.getElementById('continue_key_button').style = 'display: none;';
    //document.getElementById('intro_div').style = 'display: none;';
    typeWriter.deleteAll().callFunction(() => {
      $('#intro_div').fadeOut(1200);
    });
  }
});

//$('#continue_key_button').fadeIn(1200);

//typeWriter.typeString(sec1).pauseFor(3).start();

menu_button = document.getElementById('menu_button');
menu_button.onclick = function () {
  menu_list = document.getElementById('menu_list');
  if (menu_list.style.visibility === 'hidden') {
    menu_list.style.visibility = 'visible';
  } else {
    menu_list.style.visibility = 'hidden';
  }
};

var audio = new Audio('./audio_files/voice_intro_01.wav');
