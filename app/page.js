import Achievement from './components/Achievement/Achievement'
import DemoVedio from './components/DemoVedio/DemoVedio'
import BoldSteps from './components/BoldSteps/BoldSteps'
import Insights from './components/Achievement/Insights/Insights'
import Hero from './components/Herosection/Hero'

export default function page() {
  
  
  return (
    <div className=''>
      <Hero/>
      <Achievement/>
      <BoldSteps/>
      <DemoVedio/>
      <Insights/>
    </div>
  )
}
