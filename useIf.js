import { useEffect } from 'react';

function useIf(condition, do) {
  useEffect(() => condition && do(), [condition])
}
