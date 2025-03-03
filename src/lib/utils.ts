import { type ClassValue, clsx } from 'clsx';
import { flow, replace, trim, truncate } from 'lodash';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: 'accurate' | 'normal';
  } = {}
) {
  const { decimals = 0, sizeType = 'normal' } = opts;

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === 'accurate'
      ? (accurateSizes[i] ?? 'Bytest')
      : (sizes[i] ?? 'Bytes')
  }`;
}

export function parseAccountId(encodedId: string): {
  numericId: number;
  accountName: string;
} {
  const decoded = decodeURIComponent(encodedId);
  const [numericId, name] = decoded.split('-');

  return {
    id: parseInt(numericId, 10),
    name
  };
}

export const truncateText = (text: string) => {
  return truncate(text, {
    length: 300,
    separator: /[.]? +/
  });
};

export const markdownToText = (markdown: string): string => {
  return flow([
    // Remove headers (# text)
    (text) => replace(text, /^#{1,6}.+$/gm, ''),
    // Remove bold/italic
    (text) => replace(text, /[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1'),
    // Remove links
    (text) => replace(text, /\[([^\]]+)\]\([^)]+\)/g, '$1'),
    // Remove lists
    (text) => replace(text, /^[-*+]\s+/gm, ''),
    // Remove code blocks
    (text) => replace(text, /`{1,3}[^`]*`{1,3}/g, ''),
    // Remove empty lines
    (text) => replace(text, /^\s*[\r\n]/gm, ''),
    // Trim whitespace
    (text) => trim(text)
  ])(markdown);
};
