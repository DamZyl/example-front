import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { Loader } from '../loader/loader';
import { Overlay } from '../overlay/overlay';

interface LoadingOverlayProps {
  isLoading: boolean;
  offset?: number;
}

export const LoadingOverlay = ({
  isLoading,
  offset = 0,
}: LoadingOverlayProps) => (
  <Transition
    show={isLoading}
    enter="transition-opacity duration-75"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className={clsx([
      'absolute flex items-center justify-center right-0 bottom-0 left-0 z-overlay',
      !isLoading && 'hidden',
    ])}
    style={{
      top: `${offset}px`,
    }}
  >
    <div className="z-overlayLoader">
      <Loader />
    </div>
    <Overlay />
  </Transition>
);
