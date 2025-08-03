export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen ">
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
