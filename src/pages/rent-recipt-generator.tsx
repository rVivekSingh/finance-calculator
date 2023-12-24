import SidebarLayout from '@/component/Layout/SidebarLayout';
import React from 'react'
import RentReciptGenerator from '@/component/PDF/RentReciptGenerator'

const rentreciptgenerator = () => {
    return (
        <SidebarLayout seo={{ title: "Rent Recipt Generator", pathname: "/" }}>
           <RentReciptGenerator/>
        </SidebarLayout>
      );
}

export default rentreciptgenerator
