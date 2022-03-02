import { useEffect } from 'react';

expord default function useIf(condition, doStuff): () => void {
  useEffect(() => condition && doStuff(), [condition])
}
