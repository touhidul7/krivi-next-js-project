import Achievement from './components/Achievement/Achievement'
import DemoVedio from './components/DemoVedio/DemoVedio'
import BoldSteps from './components/BoldSteps/BoldSteps'
import Insights from './components/Insights/Insights'

export default function page() {
  
  
  return (
    <div className=''>
      {/* <CommingSoon/> */}
      <Achievement/>
      <BoldSteps/>
      <DemoVedio/>
      <Insights/>
    </div>
  )
}
