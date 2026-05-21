import { useQuery } from '@tanstack/react-query';
import { getStats } from '@/api/stats/apiStats';
import { StatsData } from '@/types';

export function useStats() {
  return useQuery<StatsData, Error>({
    queryKey: ['stats'],
    queryFn: getStats,
    staleTime: 1000 * 60 * 10,
  });
}

export default useStats;
