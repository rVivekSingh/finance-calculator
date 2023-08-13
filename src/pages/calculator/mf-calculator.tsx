import MutualFundReturnCalculator from '@/component/Calculators/MutualFundReturnCalculator';
import SidebarLayout from '@/component/Layout/SidebarLayout';
import React from 'react'

const mutualFundReturnsCalculator = () => {
    return (
        <SidebarLayout seo={{ title: "Mutual Funds Returns Calculator", pathname: "/" }}>
          <MutualFundReturnCalculator />
        </SidebarLayout>
      );
}

export default mutualFundReturnsCalculator