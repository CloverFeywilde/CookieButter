/* 
 *   CookieButter Visual Novel Template
 *   ~a delicious spreadable base for your home baked VNs~
 *
 *   baked with love by: Snow & Clover
*/

//I just copied YTTD's aspect ratio. Will fix later
let cookie = new PIXI.Application({ width: 816, height: 624 });
document.body.appendChild(cookie.view);

let text = new PIXI.Text('Hello World',{
    fontFamily:'Arial',
    fontSize: 24,
    fill : 0xff1010,
    align : 'center',
});
cookie.stage.addChild(text);


//Asset Containers


//Globals
let state, tick;

//Init functions
function setup(){
    //setup goes here
    state=play;
    tick=0
}


//Game Loop
cookie.ticker.add(function(delta){
    state();
});


//Game States
function play(){
    //main method calls go here
    if(tick<=30){
        console.log('Snow: '+ tick);
        tick++;
    }

}
setup();

//Play Functions
