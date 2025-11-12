/*
function suma (arr)
{
    if(arr.length === 0){
        return 0;
    }

    return arr[0] + suma(arr.slice(1));
}
let arr = [1,1,1];
alert(suma(arr));
*/

function invertir(palabra){
    if(palabra.length == 0){
        return 0;
    }
    return palabra.split('').reverse().join('');
}
function invertir2(palabra){
    if(palabra.length === 0){
        return "";
    }

    return palabra[palabra.length - 1] + invertir2(palabra.slice(0,palabra.length - 1));
}
alert(invertir2("messi"));