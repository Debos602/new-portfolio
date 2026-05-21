import { useQuery } from '@tanstack/react-query';
import fetchSkills from '@/api/skill/apiSkill';
import { Skill } from '@/types';

export function useSkills() {
  return useQuery<Skill[], Error>({
    queryKey: ['skills'],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export default useSkills;
