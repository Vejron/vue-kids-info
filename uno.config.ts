import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      unit: 'em',
      extraProperties: {
        'height': '1.25em',
        'width': '1.25em',

        'vertical-align': 'bottom',
        'flex-shrink': '0',
        'display': 'inline-block',

        // We need to center the icon
        'margin-block': '0.15em',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
