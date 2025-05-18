import type { Preview } from '@storybook/react';
// tailwind css 설정을 storybook에 적용하기 위해서는 import 해줘야한다.
import '../src/App.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
