type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="inline-flex items-center rounded-full border border-red-400 bg-transparent px-3 font-lato text-neutral-950 dark:text-neutral-50">
      {title}
    </h2>
  );
};

export default SectionTitle;
