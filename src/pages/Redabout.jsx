import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectComponent = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://rookhq.com/about';
  }, []);

  return null;
};

export default RedirectComponent;
