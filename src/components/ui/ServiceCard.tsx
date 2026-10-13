import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  note: string;
  index: number;
  className?: string;
};

export default function ServiceCard({ title, note, index, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex h-36 flex-col justify-between border border-border bg-surface p-5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1.5",
        className,
      )}
    >
      <span className="flex items-center gap-2 text-xs text-muted">
        <span className="size-1.5 rounded-full bg-accent ring-1 ring-border" aria-hidden="true" />
        Service {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-lg font-semibold leading-tight tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-muted">{note}</p>
      </div>
    </div>
  );
}
