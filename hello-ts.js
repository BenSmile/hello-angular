var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'benja', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
var doLog = function (msg) {
    console.log('message ', message);
};