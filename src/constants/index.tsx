import { TbBolt, TbMoon } from 'react-icons/tb'
import { PiDevicesBold, PiMagicWand } from 'react-icons/pi'
import { Image } from '@nextui-org/react'

export const featuresData = [
    {
        id:1,
        heading:'Themeable',
        icon:<Image src='/svgs/magicwand.svg' alt=''/>,
        desc:'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    },
    {
        id:2,
        heading:'Fast',
        icon:<Image src='/svgs/bolt.svg' alt=''/>,
        desc:'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.',
    },
    {
        id:3,
        heading:'Light & Dark UI',
        icon:<Image src='/svgs/crescent.svg' alt=''/>,
        desc:'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    },
    {
        id:4,
        heading:'Unique DX',
        icon:<Image src='/svgs/devices.svg' alt=''/>,
        desc:'NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.',
    },
]

export const accessibilityBulletPoint = [
    {
        id:1,
        point:'Keyboard navigation',
        icon: <Image src='/svgs/bullet_register.svg' alt=''/>,
    },
    {
        id:2,
        point:'Managed focus',
        icon: <Image src='/svgs/bullet_cursor.svg' alt=''/>,
    },
    {
        id:3,
        point:'Collision aware',
        icon: <Image src='/svgs/bullet_copy.svg' alt=''/>,
    },
    {
        id:4,
        point:'Alignment control',
        icon: <Image src='/svgs/bullet_align.svg' alt=''/>,
    },
    {
        id:5,
        point:'Screen reader support',
        icon: <Image src='/svgs/bullet_eye.svg' alt=''/>,
    },
    {
        id:6,
        point:'Typehead support',
        icon: <Image src='/svgs/bullet_typehead.svg' alt=''/>,
    },
]