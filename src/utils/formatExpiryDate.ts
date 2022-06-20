export const formatExpiryDate = (expiryDate: Date): string => {
  return expiryDate.toLocaleDateString('en-US', {
    month: '2-digit',
    year: '2-digit',
  });
};
