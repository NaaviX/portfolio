import { useCallback } from "react";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Particles = ({ id, particlesOptions }: any) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <ReactParticles
      id={id}
      style={{
        width: "100%",
        minHeight: "100vh",
        zIndex: 10,
      }}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default Particles;
