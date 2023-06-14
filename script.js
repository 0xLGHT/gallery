window.onload = function() {
  var artworks = [
      {
          image: 'Images/crypto.png',
          title: 'Crypto, 2023',
          description: 'It is like a fist fight. You just have to keep getting back up.',
      },
      {
          image: 'Images/blinding-lights.png',
          title: 'Blinding Lights, 2023',
          description: 'All creative work is a remix of sorts. The best ideas I can create are revealed to me, not originated by me.\nThis is the fundamental stance from which I create. To stand in the blinding lights as often as possible, and try to direct the frequency through my flesh. ',
      },
      {
        image: 'Images/first-principles.png',
        title: 'First Principles, 2023',
        description: 'Red and blue. A story as old as time in the west. Thinking from first principles, it is amazing how binary the exhausted mind becomes.\nNew information endlessly flowing. New opinions on old ideas. It is understandable why people reduce it down to 1v2, RvB. But first principles are just that... first.',
      },
      {
        image: 'Images/diamonds-in-the-rough.png',
        title: 'Diamonds in the Rough, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/extrapolate.png',
        title: 'Extrapolate, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/paradoxical.png',
        title: 'Paradoxical, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/hell.png',
        title: 'Hellraiser, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/dead.png',
        title: 'The Dead Need No Crowns, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/red.png',
        title: 'ReD, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/online.png',
        title: 'Lightworkers, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/grinch.png',
        title: 'The Grinch, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/aura.png',
        title: 'Aura Leak, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/blue.png',
        title: 'Bludenza',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/binbang.png',
        title: '₿ing₿ang, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/feast.png',
        title: 'Feast of the Nouns, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/emotive.png',
        title: 'Emotive, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/dragon.png',
        title: 'The Dragon, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/inspiration.png',
        title: 'Inspiration, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/internet-economy.png',
        title: 'Internet Economy, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/latent.png',
        title: 'Network Effects, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/wtf.png',
        title: 'WTF is going on, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/panther.png',
        title: 'Pink Panther, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/nounwork.png',
        title: 'The Nounwork State, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/prophetic.png',
        title: 'Prophetic, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/culture.png',
        title: 'Culture Shift, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/dashboards.png',
        title: 'Dashboards, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/angel.png',
        title: 'Lightworker, 2022',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/creative-athletics.png',
        title: 'Creative Athletics, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/transmute.png',
        title: 'Transmutation, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/101.png',
        title: '101 Dalmatians, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/context.png',
        title: 'Context-Fermentation, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/datum.png',
        title: 'Datum-Abstractions, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/decentralized.png',
        title: 'Central to Decentral, 2023',
        description: 'Your artwork description 2',
      },
      {
        image: 'Images/brainstorming.png',
        title: 'Brainstorming, 2023',
        description: 'Your artwork description 2',
      },
      // add more artworks as needed
  ];

  var currentIndex = 0;

  function displayArtwork(index) {
    var artworkImageElement = document.getElementById('artwork');
        
    // initiate fade out
    artworkImageElement.classList.add('fade-out');

    // after fade out completes, change the image and initiate fade in
    setTimeout(function() {
        artworkImageElement.src = artworks[index].image;
        artworkImageElement.classList.remove('fade-out');
        artworkImageElement.classList.add('fade-in');
    }, 1000);

    document.getElementById('artwork-title').innerText = artworks[index].title;

    // Split the description by new lines and wrap each line with a div
    var descriptionHtml = artworks[index].description.split('\n').map(function(line) {
        return '<div class="description-line">' + line + '</div>';
    }).join('');

    document.getElementById('artwork-description').innerHTML = descriptionHtml;
}


// display first artwork on page load
displayArtwork(currentIndex);

document.getElementById('prev-button').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : artworks.length - 1;
    displayArtwork(currentIndex);
});

document.getElementById('next-button').addEventListener('click', function() {
    currentIndex = (currentIndex < artworks.length - 1) ? currentIndex + 1 : 0;
    displayArtwork(currentIndex);
});
}