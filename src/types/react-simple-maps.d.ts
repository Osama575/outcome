/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-simple-maps' {
  import { ReactNode, CSSProperties } from 'react';

  export interface GeographyProps {
    geography: any;
    projection?: any;
  }

  export interface ComposableMapProps {
    projection?: string | any;
    projectionConfig?: any;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | any;
    children: (data: { geographies: any[] }) => ReactNode;
  }

  export interface GeographyComponentProps {
    geography: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [[number, number], [number, number]];
    disablePanning?: boolean;
    disableZooming?: boolean;
    children?: ReactNode;
  }

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    curve?: number;
    connectorProps?: any;
    children?: ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyComponentProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Annotation: React.FC<AnnotationProps>;
  export const Marker: React.FC<any>;
}