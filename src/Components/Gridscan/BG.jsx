import Particles from './Particles';
const BG = () => {
  return (
    <div> 
<div style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
</div>
  )
}

export default BG