import React from 'react';
import PaymentInfo from './PaymentInfo';
import ContactInformation from './ContactInformation';

const Checkout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-xl font-semibold text-black mt-5">CheckOut
      <div className="mx-auto p-14 grid grid-rows-1 md:grid-cols-2 gap-8">
        <ContactInformation />
        <PaymentInfo />
      </div>
    </div>
  );
};

export default Checkout;
