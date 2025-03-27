import Achievement from './components/Achievement/Achievement'
import DemoVedio from './components/DemoVedio/DemoVedio'
import BoldSteps from './components/BoldSteps/BoldSteps'
import Insights from './components/Insights/Insights.js'
import Hero from './components/Herosection/Hero'
import RedSection from './components/RedSection/RedSection'

export default function page() {
  
  
  return (
    <div className=''>
      <Hero/>
      <Achievement/>
      <BoldSteps/>
      <DemoVedio/>
      <Insights/>
      <RedSection/>
    </div>
  )
}
