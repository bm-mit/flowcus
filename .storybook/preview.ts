import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ConfigProfileProvider } from '../src/hooks/useConfigProfileContext';
import { SettingsPanelVisibilityProvider } from '../src/hooks/useSettingsPanelVisibilityContext';
import { TimerModeProvider } from '../src/hooks/useTimerModeContext';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light'
    }),
    StoryFn => (
      <ConfigProfileProvider>
        <SettingsPanelVisibilityProvider>
          <TimerModeProvider>
            <StoryFn />
          </TimerModeProvider>
        </SettingsPanelVisibilityProvider>
      </ConfigProfileProvider>
    )
  ]
};

export default preview;
