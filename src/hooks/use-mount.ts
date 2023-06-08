import { useEffect, useState } from 'react';

const useMount = (opened: boolean) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, 1000);
    }
  }, [opened, mounted]);
  return {
    mounted,
  };
};
export default useMount;
