export default function SiteFooter() {
  return (
    <footer className="site-main border-t border-zinc-200 !py-8 text-sm text-zinc-500">
      © {new Date().getFullYear()} Carl Drechsel
    </footer>
  );
}
