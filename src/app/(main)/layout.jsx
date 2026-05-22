import { Toaster } from 'sonner';

const layout = ({ children }) => {
  return (
    <div>
      <Toaster />
      <main>
        {children}
      </main>
    </div>
  );
};

export default layout;