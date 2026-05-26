const colors = ['grayish', 'pinky', 'whitish', 'greenish', 'orangy', 'yellowish', 'electricBlue', 'reddish'];

const sections = [...document.getElementsByTagName('section')];

window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset + (window.innerHeight / 2);

  for (let i = 0; sections.length > i; i++) {
    
    if (i === sections.length - 1 || scrollFromTop <= sections[i + 1].offsetTop) {
      document.body.className = colors[i];
      break;
    }
    // nnnnn
  }
});