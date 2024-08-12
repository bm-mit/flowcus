import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export interface StyledContainerProps extends ContainerProps {
  className?: string;
}
