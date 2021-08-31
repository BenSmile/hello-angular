"use strict";
exports.__esModule = true;
var LikeComponent_1 = require("./LikeComponent");
var component = new LikeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("likeCount : " + component.likesCount + ", isSelected : " + component.isSelected);
