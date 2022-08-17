import { useEffect } from 'react';

export default function useIf(condition, doStuff): () => void {
  useEffect(() => condition && doStuff(), [condition])
}
