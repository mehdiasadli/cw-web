import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      maskImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
} satisfies Config;
