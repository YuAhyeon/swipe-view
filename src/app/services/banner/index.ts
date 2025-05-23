export const getChatBanner = async () => {
  const res = await fetch('/api/event/banner');
  if (!res.ok) throw new Error('fetch 요청 실패');
  return res.json();
};
