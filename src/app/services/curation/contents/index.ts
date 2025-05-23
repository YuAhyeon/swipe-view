export const getCurationContents = async ({ pageParam = 1 }) => {
  const res = await fetch(`/api/curation/contents?page=${pageParam}`);
  if (!res.ok) throw new Error('fetch 요청 실패');
  return res.json();
};
