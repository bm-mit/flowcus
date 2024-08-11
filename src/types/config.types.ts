export interface ConfigProfile {
  id: number;
  backgroundImageUrl: string;
  backgroundDim: number;
  timerColor: string;
  themeColor: string;
}

export const defaultConfigProfile: ConfigProfile = {
  id: 1,
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1722648404090-2179fba1b4b0?q=80&w=1740&auto=format&fitcrop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  backgroundDim: 0,
  timerColor: 'white',
  themeColor: '#134e4a',
};
