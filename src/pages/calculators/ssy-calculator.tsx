import SSYCalculator from '@/component/Calculators/SSYCalculator'
import SidebarLayout from '@/component/Layout/SidebarLayout'
import React from 'react'

const ssyCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Sukanya Samriddhi Yojana Calculator", pathname: "/" }}>
        <SSYCalculator></SSYCalculator>
    </SidebarLayout>
  )
}

export default ssyCalculator