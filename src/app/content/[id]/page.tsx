export default async function CategoryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="w-full h-full p-[20px]">
      <p>안녕하세요.</p>
      <p>ContentDetail {id} 페이지입니다.</p>
    </div>
  );
}
