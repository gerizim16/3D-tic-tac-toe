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
        sketch.angleMode(sketch.DEGREES);
        sketch.rotateX(x);
        sketch.rotateY(-y);
        // sketch.rotateZ(z);
        sketch.angleMode(sketch.RADIANS);
        // camera.camera(y * 10, x * 10, 600, 0, 0, 0, 0, 1, 0);
    }

    const debug = true;
    let camera;
    let rotation;
    let acceleration;
    let helvetica;

    sketch.preload = function () {
        helvetica = sketch.loadFont('resources/fonts/Helvetica.ttf');
    };

    sketch.setup = function () {
        let canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
        canvas.style('display', 'block');
        // sketch.frameRate(30);

        rotation = {};
        acceleration = {};

        camera = sketch.createCamera();
        sketch.setCamera(camera);

        sketch.textFont(helvetica);
        sketch.textSize(11);

        if (debug) {
            // sketch.debugMode();
        }
    };

    sketch.draw = function () {
        [rotation.z, rotation.x, rotation.y] = [sketch.rotationZ, sketch.rotationX, sketch.rotationY];
        [acceleration.x, acceleration.y, acceleration.z] = [sketch.accelerationX,sketch.accelerationY,sketch.accelerationZ];

        sketch.background(255);
        cameraOrbit(rotation.x, rotation.y, rotation.z, camera);

        sketch.fill(255, 104, 94);
        sketch.box(85);
        sketch.translate(0, 150, 0);
        sketch.torus(40, 20);
        sketch.translate(0, -350, 0);
        sketch.sphere(70);
        sketch.translate(0, 200, 0);

        if (debug) {
            // sketch.orbitControl();
            sketch.push();
            sketch.fill(0);
            sketch.text(`x: ${Math.round(rotation.x)}\ny: ${Math.round(rotation.y)}\nz: ${Math.round(rotation.z)}`,
                0, -100
            );
            sketch.text(`x: ${acceleration.x}\ny: ${acceleration.y}\nz: ${acceleration.z}`,
                100, -100
            );
            sketch.pop();
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