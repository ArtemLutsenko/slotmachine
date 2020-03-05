 let app = new PIXI.Application({ 
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1      F
})

//app.render.backgroundImage = "url('../img/bg.jpg')"
app.renderer.backgroundColor = 0x061639;
document.body.appendChild(app.view)

app.renderer.autoResize = true;
app.renderer.resize(512, 512); 


"../img/M01_000.jpg"


PIXI.loader
.add("../img/M01_000.jpg")
.load(setup);

//This `setup` function will run when the image has loaded
function setup() {

//Create the cat sprite
let cat = new PIXI.Sprite(PIXI.loader.resources["../img/M01_000.jpg"].texture);

//Add the cat to the stage
app.stage.addChild(cat);
}