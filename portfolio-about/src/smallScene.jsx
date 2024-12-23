import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,  } from '@react-three/fiber'
import { Html, useProgress, ScreenSpace, useGLTF, Sparkles, Plane, Text, OrbitControls, Stars, Float, Text3D, Billboard} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Scene() {
  const [placement, setPlacement] = useState(0)
  const [chess, setChess] = useState(false)
  const [golf, setGolf] = useState(false)
  const [art, setArt] = useState(false)
  const [books, setBooks] = useState(false)
  const [rs, setRs] = useState(false)
  const [start, setStart] = useState(true)
  const [skel, setSkel] = useState(10)



  function Room() {
    const gltf = useLoader(GLTFLoader, 'Room.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      console.log("clicked Room")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function RoomUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Room />
        </mesh>
      </group>
    );
  }

  
  function Easel() {
    const gltf = useLoader(GLTFLoader, 'Easel.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setArt(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function EaselUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Easel />
        </mesh>
      </group>
    );
  }

  function Con() {
    const gltf = useLoader(GLTFLoader, 'ConCom.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      window.open("https://jacob.dement.dev", "_Blank")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function ConUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Con />
        <mesh position={[0.4, placement + 2, -2.5]} >
            <Text fontSize={.3}>
                  *Contact*
            </Text>
        </mesh>
        </mesh>
      </group>
    );
  }

  function Books() {
    const gltf = useLoader(GLTFLoader, 'Books.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setBooks(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function BooksUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Books />
        </mesh>
      </group>
    );
  }

  function Golf() {
    const gltf = useLoader(GLTFLoader, 'Golf.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setGolf(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function GolfUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Golf />
        </mesh>
      </group>
    );
  }

  function Water() {
    const gltf = useLoader(GLTFLoader, 'fullWater.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      window.open("https://dement.dev")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function WaterUse(props) {
    return (
      <group>
        <mesh rotation={[0, 0, 0]} position={[0, 0,-50 ]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Water />
          <Text color={"#ffff00"} position={[0, 0,10 ]} fontSize={5}>Click water to return to landing page!</Text>

        </mesh>
      </group>
    );
  }

  function Chess() {
    const gltf = useLoader(GLTFLoader, 'Chess.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      console.log("chess")
      setChess(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function ChessUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Chess />
        </mesh>
      </group>
    );
  }
  function Rs() {
    const gltf = useLoader(GLTFLoader, 'RsCom.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setRs(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function RsUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Rs />
        </mesh>
      </group>
    );
  }
  function ChessText() {
    const handleClick = () => {
      console.log("chess")
      setChess(false)
      setPlacement(0)
    };
    if (chess)
    return (
  <Suspense>
    <ScreenSpace depth={1}>
      {/* <mesh onClick={handleClick}>
      <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>I love chess because every</Text>
      <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>match tells its own unique story. </Text>
      <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>The process of learning/improving </Text>
      <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>is so very fun to me! Similarly to </Text>
      <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>coding, there is always more to be learned</Text>
      <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>about chess.</Text>
      <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh> */}
    <Html
        center
      >
<div
        onClick={handleClick}

          style={{
            color: 'whitesmoke',
            width: "80vw",
            fontSize:9,
          }}
        >
          <h1>I love chess because every match tells its own unique story. The process of learning/improving is so very fun to me! Similarly to coding, there is always more to be learned
          about chess.
          </h1>
          <h1>*Click any text to return to my room*</h1>
        </div>
      </Html>
    </ScreenSpace>
    </Suspense>
    ) 
  }


  function GolfText() {
    const handleClick = () => {
      console.log("chess")
      setGolf(false)
      setPlacement(0)
    };
    if (golf)
    return (
            <Suspense>
            <ScreenSpace depth={1}  >
            <Html
                center
          
              >
                <div
                onClick={handleClick}
          
                  style={{
                    color: 'whitesmoke',
                    width: "80vw",
                    fontSize:9,
                  }}
                >
                  <h1>Golf has become an excellent way to spend quality time with my brother and Dad. Before I played this sport I had assumed it would be easy "just hit the ball with the stick!" I thought... Boy was I wrong haha.
                  </h1>
                  <h1>*Click any text to return to my room*</h1>
                </div>
              </Html>
            </ScreenSpace>
            </Suspense>
    ) 
  }

  function ArtText() {
    const handleClick = () => {
      console.log("chess")
      setArt(false)
      setPlacement(0)
    };
    if (art)
    return (
        <Suspense>
        <ScreenSpace depth={1}  >
        <Html
            center
      
          >
            <div
            onClick={handleClick}
      
              style={{
                color: 'whitesmoke',
                width: "80vw",
                fontSize:9,
              }}
            >
              <h1>I love to make, view, and study art. The main medium I use is Acrylics. My favorite artist (Besides my parter :p) is Van Gogh, theres something about his style that I just love!
              </h1>
              <h1>*Click any text to return to my room*</h1>
            </div>
          </Html>
        </ScreenSpace>
        </Suspense>
    ) 
  }
  function BooksText() {
    const handleClick = () => {
      console.log("chess")
      setBooks(false)
      setPlacement(0)
    };
    if (books)
    return (
    <Suspense>
    <ScreenSpace depth={1}  >
    <Html
        center
  
      >
        <div
        onClick={handleClick}
  
          style={{
            color: 'whitesmoke',
            width: "80vw",
            fontSize:9,
          }}
        >
          <h1>"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss I don't have a favorite genre, I love all books!
          </h1>
          <h1>*Click any text to return to my room*</h1>
        </div>
      </Html>
    </ScreenSpace>
    </Suspense>
    ) 
  }
  function Loader() {
    const { progress } = useProgress();
    return (
      <Content />

    );
  }
  function Dodecahedron({ time, ...props }) {
    const { progress } = useProgress();
    return (
      <mesh {...props}>
        <dodecahedronGeometry />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
        <Html distanceFactor={5}>
          <div class="content">
          <h1>{Math.ceil(progress)} % loaded, painting the walls.</h1>
          </div>
        </Html>
      </mesh>
    )
  }
  
  function Content() {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.005))
    return (
      <group ref={ref}>
        <Dodecahedron position={[-2, 0, 0]} />
        <Dodecahedron position={[0, -2, -3]} />
        <Dodecahedron position={[2, 0, 0]} />
        <pointLight color="indianred" />
    <pointLight position={[10, 10, -10]} color="orange" />
    <pointLight position={[-10, -10, 10]} color="lightblue" />
      </group>
    )
  }
  function Chair() {
    const gltf = useLoader(GLTFLoader, 'chair.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      window.open("https://jacob.dement.dev")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function ChairUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Chair />
        </mesh>
      </group>
    );
  }

  function RsText() {
    const handleClick = () => {
      console.log("chess")
      setRs(false)
      setPlacement(0)
    };
  if (rs)
  return (
<Suspense>
  <ScreenSpace depth={1}  >
  <Html
      center

    >
      <div
      onClick={handleClick}

        style={{
          color: 'whitesmoke',
          width: "80vw",
          fontSize:9,
        }}
      >
        <h1>I've played video games since I was a little boy. The image on the computers screen in the room is a 
          reference to one of my all time favorites! Old School RuneScape, wonderful nostalgia!
        </h1>
        <h1>*Click any text to return to my room*</h1>
      </div>
    </Html>
  </ScreenSpace>
  </Suspense>
  ) 
}
  const canvasClick = () => {
    console.log("chess")
    setStart(false)
  };
  function StartText() {
    const handleClick = () => {
      console.log("chess")
    };
    if (start)
    return (
  <Suspense>
      <mesh onClick={handleClick}>

        <Text color={"#ffff00"} rotation={[0,.6,0]} position={[.2, .5, .2]} fontSize={.1}>and zoom/pan around!</Text>
    </mesh>

    </Suspense>
    ) 
  }
    return (
      <Canvas onClick={canvasClick} shadows style={{ background: "linear-gradient(70deg, #201658, #1597E5, #201658)", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} camera={{ fov: 100, zoom: 1, position: [1.2, 1.4, 1.4] }}>
        <Suspense fallback={<Loader />}>
        <directionalLight />
        <ambientLight intensity={1.0}/>
        <Float floatIntensity={1} floatingRange={1.5}>
        <RoomUse />
        <ChessUse />
        <EaselUse />
        <RsUse />
        <ChairUse />
        <ConUse />
        <Text color={"#ffff00"} rotation={[0,1.5,0]} position={[-.5, placement + 1, 0.1]} fontSize={.1}>Welcome to my room!</Text>
        <Text color={"blue"} rotation={[0,1.4,0]} position={[.45,placement+  .2, -.05]} fontSize={.07}>Projects</Text>
        <Text color={"#ffff00"} position={[.25, placement + 1, -.5]} fontSize={.1}>You can interect with objects</Text>
        <Text color={"#ffff00"} position={[.25,placement + .85, -.5]} fontSize={.1}>to learn about me :)</Text>

        <BooksUse />
        <GolfUse />
        </Float>
        <WaterUse />
        
        <ChessText />
        <GolfText />
        <ArtText />
        <BooksText />
        <RsText />
        <StartText />
        <Sparkles scale={5} color={"orange"} count={150}/>


        <OrbitControls maxDistance={5} minDistance={.6} enablePan={false} maxAzimuthAngle={1.7} minAzimuthAngle={-.3} maxPolarAngle={2} enableDamping enableRotate enableZoom/>
        <Stars />
        </Suspense>
      </Canvas>
  )
}
