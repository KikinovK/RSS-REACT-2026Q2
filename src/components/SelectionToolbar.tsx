'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useSelectionStore } from '../store/useSelectionStore';
import Button from './ui/Button';
import { exportCsv, type CsvExportState } from '../app/actions';
import { useTranslations } from 'next-intl';

const downloadBlob = (csv: string, filename: string) => {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

const SelectionToolbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { getSelectedCount, clearSelections } = useSelectionStore();
  const selectedCount = getSelectedCount();
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations('selection');

  const [state, formAction, isPending] = useActionState<CsvExportState, FormData>(exportCsv, null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (state?.csv) {
      downloadBlob(state.csv, `${selectedCount}_items.csv`);
    }
  }, [state, selectedCount]);

  if (selectedCount === 0) {
    return null;
  }

  if (!isMounted) {
    return null;
  }

  const handleDownload = () => {
    if (!formRef.current) return;

    const selectedItems = useSelectionStore.getState().selectedItems;
    const selectedIds = Array.from(selectedItems);
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'ids';
    input.value = JSON.stringify(selectedIds);
    formRef.current.appendChild(input);
    formRef.current.requestSubmit();
  };

  return (
    <div
      className="
      fixed bottom-0 left-0 right-0 z-50
      w-full px-8 py-4
      bg-midnight-core/90 backdrop-blur-sm
      border-t border-midnight-core
      flex items-center justify-between gap-4
    "
    >
      <div className="flex items-center gap-2">
        <span className="text-body font-medium text-guidepost-green">
          {t('itemsSelected', { count: selectedCount })}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <form ref={formRef} action={formAction} className="hidden" />
        <Button
          onClick={clearSelections}
          className="bg-guidepost-green"
          ariaLabel={t('clearAriaLabel')}
        >
          {t('unselectAll')}
        </Button>
        <Button
          onClick={handleDownload}
          disabled={isPending}
          className="bg-guidepost-green"
          ariaLabel={t('downloadAriaLabel')}
        >
          {isPending ? t('preparing') : t('download')}
        </Button>
      </div>
    </div>
  );
};

export default SelectionToolbar;
