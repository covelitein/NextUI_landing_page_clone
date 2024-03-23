import { TbBolt, TbMoon } from 'react-icons/tb'
import { PiDevicesBold, PiMagicWand } from 'react-icons/pi'
import { Image } from '@nextui-org/react'

export const featuresData = [
    {
        id:1,
        heading:'Themeable',
        icon:<Image src='/svgs/magicwand.svg' />,
        desc:'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    },
    {
        id:2,
        heading:'Fast',
        icon:<Image src='/svgs/bolt.svg' />,
        desc:'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.',
    },
    {
        id:3,
        heading:'Light & Dark UI',
        icon:<Image src='/svgs/crescent.svg' />,
        desc:'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    },
    {
        id:4,
        heading:'Unique DX',
        icon:<Image src='/svgs/devices.svg' />,
        desc:'NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.',
    },
]