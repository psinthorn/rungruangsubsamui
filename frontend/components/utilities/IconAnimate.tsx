import { Loader, CircleChevronDown, Heart, Plane, Smile, SmilePlus, Snowflake, Sun, TreePalm, Waves, Car } from 'lucide-react';

// IconAnimate component
// This component is used to display a list of animated icons
// The icons are imported from the lucide-react library
// The icons are displayed in a flex container with a gap of 3
// Each icon has a different animation applied to it
// The icons are displayed in a span element
// The span element has a class of 'flex justify-center text-center items-center text-slate-400 gap-3'
// The icons are displayed in the span element
// The icons are displayed in the following order: Snowflake, Smile, Plane, Car, Sun, TreePalm, Waves, Heart, SmilePlus
// Each icon has a different animation applied to it
// The Snowflake icon has the 'animate-pulse' animation applied to it
// The Smile icon has the 'animate-pulse' animation applied to it
// The Plane icon has the 'animate-bounce' animation applied to it
// The Car icon has the 'animate-pulse' animation applied to it
// The Sun icon has the 'animate-spin' animation applied to it
// The TreePalm icon has the 'animate-pulse' animation applied to it
// The Waves icon has the 'animate-pulse' animation applied to it
// The Heart icon has the 'animate-ping' animation applied to it
// The SmilePlus icon has the 'animate-pulse' animation applied to it
// The IconAnimate component is exported as default

const IconAnimate = () => {
  return (
    <span className='flex justify-center text-center items-center text-slate-400 gap-3'>
      <Snowflake className='animate-pulse'/>
      <Smile className='animate-pulse'/>
      <Plane className='animate-bounce'/>
      <Car className='animate-pulse'/>
      <Sun className='animate-spin'/>
      <TreePalm className='animate-pulse'/>
      <Waves className='animate-pulse'/>
      <Heart className='animate-ping'/>
      <SmilePlus className='animate-pulse'/>
    </span>
  )
}

export default IconAnimate