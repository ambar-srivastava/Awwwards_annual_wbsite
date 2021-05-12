const app = new PIXI.Application();
// document.body.appendChild(app.view);
document.querySelector('#back').appendChild(app.view);

// Inner radius of the circle
const radius = 85;

// The blur amount
const blurSize = 62;

app.loader.add('image', './Images/full_hero.a083b77.png');
app.loader.load(setup);

function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.image.texture);
    app.stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

    const circle = new PIXI.Graphics()
        .beginFill(0xFF0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();
    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
    const focus = new PIXI.Sprite(texture);

    app.stage.addChild(focus);
    background.mask = focus;

    app.stage.interactive = true;
    app.stage.on('mousemove', pointerMove);

    function pointerMove(event) {
        focus.position.x = event.data.global.x - focus.width / 2;
        focus.position.y = event.data.global.y - focus.height / 2;
    }
}





gsap.utils.toArray('.grid3').forEach(val => {
    ScrollTrigger.create({
        trigger: val,
        pin: true,
        start: "top 70px",
        end: "+=160%"
    })
})