"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this.isSelected = !this.isSelected;
        this.likesCount += this.isSelected ? 1 : -1;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
