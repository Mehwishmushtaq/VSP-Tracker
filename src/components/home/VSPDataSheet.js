import React from 'react';

// Import the images
import DashboardsImg from '../../assets/images/dashboard.svg';
import ProductionTrackingImg from '../../assets/images/production.svg';
import TrackRefuelingImg from '../../assets/images/Refuelling_Sites__Light_230214.svg';
import ReportsImg from '../../assets/images/reports.svg';
import ExportsImg from '../../assets/images/exports.svg';
import DataStorageImg from '../../assets/images/data.svg';
import CustomizationImg from '../../assets/images/coustomization.svg';
import SupportImg from '../../assets/images/support.svg';

const VSPDataSheet = () => {
  const items = [
    { img: DashboardsImg, text: "Dashboards" },
    { img: ProductionTrackingImg, text: "Production Tracking" },
    { img: TrackRefuelingImg, text: "Track Refueling" },
    { img: ReportsImg, text: "Reports" },
    { img: ExportsImg, text: "Exports" },
    { img: DataStorageImg, text: "Data Storage &\nOnline Viewing" },
    { img: CustomizationImg, text: "Customization" },
    { img: SupportImg, text: "Support" }
  ];

  return (
    <div className="space-y-10 py-14 px-20">
      <h3 className="text-center text-primary font-semibold">WHAT WE OFFER</h3>
      <h2 className="text-center text-3xl font-bold">DATA SHEET FOR VSP</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-24 gap-x-6">
        {items.map(({ img, text }, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
          >
            <div className="flex items-center space-x-4 w-full max-w-[220px]">
              <img src={img} alt={text} className="w-16 h-16 shrink-0" />
              <p className="text-sm sm:text-base md:text-[20px] font-medium text-black leading-snug text-left">
                {text === "Data Storage & Online Viewing" ? (
                  <>
                    Data Storage & Online <br /> Viewing
                  </>
                ) : (
                  text
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VSPDataSheet;
