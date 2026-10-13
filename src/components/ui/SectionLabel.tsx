export default function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="meta flex items-center gap-3">
      <span className="text-accent-text" aria-hidden="true">
        {index}
      </span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
