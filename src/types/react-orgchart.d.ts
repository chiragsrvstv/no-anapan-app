declare module 'react-orgchart' {
  import { FC } from 'react';

  interface OrgChartProps {
    tree: any;
    NodeComponent?: FC<{ nodeData: any }>;
    pan?: boolean;
    zoom?: boolean;
  }

  const OrgChart: FC<OrgChartProps>;
  export default OrgChart;
}
