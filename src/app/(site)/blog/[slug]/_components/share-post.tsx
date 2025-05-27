'use client';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';

export function SharePost() {
  const [postUrl, setPostUrl] = useState('');

  useEffect(() => {
    setPostUrl(window.location.href);
  }, []);

  return (
    <div className='flex items-center gap-4'>
      <p className='font-medium'>Share This Post:</p>

      <div className='flex items-center gap-5'>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
          target='_blank'
          rel='noopener noreferrer'
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on Facebook</span>

          <FacebookIcon />
        </a>

        <a
          href={`https://x.com/share?url=${postUrl}`}
          target='_blank'
          rel='noopener noreferrer'
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on Twitter/X</span>
          <TwitterIcon />
        </a>

        <a
          href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${postUrl}`}
          target='_blank'
          rel='noopener noreferrer'
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on LinkedIn</span>

          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}
