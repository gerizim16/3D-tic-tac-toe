function snake(sketch) {
    const colors = {
        darkGreen: [38, 70, 83],
        yellow: [233, 196, 106],
        orange: [244, 162, 97],
        red: [220, 140, 140],
        bluegreen: [42, 157, 143],
        white: [220, 220, 220],
    }

    function cameraOrbit(x, y, z, camera) {
        // camera.camera(0, -30, 100);
        camera.camera(y * 10, x * 10, 600, 0, 0, 0, 0, 1, 0);
        if (debug) {
            sketch.push();
            sketch.fill(0);
            sketch.text(`x: ${x}\ny: ${y}\nz: ${z}`, 0, -100);
            sketch.pop();
        }
    }

    const debug = true;
    let camera;
    let rotation;
    let helvetica;

    sketch.preload = function () {
        helvetica = sketch.loadFont('resources/fonts/Helvetica.ttf');
    };

    sketch.setup = function () {
        let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
        canvas.style('display', 'block');
        // sketch.frameRate(30);

        rotation = {};

        camera = sketch.createCamera();
        sketch.setCamera(camera);

        sketch.textFont(helvetica);
        sketch.textSize(11);

        if (debug) {
            sketch.debugMode();
        }
    };

    sketch.draw = function () {
        [rotation.z, rotation.x, rotation.y] = [sketch.rotationZ, sketch.rotationX, sketch.rotationY]

        sketch.background(255);
        cameraOrbit(rotation.x, rotation.y, rotation.z, camera);

        sketch.fill(255, 104, 94);
        sketch.box(85);

        if (debug) {
            // sketch.orbitControl();
        }
    };

    sketch.mouseMoved = function () {
    };

    sketch.mouseClicked = function () {
    };

    sketch.keyPressed = function () {
    };

    sketch.keyReleased = function () {
    };

    sketch.windowResized = function () {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    };
}

let p5Sketch = new p5(snake, 'gameContainer');

window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);