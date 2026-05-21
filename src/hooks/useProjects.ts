import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import fetchProjects, { reorderProjects } from '@/api/project/apiProject';
import { Project } from '@/types';

export function useProjects() {
  return useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  });
}

export function useReorderProjects() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string[]>({
    mutationFn: (order: string[]) => reorderProjects(order),
    onMutate: async (order: string[]) => {
      await queryClient.cancelQueries({ queryKey: ['projects'] });
      const previous = queryClient.getQueryData<Project[]>(['projects']);

      if (previous) {
        const next = order
          .map((id) => previous.find((p) => p._id === id))
          .filter(Boolean) as Project[];
        queryClient.setQueryData(['projects'], next);
      }

      return { previous };
    },
    onError: (_err, _variables, context: any) => {
      if (context?.previous) {
        queryClient.setQueryData(['projects'], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}

export default useProjects;
