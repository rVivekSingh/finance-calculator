import PPFCalculator from '@/component/Calculators/PPFCalculator'
import SidebarLayout from '@/component/Layout/SidebarLayout'
import React from 'react'

const ppfcalculator = () => {
  return (
    <SidebarLayout seo={{ title: "PPF Calculator", pathname: "/" }}>
        <PPFCalculator></PPFCalculator>
    </SidebarLayout>
  )
}

export default ppfcalculator