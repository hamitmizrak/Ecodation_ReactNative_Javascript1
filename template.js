// single comment
/* multiple comment */

// window.alert("Merhabalar");
// window.document.writeln("ekranda göster");
// window.console.log("console çıktısı");

// console.log("log console çıktısı");
// console.warn("warn console çıktısı");
// console.error("error console çıktısı");

// // variable
// var globalState="Merhabalar Güzel insanlar";
// console.log(globalState);
// var globalState="asdasdasd";
// console.log(globalState);

// let localState="Nasılsınız";
// console.log(localState);
// localState="Nasılsınız44";
// console.log(localState);

// const locaState2=true;
// console.log(locaState2);
// console.log(typeof locaState2);

// locaState2=8585;
// console.log(locaState2);

//////////////////////////////////////////
// Common Rules
// let degiskenAdi="JS öğreniyorum"
// console.log(degiskenAdi);

// let degiskenAdi44="JS öğreniyorum"
// console.log(degiskenAdi44);

// let _degiskenAdi="JS öğreniyorum"
// console.log(_degiskenAdi);

// let $degiskenAdi="JS öğreniyorum"
// console.log($degiskenAdi);

//let ~|/44degiskenAdiüğşçö="JS öğreniyorum"

//////////////////////////////////////////

// Hoisting
// denemeData=44;
// let denemeData;
// console.log(denemeData);

//////////////////////////////////////// 

// Operators
// console.log(10+25);
// console.log(10-25);
// console.log(10*25);
// console.log(10/3);
// console.log(10%3);

// + ++ 
// && VE 
// || VEYA
// ! DEĞİL
////////////////////////////////////////////

// prompt
// let data=prompt("Lütfen birşeyler giriniz")
// console.log(data);

////////////////////////////////////////////
// new  : doğmak
// null : vefat etti

////////////////////////////////////////////

// undefined 
// let data10;
// console.log(data10);

// // NaN: Not A Number
// console.log(10/10);
// console.log(10/"10");
// console.log(10/"asd");

// // infinity
// console.log(0/45);
// console.log(45/0);

////////////////////////////////////////////

// // Math
// console.log(Math.min(1,5,2,-100,500));
// console.log(Math.max(1,5,2,-100,500));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.abs(-100));
// console.log(Math.sin(45));
// console.log(Math.asin(-1));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.floor(Math.random()*9+1));
////////////////////////////////////////////


// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// let number1,number,sum=0;
// number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number1+number2);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// // x=2 k=3 y=? (y=18)
// let x=0,y=0,k=0;
// x=Number(prompt("Lütfen X giriniz"));
// k=Number(prompt("Lütfen K giriniz"));
// y=3*x+4*k;
// console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
//console.log(4+3*2*(3/3-1*6+9/1+(3/3)));

// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))


////////////////////////////////////////////

// SAYILAR
// let sayilar=44;
// console.log(sayilar);
// console.log(typeof sayilar);

// let sayilar2=44.23;
// console.log(sayilar2);
// console.log(typeof sayilar2);

// let bilimselGosterim1=12000;
// console.log(bilimselGosterim1);

// let bilimselGosterim2=12E+3;
// console.log(bilimselGosterim2);
////////////////////////////////////////////
// CAST
// let sayi=Number("10");
// console.log(sayi+20);

// let sayi2=String("10");
// console.log(sayi2+20);

////////////////////////////////////////////
// // STRING
// let kelime="JS öğreniyorum JS ";
// console.log(kelime);
// console.log(kelime.length);
// console.log(kelime.trim().length);

// console.log(kelime.startsWith("JS"));
// console.log(kelime.endsWith(" "));

// console.log(kelime.toLowerCase());
// console.log(kelime.toUpperCase());

// console.log(kelime.concat("INC"));

// console.log(kelime.substring(3));
// console.log(kelime.substring(0,3));

// console.log(kelime.charAt(3).toUpperCase());

// console.log(kelime.indexOf("JS"));
// console.log(kelime.lastIndexOf("JS"));

// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

////////////////////////////////////////////
// FUNCTION 
// 1 retursuz Parametresiz
function retursuzParametresiz(){
    console.log("retursuz Parametresiz");
}
retursuzParametresiz();

// 2 retursuz Parametreli
function retursuzParametreli(name){
    console.log("retursuz Parametreli "+name);
}
retursuzParametreli("Hamit Mızrak")

// 3 returlı Parametresiz
function returluParametresiz(){
    return "returlu Parametresiz";
}
let data3= returluParametresiz();
console.log(data3);

// 4 returlı Parametresiz
function returluParametreli(name,surname,language){
    return `ADI: ${name} SOYADI:${surname} DİL: ${language} `;
}
let data4= returluParametreli("Hamit","Mızrak","JS");
console.log(data4);
////////////////////////////////////////////
// normal
function normalFunction(){
    console.log("Normal Function");
}
normalFunction();

// anonymous
let anonymousFunction= function(){
    console.log("anonymous Function");
}
anonymousFunction();

// arrowFunction
let arrowFunction= ()=>{
    console.log("arrowFunction");
}
arrowFunction();

// Immedia Function
(function(){
    console.log("Immedia Function Anonymous");
})();

// Immedia Function
(()=>{
    console.log("Immedia Function Arrow");
})();

////////////////////////////////////////////
// CONDITION
// LOOP

////////////////////////////////////////////
// DIZI
// OBJECT
////////////////////////////////////////////






