import { Header } from '@/components/layout';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[100dvw] h-[100dvh] pt-[66px]">
      <Header />
      {children}
    </div>
  );
}
