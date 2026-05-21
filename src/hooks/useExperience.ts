import { useQuery } from '@tanstack/react-query';
import fetchExperience from '@/api/experience/apiExperience';
import { TExperience } from '@/types';

export function useExperience() {
  return useQuery<TExperience[], Error>({
    queryKey: ['experience'],
    queryFn: fetchExperience,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export default useExperience;
