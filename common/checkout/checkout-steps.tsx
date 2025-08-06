import { cn } from "@/lib/utils";
import React from "react";
import { Check } from "lucide-react";

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="flex-between flex-col md:flex-row space-x-2 space-y-2 mb-10">
      {["User Login", "Shipping Address", "Payment Methode", "Place Order"].map(
        (step, index) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                "p-2 w-56 rounded-full text-sm transition-colors duration-300",
                "flex items-center justify-center gap-x-2",
                index === current && "bg-secondary  font-bold"
              )}
            >
              {index < current && <Check className="h-5 w-5 text-green-500" />}
              <span>{step}</span>
            </div>
            {index < step.length - 1 && (
              <hr className="w-16 border-t border-gray-300" />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CheckoutSteps;
