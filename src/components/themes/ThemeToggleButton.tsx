'use client';

import { useTheme } from 'next-themes';
import ThemeButton from './ThemeButton';
import Svg from '../icon/Svg';
import { Light, Dark } from '../icon';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeButton
      className="fixed right-10 bottom-10 p-4 z-10 rounded bg-theme-btn"
      onClick={() => (resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <Svg width={20} height={20} fill="rgb(166,166,166)" viewBox={[0, 0, 20, 20]}>
        {resolvedTheme === 'dark' ? <Dark /> : <Light />}
      </Svg>
    </ThemeButton>
  );
}
