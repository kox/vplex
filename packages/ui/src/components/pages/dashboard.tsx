import { AsidePanel } from "../ui/aside-panel";

export const Dashboard = () => {
  return (
    <div className="p-8">
      <AsidePanel />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome to the dashboard!</p>
        
      </div>
    </div>
  );
};
