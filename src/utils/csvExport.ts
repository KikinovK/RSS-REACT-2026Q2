import { SearchResult } from '../types/SearchResult';

export const generateCSV = (items: SearchResult[]): string => {
  if (items.length === 0) return '';

  const headers = ['ID', 'Name', 'Description', 'Image URL'];
  const rows = items.map((item) => [
    item.id,
    `"${item.name}"`,
    `"${item.description.replace(/"/g, '""')}"`,
    item.image,
  ]);

  return [headers, ...rows].map((row) => row.join(',')).join('\n');
};

export const downloadCSV = (items: SearchResult[]): void => {
  const csv = generateCSV(items);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `${items.length}_items.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
