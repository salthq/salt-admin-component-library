export const calculateFileSize = (bytes: number): string | null => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) return null;

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  if (i === 0) return `${bytes} ${sizes[i]})`;

  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};
