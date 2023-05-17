# WebGL Fluid Simulation
I wanted to use PavelDoGreat's [WebGL Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) for my personal website (not finished yet), but I couldn't find a way to use it with Next.js. So I decided to add ES Module Support. I also added some extra config options so I can personally customise it how I like and removed the config GUI and other boilerplate. I hope you find it useful!

[Play here](https://paveldogreat.github.io/WebGL-Fluid-Simulation/) (This is the original version)

![screenshot](https://github.com/michaelbrusegard/WebGL-Fluid-Simulation/assets/56915010/8c890d5e-61e2-43ed-986d-663237171888)

## Install
```bash
  npm install --save @michaelbrusegard/webgl-fluid-simulation
```

## Config options
```js
webGLFluidSimulation(document.querySelector('canvas'), {
  SIM_RESOLUTION: 128, // Resolution of the simulation grid
  DYE_RESOLUTION: 1024, // Resolution of the dye grid
  CAPTURE_RESOLUTION: 512, // Resolution of captured frames
  DENSITY_DISSIPATION: 1, // Rate at which density dissipates
  VELOCITY_DISSIPATION: 0.2, // Rate at which velocity dissipates
  PRESSURE: 0.8, // Pressure value used in the simulation
  PRESSURE_ITERATIONS: 20, // Number of pressure iterations
  CURL: 30, // Curl value used in the simulation
  START_SPLATS: 5, // Number of initial splats
  SPLAT_RADIUS: 0.25, // Radius of the splats
  SPLAT_FORCE: 6000, // Force applied by the splats
  SHADING: true, // Enables shading in the visualization
  COLORFUL: true, // Enables rapid changing of colors
  COLOR_UPDATE_SPEED: 10, // Speed of color update
  COLOR_PALETTE: [], // Custom color palette (empty by default, uses hex colors)
  PAUSED: false, // Pauses the simulation if true
  HOVER: true, // Enables interaction on hover
  BACK_COLOR: '#000000', // Background color of the canvas
  TRANSPARENT: false, // Makes the canvas transparent if true
  BLOOM: true, // Enables bloom effect
  BLOOM_ITERATIONS: 8, // Number of bloom effect iterations
  BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
  BLOOM_INTENSITY: 0.8, // Intensity of the bloom effect
  BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
  BLOOM_SOFT_KNEE: 0.7, // Soft knee value for the bloom effect
  SUNRAYS: true, // Enables sunrays effect
  SUNRAYS_RESOLUTION: 196, // Resolution of the sunrays effect
  SUNRAYS_WEIGHT: 1.0, // Weight of the sunrays effect
});

```

## Examples
### HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
    </head>
    <body>
        <canvas style='width: 100vw; height: 100vh;'></canvas>
        <script type='module'>
            import webGLFluidSimulation from 'webgl-fluid-simulation';
            
            webGLFluidSimulation(document.querySelector('canvas'), {
                COLOR_PALETTE: ['#cc211b', '#f1c593', '#e87e54', '#f193a7', '#ec6fa9'],
                HOVER: false,
                SPLAT_RADIUS: 0.1,
                VELOCITY_DISSIPATION: 0.99,
                BLOOM: false,
            });
        </script>
    </body>
</html>
```
### React
```js
import { useEffect, useRef } from 'react';
import webGLFluidSimulation from 'webgl-fluid-simulation';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidSimulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 30,
      COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
    });
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default App;
```
### Next.js
```tsx
'use client';
import { useEffect, useRef } from 'react';
import webGLFluidSimulation from 'webgl-fluid-simulation';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidSimulation(canvasRef.current!, {
      PRESSURE: 0.2,
      SUNRAYS: false,
      START_SPLATS: 10,
      DENSITY_DISSIPATION: 3,
      CURL: 100,
      COLOR_PALETTE: ['#0000ff', '#111111', '#1d1d1d', '#eaeaea', '#4dba87'],
    });
  }, []);

  return <canvas ref={canvasRef} className='w-screen h-screen' />;
};

export default App;
```
### Vue.js
```vue
<!-- Not tested! -->
<template>
  <canvas ref='canvas'></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import WebGLFluid from 'webgl-fluid'

const canvas = ref()

onMounted(() => {
  webGLFluidSimulation(canvas, {
        SPLAT_RADIUS: 0.5,
        COLOR_UPDATE_SPEED: 20,
        BLOOM: false,
    <>});
})
</script>

<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
```
### Angular
```ts
// Not tested!
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import webGLFluidSimulation from 'webgl-fluid-simulation';

@Component({
  selector: 'app-root',
  template: `
    <canvas #canvasRef style="width: 100vw; height: 100vh;"></canvas>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef;

  ngOnInit(): void {
    webGLFluidSimulation(this.canvasRef.nativeElement, {
      COLOR_PALETTE: ['#dd0031', '#c3002f', '#dd0031'],
      START_SPLATS: 50,
      TRANSPARENT: true,
    });
  }
}
```
### Svelte
```svelte
<!-- Not tested! -->
<script>
  import { onMount } from 'svelte';

  let canvasRef;

  onMount(() => {
    import('webgl-fluid-simulation').then(({ default: webGLFluidSimulation }) => {
      webGLFluidSimulation(canvasRef, {
        SIM_RESOLUTION: 256,
        VELOCITY_DISSIPATION: 0.99,
        COLOR_PALETTE: [#ff7f00'],
      });
    });
  });
</script>

<canvas bind:this={canvasRef} style="width: 100vw; height: 100vh;" />
```
## References

https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu

https://github.com/mharrys/fluids-2d

https://github.com/haxiomic/GPU-Fluid-Experiments

## License

The code is available under the [MIT license](LICENSE)
