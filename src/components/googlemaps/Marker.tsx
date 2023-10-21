import { useEffect, useRef } from 'react';
import { useMapContext } from './MapContext.js';

import { useMapEffect } from './mapUtils.js';

interface Props extends google.maps.MarkerOptions {
  onClick?: (ev: google.maps.MapMouseEvent) => void;
}

export function Marker({ onClick, ...options }: Props) {
  const marker = useRef<google.maps.Marker>();
  const { map, addMarker, removeMarker } = useMapContext();
  useEffect(() => {
    if (!marker.current) {
      marker.current = new google.maps.Marker({ ...options, map });
      addMarker(marker.current);
      return () => {
        if (marker.current) {
          removeMarker(marker.current);
          marker.current = undefined;
        }
      };
    }
  }, []);

  useEffect(() => {
    if (marker.current) {
      google.maps.event.clearListeners(marker, 'click');
      if (onClick) {
        marker.current.addListener('click', onClick);
      }
    }
  }, [marker.current, onClick]);

  /* useMapEffect(() => {
    if (marker.current) {
      marker.current.setOptions(options);
    }
  }, [marker.current, options]); */
  useEffect(() => {
    if (marker.current && map) {
      // Only run the effect if the marker and map are defined
      marker.current.setOptions(options);
    }
  }, [marker.current, map, options]); // Add map as a dependency

  return null;
}
