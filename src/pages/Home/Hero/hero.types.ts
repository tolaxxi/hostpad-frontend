import type { IconType } from 'react-icons';

export type CTAButton = {
  id: string;
  label: string;
  variant: 'gradient' | 'outline';
  Icon?: IconType;
};

export type offset = {
  x: number;
  y: number;
};

export type color = {
  backGround: string;
  foreGround: string;
};

export type Anchor = 'top-left' | 'top-right' | 'top-center' | 'center-left' | 'bottom-left' | 'bottom-right';

export type HERO_FLOATING_FEATURE = {
  label: string;
  feature: string;
  Icon: IconType;
  offset: offset;
  color: color;
  anchor: Anchor;
};
