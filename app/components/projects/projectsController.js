'use strict';

var portfolioApp = angular.module('portfolioApp');

portfolioApp.controller('projectsController', ['$scope', '$location', function ($scope, $location) {

  var rootPath = "/assets/images/projects/";

  $scope.projects = {
    'Ocean Blue Software': {
      thumb: rootPath + 'oceanblue/thumb.png',
      graphic: rootPath + 'oceanblue/graphic.png',
      date: 'Summer 2015',
      type: 'television ui',
      description: "I completed a three month internship with digital television company Ocean Blue Software. During my time at Ocean Blue I was tasked with the design and implementation of a brand new television user interface which exposed the functionality offered by the proprietary backend technology suite ‘DTVKit’.<br><br>My design had a Flat UI aesthetic in order to achieve a contemporary look and feel. The use of a single strong accent colour makes the UI easy to use from a distance.<br><br>The UI was built using QML and JavaScript.",
      demoPath: 'https://www.youtube.com/watch?v=JZPlccjQYfI',
      buttonText: 'view demo',
      background: '#2980b9',
      color: '#fff'
    },
    'Environment Agency': {
      thumb: rootPath + 'ea/thumb.jpg',
      graphic: rootPath + 'ea/graphic.png',
      date: '2014/15',
      type: 'website/mobile app',
      description: "I was the lead front-end developer on a team commissioned to build a responsive, cross-platform web and mobile app as part of a university project for the Environment Agency. The app served to present a wide variety of the EA’s geographic data sets in an intuitive and engaging way in order to promote public engagement with their data.<br><br>We developed an innovative ‘slider’ feature to facilitate the comparison of the data sets, as well as implementing useful functionality such as real-time location search and favouriting.<br><br>The app was built using web development technologies (HTML5, Less, Javascript, jQuery) and packaged for mobile with Phonegap.",
      demoPath: '/assets/demos/ea/',
      buttonText: 'view demo',
      background: '#1B5E20',
      color: '#fff'
    },
    'Language Pear': {
      thumb: rootPath + 'languagepear/thumb.png',
      graphic: rootPath + 'languagepear/graphic.png',
      date: 'current',
      type: 'website/mobile app',
      description: "I am currently developing Language Pear, a cross-platform language practice app. Aimed at language students, the app provides a chat-based platform to practice speaking your chosen language in real-time, doing away with slow-to-respond pen pals or email buddies.<br><br>The front-end of the app is being developed with web development technologies (HTML5, Less, AngularJS) with a Node.js backend and PostgreSQL database.",
      demoPath: '',
      buttonText: '',
      background: '#27ae60',
      color: '#fff'
    },
    'Mubaloo': {
      thumb: rootPath + 'mubaloo/thumb.png',
      graphic: rootPath + 'mubaloo/graphic.png',
      date: '2014',
      type: 'mobile app',
      description: "I was a lead full stack developer in a team taking part in Mubaloo’s hackathon, in which the challenge was to build something cool… in just 24 hours!<br><br>Our solution was ‘PocketShout’, a location-based message posting platform. Using a fine-grain location accuracy users can post about their experiences in a very specific area – this generates a real-time heat-map of your local region, letting you know what’s hot and what’s not.<br><br>This app was developed using web development technologies and a Python backend.",
      demoPath: '',
      buttonText: '',
      background: '#3B3B38',
      color: '#fff'
    },
    'IntruderCam': {
      thumb: rootPath + 'intrudercam/thumb.png',
      graphic: rootPath + 'intrudercam/graphic.png',
      date: '2013/14',
      type: 'mobile app',
      description: "I developed and released a motion detection and capture app, IntruderCam, for the Windows Phone store, using C# and .NET.<br><br>The app can act as your own personal CCTV camera. Whether your pesky neighbour keeps backing into your car, or you suspect your little brother is stealing chocolate from your room, IntruderCam helps you catch them red-handed!<br><br>The app has performed very well, achieving an average 4.8 star rating and more than 8000 downloads.",
      demoPath: 'https://www.microsoft.com/en-us/store/apps/intrudercam/9nblggh08kb7',
      buttonText: 'view in store',
      background: '#F3EA29',
      color: '#333'
    },
    'HairBeaut': {
      thumb: rootPath + 'hairbeaut/thumb.png',
      graphic: rootPath + 'hairbeaut/graphic.png',
      date: '2013',
      type: 'website',
      description: "I was commissioned to design the hair and beauty social networking site HairBeaut, using the Ning platform and custom style sheets.<br><br>HairBeaut allows hairdressers and beauty therapists to share their passion in an active community of like people. The site offers an activity feed, profiles, forums, discussion pages, and more.",
      demoPath: 'http://hairbeaut.com/',
      buttonText: 'visit website',
      background: '#CECFCE',
      color: '#333'
    },
    'Student Robotics': {
      thumb: rootPath + 'sr/thumb.png',
      graphic: rootPath + 'sr/graphic.png',
      date: '2013',
      type: 'competition',
      description: "I was the software engineer in a team winning second place and the Committee award in the national Student Robotics competition.<br><br>Over the course of 6 months we were tasked with designing and building a robot which would go head to head in a game of ‘Pirate Plunder’ against other teams. There are no remote controls allowed – these robots were <em>entirely</em> autonomous!<br><br>Check out the video of the very tense final below – where our team (orange) lose out only to an ingenious move by the opposing team!<br><br>The software for the robot was written in Python.",
      demoPath: 'https://www.youtube.com/watch?v=-HELhGpIBKA&feature=youtu.be',
      buttonText: 'check out the video',
      background: '#253571',
      color: '#fff'
    }
  };

  $scope.currentProject = {
    isOpen: function() {
      if($location.path().length != 0) {
        if($location.path().substring(1, 16) == 'project-details') {
          return true;
        } else {
          return false;
        }
      }
    },
    name: 'Ocean Blue Software',
    close: function() {
      $location.path('');
    }
  }

  $scope.openProject = function(projectName) {
    $scope.currentProject.name = projectName;
    $location.path('project-details');
  }

  $scope.path = function() { return $location.path(); }

}]);
