import React from 'react';
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// Utility function from utils.ts
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// Button component
const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Icons
const CheckCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Main component
const SubscribeSection = () => {
  return (
    <div className="bg-primary text-white mt-20 rounded-t-3xl rounded-b-3xl p-4 sm:p-6 md:p-8 w-[95%] min-h-[13rem] sm:h-auto lg:h-52 max-w-6xl mx-auto mb-[-5%] z-20 relative">
      <div className="flex flex-col lg:flex-row w-full max-w-[1136px] items-start lg:items-end gap-6 lg:gap-4 mx-auto">
        <div className="flex flex-col items-start gap-4 lg:gap-10 w-full lg:flex-1">
          <div className="flex flex-col items-start gap-2 sm:gap-4">
            <h1 className="w-full lg:w-[560px] opacity-80 font-medium text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-normal font-['Outfit',Helvetica]">
              Let's Start Tracking Smarter Today!
            </h1>
            <p className="w-full lg:w-[680px] opacity-80 font-normal text-sm sm:text-base leading-normal font-['Outfit',Helvetica]">
              Feel free to send us your questions or request a free consultation.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-3 sm:gap-4 w-full lg:w-auto lg:pl-4 lg:flex-1">
          <div className="flex items-start w-full">
            <p className="flex-1 opacity-80 text-sm sm:text-base font-paragraf-inter-regular-16 font-[number:var(--paragraf-inter-regular-16-font-weight)] tracking-[var(--paragraf-inter-regular-16-letter-spacing)] leading-[var(--paragraf-inter-regular-16-line-height)] [font-style:var(--paragraf-inter-regular-16-font-style)]">
              Optimizing Every Load, Every Second, Every Site.
            </p>
          </div>

          <Card className="w-full bg-[#e3ebfd] rounded-[20px] sm:rounded-[30px] border-none">
            <CardContent className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-1 md:pl-4 md:pr-1 gap-3 sm:gap-4 md:gap-0">
              <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 w-full sm:w-auto">
                <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[#9a9da5] text-xs sm:text-[13px] font-normal font-['Ubuntu',Helvetica]">
                  E-mail address
                </span>
              </div>

              <Button className="w-full sm:w-auto h-10 sm:h-12 px-4 sm:px-8 rounded-[20px] sm:rounded-[30px] bg-black text-white flex items-center justify-center gap-2 sm:gap-4">
                <span className="font-paragraph-regular-14 text-xs sm:text-sm font-[number:var(--paragraph-regular-14-font-weight)] tracking-[var(--paragraph-regular-14-letter-spacing)] leading-[var(--paragraph-regular-14-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-14-font-style)]">
                  Subscribe
                </span>
                <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;