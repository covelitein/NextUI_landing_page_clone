import { TbBolt, TbMoon } from 'react-icons/tb'
import { PiDevicesBold, PiMagicWand } from 'react-icons/pi'

export const featuresData = [
    {
        id:1,
        heading:'Themeable',
        icon:<PiMagicWand className='text-[#ff4ecd] text-2xl'/>,
        desc:'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    },
    {
        id:2,
        heading:'Fast',
        icon:<TbBolt className='text-[#ff4ecd] text-2xl'/>,
        desc:'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.',
    },
    {
        id:3,
        heading:'Light & Dark UI',
        icon:<TbMoon className='text-[#ff4ecd] text-2xl'/>,
        desc:'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    },
    {
        id:4,
        heading:'Unique DX',
        icon:<PiDevicesBold className='text-[#ff4ecd] text-2xl'/>,
        desc:'NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.',
    },
]