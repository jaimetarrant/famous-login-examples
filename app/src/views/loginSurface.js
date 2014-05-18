/*globals define*/
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');

  // create the main context
  var mainContext = Engine.createContext();
  var content;
  content = '<div id="logo"><img alt="logo" width="150" src="' + 'content/images/famous_symbol_transparent.png' + '"/></div>';
  content += '<div id="loginHeader"><p>Login</p><div>';
  content += '<div id="ruler"><hr><div>';
  content += '<div id="loginEmail" class="loginInputField"><input id="nav-bar-signup-email" type="email" name="email" placeholder="Email address" class="form-control"> </div>';
  content += '<div id="loginPassword" class="loginInputPassword"><input id="nav-bar-signup-email" type="password" name="password" placeholder="Password" class="form-control"> </div>';
  content += '<br />';
  content += '<div id="loginButton" class="loginButton"><button type="button">Login</button>';
  content += '<div id="ruler2"><hr/> </div>';
   // your app here
  var outline = new Surface({
    size: [400, 400],
    content: content,
    properties: {
      lineHeight: '2px',
      textAlign: 'center'
    }
  });

  var outlineModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  mainContext.add(outlineModifier).add(outline);
});
