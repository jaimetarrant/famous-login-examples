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

  createLogo();
  createLoginEmail();
  createLoginPassword();
  createLoginButton();

  function createLogo() {
    var logoSurface = new ImageSurface({
      classes: [],
      size: [250,250],
      content: 'content/images/famous_symbol_transparent.png'
    });

    /*
       var stateModifier = new StateModifier({
transform: Transform.translate(150, 100, 0)
});
*/
    var logoPositionModifier = new Modifier({
      origin: [window.innerHeight / (window.innerHeight * 2), window.innerHeight / (window.innerHeight * 2) - 0.2] 
    });

    mainContext.add(logoPositionModifier).add(logoSurface);
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
      origin: [window.innerHeight / (window.innerHeight * 2), window.innerHeight / (window.innerHeight * 2) + 0.4] 
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
      origin: [window.innerHeight / (window.innerHeight * 2), window.innerHeight / (window.innerHeight * 2) + 0.6] 
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
