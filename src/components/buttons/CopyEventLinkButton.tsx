'use client';

import { Event } from '@prisma/client';
import copy from 'copy-to-clipboard';
import { Link } from 'lucide-react';

import { getEventLink } from '@/lib/utils/event-utils';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { toast } from '../ui/use-toast';

type Props = {
  ownerId: Event['ownerId'];
  eventSlug: Event['slug'];
};

export const CopyEventLinkButton = ({ ownerId, eventSlug }: Props) => {
  const handleCopy = () => {
    copy(getEventLink({ ownerId, eventSlug }));

    toast({
      description: 'Event link copied to clipboard!',
      variant: 'default',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="rounded-full"
          >
            <Link className="w-4 h-4" />
          </Button>
        </TooltipTrigger>

        <TooltipContent className="bg-black text-white text-sm">
          Copy link to clipboard
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
