import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click!',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'Tell me a boat story',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'frame_megumii.blessingway.xyz',
  description: 'Permaframe',
  openGraph: {
    title: 'frame_megumii.blessingway.xyz',
    description: 'Permaframe',
    images: [`${NEXT_PUBLIC_URL}/music-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>frame_megumii.blessingway.xyz</h1>
    </>
  );
}
