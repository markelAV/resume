const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'Arduino', 'React',
    'Python', 'Java', 'CTF',
    'AI', 'ML', 'PHP',
    'Angular', 'MySQL', 'IoT'
];

var tagCloud = TagCloud('.content-cloud', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content-cloud').style.color = random_color;