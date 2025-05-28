import "./sectionHeader.css";

type SectionHeaderProps = {
  title: string;
  endAdornment?: React.ReactNode;
};

const SectionHeader = ({ title, endAdornment }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      {endAdornment}
    </div>
  );
};

export default SectionHeader;
