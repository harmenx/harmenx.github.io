
var table = [
    { name: "React", url: "./img/icons/react.svg", "X": 1, "Y": 1 },
    { name: "Angular", url: "./img/icons/angular.svg", "X": 1, "Y": 2 },
    { name: "HTML5", url: "./img/icons/html5.svg", "X": 1, "Y": 3 },
    { name: "CSS3", url: "./img/icons/css3.svg", "X": 1, "Y": 4 },
    { name: "Vue.JS", url: "./img/icons/vue.svg", "X": 1, "Y": 5 },
    { name: "SEO", url: "./img/icons/seo.svg", "X": 1, "Y": 6 },

    { name: "NodeJS", url: "./img/icons/node.svg", "X": 2, "Y": 1  },
    { name: "PHP", url: "./img/icons/php.svg", "X": 2, "Y": 2 },
    { name: ".NET", url: "./img/icons/dotnet.svg", "X": 2, "Y": 3},
    { name: "Laravel", url: "./img/icons/laravel.svg", "X": 2, "Y": 4},
    { name: "Ruby On Rails", url: "./img/icons/ruby.svg", "X": 2, "Y": 5 },

    { name: "C++", url: "./img/icons/cplusplus.svg", "X": 3, "Y": 1},
    { name: "Rust", url: "./img/icons/rust.svg", "X": 3, "Y": 2 },
    { name: "Kafka", url: "./img/icons/kafka.svg", "X": 3, "Y": 3},

    { name: "Enzyme", url: "./img/icons/enzyme.svg", "X": 4, "Y": 1},
    { name: "Jest", url: "./img/icons/jest.svg", "X": 4, "Y": 2},
    { name: "Cypress", url: "./img/icons/cypress.svg", "X":4, "Y": 3 },

    { name: "Solidity", url: "./img/icons/solidity.svg", "X":5, "Y": 1 },
    { name: "SEO", url: "./img/icons/seo.svg", "X": 5, "Y": 2 },
    { name: "Security", url: "./img/icons/security.svg", "X": 5, "Y":3 },
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table

    for (var i = 0; i < table.length; i++) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = (i) + 1;
        element.appendChild(number);

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i].name;
        element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = '<img width=64 src = "'+table[i].url +'"</img>';
        element.appendChild(details);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);

        objects.push(object);

        //

        var object = new THREE.Object3D();
        object.position.x = (table[i].X * 250) - 560;
        object.position.y = - (table[i].Y * 320) + 990;

        targets.table.push(object);

    }

    // sphere

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

    }

    // helix

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 900 * Math.sin(phi);
        object.position.y = - (i * 8) + 450;
        object.position.z = 900 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

    }

    // grid

    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i) * 400) - 800;
        object.position.y = (i * 400) + 800;
        object.position.z = (Math.floor(i / 5)) * 1000 - 2000;

        targets.grid.push(object);

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild(renderer.domElement);



    var button = document.getElementById('table');
    button.addEventListener('click', function (event) {

        transform(targets.table, 2000);

    }, false);

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (event) {

        transform(targets.sphere, 2000);

    }, false);

    var button = document.getElementById('helix');
    button.addEventListener('click', function (event) {

        transform(targets.helix, 2000);

    }, false);

    var button = document.getElementById('grid');
    button.addEventListener('click', function (event) {

        transform(targets.grid, 2000);

    }, false);

    transform(targets.table, 2000);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();



}

function render() {

    renderer.render(scene, camera);

}