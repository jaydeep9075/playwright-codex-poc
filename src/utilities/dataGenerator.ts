export const dataGenerator = {
  randomEmail(prefix: string = 'user'): string {
    const token = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    return `${prefix}.${token}@example.com`;
  },
  randomString(length: number = 12): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
  }
};
