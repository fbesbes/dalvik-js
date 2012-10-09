'use strict';

//
// This module defines our own internal representation of classes
//

var Class = function(_name, _parent, _accessFlags) {
  this.name = _name;
  this.parent = _parent;
  this.accessFlags = _accessFlags;

  this.interfaces = [];

  this.staticFields = [];
  this.instanceFields = [];

  this.directMethods = []; // directMethods are "static" or class methods
  this.virtualMethods = []; // virtualMethods are instance methods
};

Class.prototype.sanityCheck = function() {
  assert(this.name !== "", "Class name check");
  assert(this.name[0] === "L", "Class name check: L");
};

