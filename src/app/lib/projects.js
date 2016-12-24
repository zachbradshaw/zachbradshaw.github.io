const projects = [{
    name: 'Hackstarter',
    desc: `My final project for The Iron Yard. I worked on a team of five developers to
    finish this project in just two weeks. Hackstarter is a crowdfunding platform for students
    interested in going to code school. I implemented many features on the site including the
    interactive code school map using the Google Maps API and the tuition calculator which I
    built using AngularJS.`,
    imgSrc: './src/app/lib/images/hackstarter.png',
    imgAlt: 'Hackstarter Homepage'
}, {
    name: 'Memory!',
    desc: `A memory game built in jQuery. A user must match all tiles to win the game.
    When they guess incorrectly their lives decrement. The game is over when a user either
    matches all tiles or their lives run out. Working out the matching logic for the game
    tiles helped to strengthen my Javascript and jQuery skills. The styling and animations
    were done in SCSS.`,
    imgSrc: './src/app/lib/images/memory.png',
    imgAlt: 'Memory Game',
    siteLink: 'http://zachbradshaw.github.io/memory',
    repoLink: 'https://www.github.com/zachbradshaw/memory'
}, {
    name: '(resource)ful',
    desc: `(resource)ful is a Reddit clone meant for developers who want to share resources with
    other developers. This was a weekend homework project for The Iron Yard and was my
    first experience deploying a site to Heroku. This project also introduced me to the
    wonderful world of AngularJS, and we used Github OAuth to handle user login.`,
    imgSrc: './src/app/lib/images/resourceful.png',
    imgAlt: '(resource)ful',
    siteLink: 'http://tiy-resourceful.herokuapp.com/',
    repoLink: 'https://github.com/zachbradshaw/reshare'
}, {
    name: 'Appointment Tracker',
    desc: `A mobile web-app that tracks appointments and events. Uses the OpenWeatherMap API to
    give the current temperature and weather for the location of the appointment. This was
    my first project that used local storage to save information, so a users appointments
    are saved each time they visit the site.`,
    imgSrc: './src/app/lib/images/todoapp.png',
    imgAlt: 'Appointment Tracker',
    siteLink: 'http://zachbradshaw.github.io/sunnyappointments/',
    repoLink: 'https://github.com/zachbradshaw/sunnyappointments'
}, {
    name: 'Sign Up Flow',
    desc: `This is a mock up of a user management system for an admin page. This was my first
    project using jQuery and doing true DOM manipulation. An admin can add users and
    their emails and then delete them if necessary.`,
    imgSrc: './src/app/lib/images/signup.png',
    imgAlt: 'Sign up flow',
    siteLink: 'http://zachbradshaw.github.io/user-mgmt/',
    repoLink: 'https://github.com/zachbradshaw/user-mgmt'
}, {
    name: 'Hangman',
    desc: `My first Javascript project, a hangman letter game. This was another weekend homework
    assignment for The Iron Yard, and it was a great first exercise in some basic
    programming principles.`,
    imgSrc: './src/app/lib/images/hangman.png',
    imgAlt: 'Hangman game',
    siteLink: 'http://zachbradshaw.github.io/week2/hangman.html',
    repoLink: 'https://github.com/zachbradshaw/week2'
}];

export default projects;
