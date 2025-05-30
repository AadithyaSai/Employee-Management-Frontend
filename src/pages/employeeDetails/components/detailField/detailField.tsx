import "./detailField.css";

type DetailFieldProps = {
  header: string;
  data: React.ReactNode;
};

const DetailField = ({ header, data }: DetailFieldProps) => {
  return (
    <div className="detail-field-div">
      <div className="detail-field-header">{header}</div>
      <div className="detail-field-data">{data}</div>
    </div>
  );
};

export default DetailField;
