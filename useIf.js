function useIf(condition, do) {
  useEffect(() => condition && do(), [condition])
}
