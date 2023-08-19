import LumpsumCalculator from '@/component/Calculators/LumpsumCalculator'
import SidebarLayout from '@/component/Layout/SidebarLayout'
import React from 'react'

const lumpsumcalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Lumpsum Investment Calculator", pathname: "/" }}>
        <LumpsumCalculator></LumpsumCalculator>
    </SidebarLayout>
  )
}

export default lumpsumcalculator