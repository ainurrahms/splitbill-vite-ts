import Button from '@/components/ui/Button';
import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
    </>
  );
}

export default Home;