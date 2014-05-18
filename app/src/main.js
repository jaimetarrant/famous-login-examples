/*globals define*/
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var InputSurface = require('famous/surfaces/InputSurface');
  var ImageSurface = require('famous/surfaces/ImageSurface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var SequentialLayout = require('famous/views/SequentialLayout');

  var StateModifier = require('famous/modifiers/StateModifier');
  var Transitionable = require('famous/transitions/Transitionable');
  var SpringTransition = require('famous/transitions/SpringTransition');
  Transitionable.registerMethod('spring', SpringTransition);

  var mainContext = Engine.createContext();

  var loginButtonModifier = new StateModifier({
    origin: [0.5, 0]
  });

  createCat();
  createLoginEmail();
  createLoginPassword();
  createLoginButton();
  createStats();
  createLogo();

  function createCat() {
    var catSurface = new ImageSurface({
      classes: [],
      size: [260,260],
      content: 'content/images/nyan-cat-animation-art.gif'
    });

    /*
       var stateModifier = new StateModifier({
transform: Transform.translate(150, 100, 0)
});
*/
    var catPositionModifier = new Modifier({
      origin: [0.5, 0.3] 
    });

    mainContext.add(catPositionModifier).add(catSurface);
  }

  function createLoginEmail() {
    var loginEmailSurface = new InputSurface({
      size: [250, 50],
      color: 'grey',
      classes: ['loginInput'],
      name: 'email',
      id: 'email',
      placeholder: 'Email address',
      value: '',
      type: 'text'
    });
    var loginEmailSurfaceModifier = new Modifier({
      origin: [0.5, 0.9] 
    });

    mainContext.add(loginEmailSurfaceModifier).add(loginEmailSurface);
  }

  function createLoginPassword() {
    var loginPasswordSurface = new InputSurface({
      size: [250, 50],
      classes: ['loginInput'],
      id: 'password',
      name: 'password',
      placeholder: 'Password',
      value: '',
      type: 'password'
    });

    var loginPasswordSurfaceModifier = new Modifier({
      origin: [0.5, 1.1] 
    });

    mainContext.add(loginPasswordSurfaceModifier).add(loginPasswordSurface);
  }


  function createLoginButton() {
    var loginButtonSurface = new Surface({
      size: [200, 60],
      content: '<br /> <b>Login</b>',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green'
      }
    });

    var spring = {
      method: 'spring',
      period: 1000,
      dampingRatio: 0.4
    };

    loginButtonModifier.setTransform(
      Transform.translate(0, 465, 0), spring
    );

    mainContext.add(loginButtonModifier).add(loginButtonSurface);

  }

  function createStats() {
    var stats = new Surface({
      size: [200, 400],
    content: '<br /><br /> <b>Debug:</b><br /><br /> innerHeight: ' + window.innerHeight + '<br /> innerWidth: ' + window.innerWidth,
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'red'
      }
    });

  var statsModifier = new Modifier({
    origin: [0.2, 0.9]
  });

  statsModifier.setTransform(
    Transform.translate(0,20,0)
  );

  mainContext.add(statsModifier).add(stats);
  }

  function createLogo() {
    var famousLogo = new ImageSurface({
      size: [45, 45],
      content: 'content/images/famous_symbol_transparent.png'
    });

    var logoModifier = new Modifier({
      origin: [0.95, 0.9]
    });

    logoModifier.setTransform(
      Transform.translate(0,window.innerHeight - 400,0)
    );
  
    
    mainContext.add(logoModifier).add(famousLogo);
  }


  //sequentialLayout.sequenceFrom(surfaces);
/*

   for (var i = 0; i < 10; i++) {
   surfaces.push(new Surface({
content: "Surface: " + (i + 1),
size: [undefined, window.innerHeight/10],
properties: {
backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
lineHeight: window.innerHeight/10 + "px",
textAlign: "center"
}
}));
}
*/

  //  mainContext.add(inputModifier).add(surfaces);
});
