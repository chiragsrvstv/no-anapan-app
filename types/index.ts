import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface Employee {
  id: string;
  title: string;
  node: {
    position: {
      id: number;
      fullName: string;
      role: string;
      profileImage?: {
        endpoint: string;
        uri: string;
        ext: string;
      } | null;
    };
  };
  parentId: string | null;
  section: 'board' | 'orgChart';
  type: 'leaf' | string;
  order: number;
}

export interface EmployeeCardProps {
  employee: Employee;
  isExpanded?: boolean;
  onToggle?: () => void;
  reportCount?: number;
}
