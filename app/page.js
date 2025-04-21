import Insights from './components/Insights/Insights.js'
import Hero from './components/Herosection/Hero'
import RedSection from './components/RedSection/RedSection'
import Approach from './components/Approach/Approach'
import Deliverable from './components/Deliverable/Deliverable'
import Faq from './components/Faq/Faq'
import WhyChoseUs from './components/WhyChoseUs/WhyChoseUs'
import MarketingStartegy from './components/MarketingStartegy/MarketingStartegy'
import Capabilities from './components/Capabilities/Capabilities'
import KnowledgeAssets from './components/KnowledgeAssets/KnowledgeAssets'


export default function page() {


  return (
    <div className=''>
      <Hero />
      <Approach />
      <Deliverable />
      <WhyChoseUs />
      <MarketingStartegy />
      <Capabilities />
      <KnowledgeAssets />
      <Insights />
      <Faq />
      <RedSection />
    </div>
  )
}
