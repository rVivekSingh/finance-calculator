import SWPCalculator from '@/component/Calculators/SWPCalculator'
import SidebarLayout from '@/component/Layout/SidebarLayout'
import React from 'react'

const swpcalculator = () => {
  return (
    <SidebarLayout seo={{ title: "SWP (Systematic Withdrawal Plan) Calculator", pathname: "/" }}>
      <SWPCalculator/>
  </SidebarLayout>
  )
}

export default swpcalculator