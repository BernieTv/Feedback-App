'use client';

import { forwardRef, useState } from 'react';

import { cn, PropsWithClassName } from '@/lib/utils/ui-utils';
import { Textarea, TextareaProps } from './ui/textarea';

type Props = PropsWithClassName<TextareaProps>;

export const TextAreaWithCounter = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      defaultValue = '',
      maxLength = 10_000,
      onChange,
      autoComplete = 'off',
      autoFocus = false,
      ...textAreaProps
    }: Props,
    forwardedRef,
  ) => {
    const [content, setContent] = useState<string>(defaultValue as string);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);

      onChange?.(e);
    };

    return (
      <div>
        <Textarea
          ref={forwardedRef}
          className={cn(
            'min-h-10 max-h-32 ring-slate-400/20 ring-1 focus-visible:ring-slate-500 focus-visible:ring-1',
            className,
          )}
          value={content}
          onChange={handleContentChange}
          {...textAreaProps}
        />

        <span className="text-xs font-light ml-2">
          {content.length} / {maxLength}
        </span>
      </div>
    );
  },
);

TextAreaWithCounter.displayName = 'TextAreaWithCounter';
