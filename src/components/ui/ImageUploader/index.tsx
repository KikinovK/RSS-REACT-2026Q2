import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';

import { Label, FieldError } from '../FieldInput';
import Button from '../Button';

import {
  ACCEPTED_IMAGE_EXTENSIONS,
  fileToBase64,
  formatFileSize,
  MAX_IMAGE_SIZE_BYTES,
  validateImageFile,
} from './constants';

interface ImageUploaderProps {
  id: string;
  label?: string;
  error?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onValidationError?: (error: string | undefined) => void;
}

const ImageUploader = ({
  id,
  label = 'Upload image',
  error,
  className,
  value,
  onChange,
  onBlur,
  onValidationError,
}: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [internalError, setInternalError] = useState<string | undefined>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const combinedError = error ?? internalError;
  const describedBy = combinedError ? `${id}-error` : undefined;

  const updateValidationError = (nextError: string | undefined) => {
    setInternalError(nextError);
    onValidationError?.(nextError);
  };

  const handleFile = async (file: File | null | undefined) => {
    if (!file) return;
    const validationError = validateImageFile(file);
    if (validationError) {
      updateValidationError(validationError);
      setFileName(null);
      onChange?.('');
      return;
    }
    try {
      const base64 = await fileToBase64(file);
      updateValidationError(undefined);
      setFileName(file.name);
      onChange?.(base64);
    } catch {
      updateValidationError('Failed to read the file. Please try again.');
      setFileName(null);
      onChange?.('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    void handleFile(file);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    void handleFile(file);
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleClear = () => {
    setFileName(null);
    updateValidationError(undefined);
    onChange?.('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={`flex flex-col ${className || ''}`}>
      <Label htmlFor={id}>{label}</Label>
      <label
        htmlFor={id}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          flex flex-col items-center justify-center
          w-full
          min-h-40
          px-4 py-6
          border-2 border-dashed
          rounded-(--radius-inputs)
          cursor-pointer
          transition-all
          ${isDragging ? 'border-guidepost-green bg-guidepost-green/10' : 'border-stardust/40 bg-stardust/5'}
          ${combinedError ? 'border-guidepost-green' : ''}
          hover:border-guidepost-green
        `}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={ACCEPTED_IMAGE_EXTENSIONS}
          onChange={handleInputChange}
          onBlur={onBlur}
          aria-invalid={!!combinedError}
          aria-describedby={describedBy}
          className="hidden"
        />
        {value ? (
          <div className="flex flex-col items-center gap-3">
            <img
              src={value}
              alt={fileName ? `Preview of ${fileName}` : 'Uploaded image preview'}
              className="max-h-40 max-w-full rounded object-contain"
            />
            {fileName && (
              <span className="text-caption text-stardust/80 break-all text-center">
                {fileName}
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-body-sm text-stardust">
              Drag and drop an image, or
            </span>
            <span className="text-caption text-stardust/60">
              PNG or JPEG, max {formatFileSize(MAX_IMAGE_SIZE_BYTES)}
            </span>
          </div>
        )}
      </label>
      <div className="flex flex-col gap-2 mt-3">
        {fileName && <span className="text-caption text-stardust/80">{fileName}</span>}
        {value && (
          <Button
            type="button"
            variant="primary"
            onClick={handleClear}
            className="text-body-sm px-4 py-2 bg-transparent border border-stardust/30 text-stardust"
          >
            Remove
          </Button>
        )}
      </div>
      <FieldError id={id}>{combinedError}</FieldError>
    </div>
  );
};

export default ImageUploader;
