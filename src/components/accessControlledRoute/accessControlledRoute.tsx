import "./accessControlledRoute.css";

const AccessControlledRoute = ({
  check,
  trueComponent,
  falseComponent,
}: {
  check: () => boolean;
  trueComponent: React.ReactNode;
  falseComponent: React.ReactNode;
}) => {
  return <>{check() ? trueComponent : falseComponent}</>;
};

export default AccessControlledRoute;
