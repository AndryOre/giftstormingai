interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col rounded border-neutral-100 bg-neutral-50 p-3 shadow dark:border-neutral-900 dark:bg-neutral-950 dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]">
      <div className="flex items-start justify-start">
        <div className="rounded bg-red-600 px-1.5 font-montserrat text-sm font-bold text-neutral-100 dark:bg-red-400">
          {step}
        </div>
      </div>
      <div className="mt-2 flex flex-col">
        <div className="font-montserrat text-xl font-semibold">{title}</div>
        <div className="font-lato text-neutral-700 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}

export default StepCard;
