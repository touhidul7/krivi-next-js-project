import CommingSoon from './components/commingsoon/CommingSoon'
import Achievement from './components/Achievement/Achievement'
import DemoVedio from './components/DemoVedio/DemoVedio'
import BoldSteps from './components/BoldSteps/BoldSteps'

export default function page() {
  
  
  return (
    <div className='pt-[1300px]'>
      {/* <CommingSoon/> */}
      <Achievement/>
      <BoldSteps/>
      <DemoVedio/>
    </div>
  )
}
