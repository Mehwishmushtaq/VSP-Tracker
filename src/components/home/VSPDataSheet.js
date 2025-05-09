import React from 'react';

// Import the images
import DashboardsImg from '../../assets/images/dashboard.svg';
import ProductionTrackingImg from '../../assets/images/production.svg';
import TrackRefuelingImg from '../../assets/images/track.svg';
import ReportsImg from '../../assets/images/reports.svg';
import ExportsImg from '../../assets/images/exports.svg';
import DataStorageImg from '../../assets/images/data.svg';
import CustomizationImg from '../../assets/images/coustomization.svg';
import SupportImg from '../../assets/images/support.svg';

const VSPDataSheet = () => {
  return (
    <div className="space-y-8 py-[2rem]">
      <h2 className="text-center text-3xl font-semibold">WHAT WE OFFER</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src={DashboardsImg} alt="Dashboards" className="w-16 h-16 mb-4" />
          <p className="text-lg">Dashboards</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={ProductionTrackingImg} alt="Production Tracking" className="w-16 h-16 mb-4" />
          <p className="text-lg">Production Tracking</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={TrackRefuelingImg} alt="Track Refueling" className="w-16 h-16 mb-4" />
          <p className="text-lg">Track Refueling</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={ReportsImg} alt="Reports" className="w-16 h-16 mb-4" />
          <p className="text-lg">Reports</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={ExportsImg} alt="Exports" className="w-16 h-16 mb-4" />
          <p className="text-lg">Exports</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={DataStorageImg} alt="Data Storage & Online Viewing" className="w-16 h-16 mb-4" />
          <p className="text-lg">Data Storage & Online Viewing</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={CustomizationImg} alt="Customization" className="w-16 h-16 mb-4" />
          <p className="text-lg">Customization</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={SupportImg} alt="Support" className="w-16 h-16 mb-4" />
          <p className="text-lg">Support</p>
        </div>
      </div>
    </div>
  );
};

export default VSPDataSheet;