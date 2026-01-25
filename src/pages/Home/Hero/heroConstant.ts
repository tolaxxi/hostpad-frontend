import { FaArrowRight } from 'react-icons/fa';
import type { CTAButton, HERO_FLOATING_FEATURE } from './hero.types';
import { GoPeople } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi';
import { TbPigMoney } from 'react-icons/tb';
import { MdOutlineShield } from 'react-icons/md';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsChat } from 'react-icons/bs';

export const HERO_STATS = [
  { label: 'properties', value: '10K+' },
  { label: 'matches', value: '5K+' },
  { label: 'payment', value: 'secure' },
] as const;

export const HERO_CTA_BUTTONS = [
  { id: 'start-swiping', label: 'start swiping', variant: 'gradient', Icon: FaArrowRight },
  { id: 'become-a-host', label: 'Become a Host', variant: 'outline' },
] satisfies readonly CTAButton[];

export const HERO_FLOATING_FEATURES = [
  {
    label: 'no agents',
    feature: 'direct contact',
    Icon: GoPeople,
    offset: { x: 70, y: 65 },
    anchor: 'top-left',
    color: {
      backGround: '#f3e8ff',
      foreGround: '#9810fa',
    },
  },
  {
    label: 'AI matching',
    feature: 'smart & fast',
    Icon: HiOutlineSparkles,
    offset: { x: 5, y: 2 },
    anchor: 'top-center',
    color: {
      backGround: '#FCE7F3',
      foreGround: '#E70D7D',
    },
  },
  {
    label: 'zero Fees',
    feature: 'save more',
    Icon: TbPigMoney,
    offset: { x: 55, y: 5 },
    anchor: 'top-right',
    color: {
      backGround: '#FFEDD4',
      foreGround: '#F76F31',
    },
  },
  {
    label: 'escrow protected',
    feature: '100% secure',
    Icon: MdOutlineShield,
    offset: { x: 6, y: 80 },
    anchor: 'center-left',
    color: {
      backGround: '#DBFCE7',
      foreGround: '#07A943',
    },
  },
  {
    label: ' Verified',
    feature: 'Properties',
    Icon: IoMdCheckmarkCircleOutline,
    offset: { x: 80, y: 25 },
    anchor: 'bottom-left',
    color: {
      backGround: '#E0E7FF',
      foreGround: '#7162F8',
    },
  },
  {
    label: 'instant chat',
    feature: 'Real-time',
    Icon: BsChat,
    offset: { x: 0, y: 40 },
    anchor: 'bottom-right',
    color: {
      backGround: '#DBEAFE',
      foreGround: '#5E91FD',
    },
  },
] satisfies readonly HERO_FLOATING_FEATURE[];
