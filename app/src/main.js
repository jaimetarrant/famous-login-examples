/*globals define*/
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var InputSurface = require('famous/surfaces/InputSurface');
  var ImageSurface = require('famous/surfaces/ImageSurface');
  var Modifier = require('famous/core/Modifier');
  var SequentialLayout = require("famous/views/SequentialLayout");

  // create the main context
  var mainContext = Engine.createContext();

  var sequentialLayout = new SequentialLayout({
    direction: 1,
    
  });
  var surfaces = [];

  surfaces.push(new ImageSurface({ 
    // your app here

    //  var surface = new Surface({
    classes: ['loginLogo'],
    size: [250,250],
    content: 'content/images/famous_symbol_transparent.png'}));

  surfaces.push(new InputSurface({
    size: [250, 25],
    name: 'emailAddress',
    placeholder: 'Email address',
    value: '',
    type: 'text'
  }));

  surfaces.push(new InputSurface({
    size: [250, 25],
    name: 'password',
    placeholder: 'Password',
    value: '',
    type: 'password'
  }));

  var outlineModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  var inputModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  sequentialLayout.sequenceFrom(surfaces);
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
  mainContext.add(outlineModifier).add(sequentialLayout);
  //  mainContext.add(inputModifier).add(surfaces);
});
