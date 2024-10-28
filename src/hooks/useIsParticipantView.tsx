import { useSearchParams } from 'next/navigation';

import { eventPageQueryParams } from '@/config/queryParams';

export const useIsParticipantView = () => {
  const params = useSearchParams();

  return params.get(eventPageQueryParams.asParticipant) === 'true';
};
