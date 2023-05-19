declare module 'webgl-fluid-simulation' {
  interface FluidSimulationOptions {
    SIM_RESOLUTION?: number;
    DYE_RESOLUTION?: number;
    CAPTURE_RESOLUTION?: number;
    DENSITY_DISSIPATION?: number;
    VELOCITY_DISSIPATION?: number;
    PRESSURE?: number;
    PRESSURE_ITERATIONS?: number;
    CURL?: number;
    SPLAT_AMOUNT?: number;
    SPLAT_RADIUS?: number;
    SPLAT_FORCE?: number;
    SPLAT_KEY?: string;
    SHADING?: boolean;
    COLORFUL?: boolean;
    COLOR_UPDATE_SPEED?: number;
    COLOR_PALETTE?: string[];
    PAUSED?: boolean;
    PAUSE_KEY?: string;
    HOVER?: boolean;
    BACK_COLOR?: string;
    TRANSPARENT?: boolean;
    BRIGHTNESS?: number;
    BLOOM?: boolean;
    BLOOM_ITERATIONS?: number;
    BLOOM_RESOLUTION?: number;
    BLOOM_INTENSITY?: number;
    BLOOM_THRESHOLD?: number;
    BLOOM_SOFT_KNEE?: number;
    SUNRAYS?: boolean;
    SUNRAYS_RESOLUTION?: number;
    SUNRAYS_WEIGHT?: number;
  }

  interface FluidSimulation {
    simulation(canvas: HTMLCanvasElement, options: FluidSimulationOptions): void;
    config(options: FluidSimulationOptions): void;
  }

  const webGLFluidSimulation: FluidSimulation;
  export default webGLFluidSimulation;
}
