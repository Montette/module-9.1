var a = prompt("Wpisz wartość podstawy trójkąta", a);
var h = prompt("Wpisz wartość wysokości trójkąta", h);

function getTriangleArea(a,h) {
return (a <= 0 || h <= 0) ?  "Nieprawidłowe dane" : "Pole trójkąta wynosi: " + a*h/2
};

alert(getTriangleArea(a,h));

var triangle1Area = getTriangleArea(2, 8);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(4, 12);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(19, 25);
console.log(triangle3Area);


