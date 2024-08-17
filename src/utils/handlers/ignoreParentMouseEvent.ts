import React from 'react';

export default function ignoreParentMouseEvent(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
  event.stopPropagation();
}
