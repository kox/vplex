import { AsidePanel } from "../ui/aside-panel";

export const Dashboard = () => {
  return (
    <div className="tw-p-8">
      <AsidePanel />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="tw-text-3xl tw-font-bold">Dashboard</h1>
        <p className="tw-mt-4">Welcome to the dashboard!</p>
        
      </div>
    </div>
  );
};
