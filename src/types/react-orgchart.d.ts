declare module 'react-orgchart' {
  import { FC } from 'react';

  interface OrgChartProps {
    tree: any;
    NodeComponent?: FC<{ nodeData: any }>;
    pan?: boolean;
    zoom?: boolean;
  }

  export interface Employee {
    id: string;
    parentId: string | null;
    section: 'board' | 'orgChart' | string;
    order: number;
    title?: string;
    node?: any;
    containingNodeId?: null;
  }

  const OrgChart: FC<OrgChartProps>;
  export default OrgChart;
}
