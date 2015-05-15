 (function() {
   var age = 49;
   (function() {
     var age = 50;
   })();
   return age;
 })();

 (function() {
   var age = 49;
   (function() {
     age = 50;
   })();
   return age;
 })();