import Achievement from './components/Achievement/Achievement'
import DemoVedio from './components/DemoVedio/DemoVedio'
import BoldSteps from './components/BoldSteps/BoldSteps'
import Insights from './components/Insights/Insights.js'
import Hero from './components/Herosection/Hero'
import RedSection from './components/RedSection/RedSection'
import Approach from './components/Approach/Approach'
import Deliverable from './components/Deliverable/Deliverable'
import Whyus from './components/WhyUs/Whyus'
import Faq from './components/Faq/Faq'


export default function page() {


  return (
    <div className=''>
      <Hero />
      {/* <Achievement />  */}
      <Approach />
      <Deliverable/>
      <Whyus/>
      {/* <BoldSteps /> */}
      <DemoVedio />
      <Insights />
      <Faq/>
      <RedSection />
    </div>
  )
}
