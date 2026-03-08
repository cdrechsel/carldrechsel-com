export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Carl Drechsel. All rights reserved.</p>
        <p>Built for carldrechsel.com</p>
      </div>
    </footer>
  );
}
