export const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB
export const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg'];
export const ACCEPTED_IMAGE_EXTENSIONS = '.png,.jpg,.jpeg';

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as base64 string'));
      }
    };
    reader.onerror = () => reject(reader.error ?? new Error('FileReader error'));
    reader.readAsDataURL(file);
  });

export const validateImageFile = (file: File): string | undefined => {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return 'Only PNG or JPEG images are allowed';
  }
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return `Image size must be less than ${formatFileSize(MAX_IMAGE_SIZE_BYTES)}`;
  }
  return undefined;
};
