import chroma from 'chroma-js';

const colors = {
  isDark(color: string): boolean {
    return chroma(color).luminance() < 0.5;
  },

  textColor(bgColor: string): 'black' | 'white' {
    return this.isDark(bgColor) ? 'white' : 'black';
  },
};

export default colors;
