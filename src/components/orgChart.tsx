'use client';

import { useState } from 'react';

import { EmployeeCard } from './employee-card';
import type { Employee } from '../types';

interface OrgChartProps {
  data: Employee[];
}

export const OrgChart = ({ data }: OrgChartProps) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getReports = (parentId: string | null) => {
    return data
      .filter((employee) => employee.parentId === parentId)
      .sort((a, b) => a.order - b.order);
  };

  const getReportCount = (id: string) => {
    return data.filter((employee) => employee.parentId === id).length;
  };

  const renderEmployee = (employee: Employee) => {
    const reports = getReports(employee.id);
    const isExpanded = expandedNodes.has(employee.id);

    return (
      <div key={employee.id} className='flex flex-col items-center gap-8'>
        <EmployeeCard
          employee={employee}
          isExpanded={isExpanded}
          onToggle={() => toggleNode(employee.id)}
          reportCount={getReportCount(employee.id)}
        />
        {isExpanded && reports.length > 0 && (
          <div className='relative'>
            <div className='absolute left-1/2 h-8 w-px -translate-x-1/2 bg-border' />
            <div className='flex flex-wrap items-start justify-center gap-8 pt-8'>
              {reports.map(renderEmployee)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const boardMembers = data.filter(
    (employee) => employee.section === 'board' && employee.parentId === null
  );
  const orgChartRoots = data.filter(
    (employee) => employee.section === 'orgChart' && employee.parentId === null
  );

  return (
    <div className='flex flex-col items-center gap-16 p-8'>
      {/* {boardMembers.length > 0 && (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-8 text-center">Board Members</h2>
          <div className="flex flex-wrap justify-center gap-8">{boardMembers.map(renderEmployee)}</div>
        </div>
      )} */}
      {orgChartRoots.length > 0 && (
        <div className='w-full'>
          {/* <h2 className="text-2xl font-bold mb-8 text-center">Organizational Chart</h2> */}
          <div className='flex flex-wrap justify-center gap-8'>
            {orgChartRoots.map(renderEmployee)}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgChart;
