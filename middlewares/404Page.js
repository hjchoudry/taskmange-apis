module.exports = (req, res, next) => {
  res.set("Content-Type", "text/plain");
  res.status(404).send(`
  404 - This is not the page you are looking for
                    ____
                 _.' :  \`._
             .-.'\`.  ;   .'\`.-.
    __      / : ___\ ;  /___ ; \      __
  ,'_ ""--.:__;".-.";: :".-.":__;.--"" _\`,
  :' \`.t""--.. '<@.\`;_  ',@>\` ..--""j.' \`;
       \`:-.._J '-.-'L__ \`-- ' L_..-;'
         "-.__ ;  .-"  "-.  : __.-"
             L ' /.------.\ ' J
              "-.   "--"   .-"
             __.l"-:_JL_;-";.__
          .-j/'.;  ;""""  / .'\"-.
        .' /:\`. "-.:     .-" .';  \`.
     .-"  / ;  "-. "-..-" .-"  :    "-.
  .+"-.  : :      "-.__.-"      ;-._   \
  ; \  \`.; ;                    : : "+. ;
  :  ;   ; ;                    : ;  : \:
 : \`."-; ;  ;                  :  ;   ,/;
  ;    -: ;  :                ;  : .-"'  :
  :\     \  : ;             : \.-"      :
   ;\`.    \  ; :            ;.'_..--  / ;
   :  "-.  "-:  ;          :/."      .'  :
     \       .-\`.\        /t-""  ":-+.   :
      \`.  .-"    \`l    __/ /\`. :  ; ; \  ;
        \   .-" .-"-.-"  .' .'j \  /   ;/
         \ / .-"   /.     .'.' ;_:'    ;
          :-""-.\`./-.'     /    \`.___.'
                \ \`t  ._  / 
                 "-.t-._:'

  `);
};
