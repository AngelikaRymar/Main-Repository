function init() {
    scene = new THREE.Scene(); 
    
    var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
    
    renderer = new THREE.WebGLRenderer({antialias: true}); 
    renderer.setSize(WIDTH, HEIGHT);  
    
    document.body.appendChild(renderer.domElement);
    
    camera = new THREE.PerspectiveCamera(45, WIDTH/ HEIGHT, 0.1,20000); 
    camera.position.set(0, 6, 0); 
    scene.add(camera); 
    
    window.addEventListener('resize', function() { 
        var WIDTH = window.innerWidth, HEIGHT = window.innerHeight; 
       camera.aspect = WIDTH / HEIGHT; 
        camera.updateProjectMatrix(); 
    });
    
    renderer.setClearColor(0xa0522d, 1); 
 
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100, 200, 100);
    scene.add(light);

    var loader = new THREE.TextureLoader();

    var cylgeometry = new THREE.CylinderGeometry(3, 3, 7, 7);
    var cylmaterial = new THREE.MeshLambertMaterial({map: loader.load('data:image/jpeg;base64,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')});
    var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial);
        cylmesh.position.set(0.9, -5, -6);
        
    scene.add(cylmesh); 
    
    controls = new THREE.OrbitControls(camera,renderer.domElement);
}

function animate()
{
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
