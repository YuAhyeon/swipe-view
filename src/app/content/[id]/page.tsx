type Params = {
  id: string;
};

export default async function ContentDetail({ params }: { params: Params }) {
  const id = (await params).id;

  return (
    <div className="w-full h-full p-[20px]">
      <p>안녕하세요.</p>
      <p>ContentDetail {id} 페이지입니다.</p>
    </div>
  );
}
