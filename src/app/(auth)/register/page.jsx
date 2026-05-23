import Register from '@/components/register/Register';
import React from 'react';
import { Toaster } from 'sonner';

const RegisterPage = () => {
  return (
    <div>
      <Register/>
      <Toaster/>
    </div>
  );
};

export default RegisterPage;