interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      {children}
    </main>
  );
}