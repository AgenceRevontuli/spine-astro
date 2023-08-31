import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()], 
  rules: [{    
    test: /\.scss$/,     
    use: [
      'style-loader', // creates style nodes from JS strings      
      'css-loader', // translates CSS into CommonJS
      'sass-loader' // compiles Sass to CSS, using Node Sass by default
    ],
  }]
});