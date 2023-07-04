import * as THREE from './three.module.js';

import {GLTFLoader} from './GLTFLoader.js';


 //   import * as THREE from 'https://unpkg.com/three@0.129.0/build/three.module.js';


  //import {GLTFLoader} from 'https://unpkg.com/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';







(function robt() {

      var canvas = document.querySelector('#rob');

      const rend = new THREE.WebGLRenderer({
        canvas: canvas,
        antialiasing: true,
        logarithmicDepthBuffer: true,
        shadowMap: true,
        alpha: true,
        shadowMapType: THREE.PCFSoftShadowMap
      });
      rend.shadowMap.enabled = true;
      rend.setClearColor(0x000000,
        0);


      var fov = 75;
      const cam = new THREE.PerspectiveCamera(fov,
        0.1,
        1,
        900);
      cam.position.set(0,
        0,
        20);



      //scene
      const scene = new THREE.Scene();
      //scene.fog=new THREE.Fog('white',50,100);

      const light = new THREE.DirectionalLight('white',
        2);
      light.position.set(-9,
        9,
        4);
      light.castShadow = true;
      scene.add(light);

      var ld = new GLTFLoader();

      let mixer,
      cube,
      gltf,
      animations,
      func,
      funs;

      function flod(url) {
        return new Promise((resolve, reject)=> {
          ld.load(url, resolve, undefined, reject);
        });
      }

      var lani = [2,
        0,
        1,
        3,
        4,
        5,
        9,
        11,
        12,
        13];

      (async ()=> {
        await flod('js/RobotExpressive.glb').then(gltf=> {

          animations = gltf.animations;
          mixer = new THREE.AnimationMixer(gltf.scene);


          var bb = document.querySelector('#k4');



          func = (a, b, d, e, g, h)=> {
            var f = mixer.clipAction(animations[a]);
            if (h == true) {
              f.reset();
            }
            if (d != 0) {
              f.setDuration(d);
            }
            if (e != 0) {
              f.repetitions = e;
            }
            f.fadeIn(b);
            if (g != 0) {
              f.fadeOut(g);
            }


            f.play();

          }


          gltf.scene.position.set(0, -7, 0);
          gltf.scene.scale.set(2.3, 2.3, 2.3);
          scene.add(gltf.scene);



        },
          e=> {
            console.log(e);
          });
      })();




      const clock = new THREE.Clock();


      var vb = 0, va = 0, ki;

      function anim() {

        requestAnimationFrame(anim);

        var canvas = rend.domElement;
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;

        cam.aspect = width/height;
        cam.updateProjectionMatrix();

        var needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          rend.setSize(width, height, false);
        }

        va++;
        vb++;

        if (va < 200) {
          cam.zoom += 0.004;
        }


        if (mixer) {
          mixer.update(clock.getDelta());
        }


        switch (true) {
          case vb <= 150:
            func(6, 1, 0, 0, 2, false);
            break;

          case vb == 200:
            func(12, 1, 3, 1, 0, true);
            break;

          case vb >= 650:
            ki = (Math.floor(Math.random()*lani.length-1))+1;

            vb = 352;
            func(lani[ki], 1, 4, 1, 0, true);

            break;



          default:
            // code

          }
          rend.render(scene, cam);
        }

        anim();


      })();
