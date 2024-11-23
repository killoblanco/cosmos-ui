import { cn } from "@/ui/utils";
import type { FC } from "react";

const colors = {
  red: [
    "bg-red-50",
    "bg-red-100",
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-red-800",
    "bg-red-900",
    "bg-red-950",
  ],
  orange: [
    "bg-orange-50",
    "bg-orange-100",
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
    "bg-orange-700",
    "bg-orange-800",
    "bg-orange-900",
    "bg-orange-950",
  ],
  yellow: [
    "bg-yellow-50",
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-900",
    "bg-yellow-950",
  ],
  green: [
    "bg-green-50",
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-900",
    "bg-green-950",
  ],
  mint: [
    "bg-mint-50",
    "bg-mint-100",
    "bg-mint-200",
    "bg-mint-300",
    "bg-mint-400",
    "bg-mint-500",
    "bg-mint-600",
    "bg-mint-700",
    "bg-mint-800",
    "bg-mint-900",
    "bg-mint-950",
  ],
  teal: [
    "bg-teal-50",
    "bg-teal-100",
    "bg-teal-200",
    "bg-teal-300",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-teal-700",
    "bg-teal-800",
    "bg-teal-900",
    "bg-teal-950",
  ],
  cyan: [
    "bg-cyan-50",
    "bg-cyan-100",
    "bg-cyan-200",
    "bg-cyan-300",
    "bg-cyan-400",
    "bg-cyan-500",
    "bg-cyan-600",
    "bg-cyan-700",
    "bg-cyan-800",
    "bg-cyan-900",
    "bg-cyan-950",
  ],
  blue: [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-blue-950",
  ],
  indigo: [
    "bg-indigo-50",
    "bg-indigo-100",
    "bg-indigo-200",
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
    "bg-indigo-800",
    "bg-indigo-900",
    "bg-indigo-950",
  ],
  purple: [
    "bg-purple-50",
    "bg-purple-100",
    "bg-purple-200",
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-purple-800",
    "bg-purple-900",
    "bg-purple-950",
  ],
  pink: [
    "bg-pink-50",
    "bg-pink-100",
    "bg-pink-200",
    "bg-pink-300",
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-pink-700",
    "bg-pink-800",
    "bg-pink-900",
    "bg-pink-950",
  ],
  brown: [
    "bg-brown-50",
    "bg-brown-100",
    "bg-brown-200",
    "bg-brown-300",
    "bg-brown-400",
    "bg-brown-500",
    "bg-brown-600",
    "bg-brown-700",
    "bg-brown-800",
    "bg-brown-900",
    "bg-brown-950",
  ],
  gray: [
    "bg-gray-50",
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
    "bg-gray-950",
  ],
};

export const ColorsPage: FC = () => {
  return (
    <main className="flex flex-col gap-8 grow">
      <h1 className="text-title-large">Colors</h1>
      <div className="flex gap-1">
        <div className="flex flex-col items-center gap-2">
          <div className="h-4" />
          <div className="flex flex-col gap-1">
            {[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((shade) => (
              <div
                key={window.crypto.randomUUID()}
                className={cn("h-14 flex items-center justify-center text-caption-1", shade)}
              >
                {shade * 10}
              </div>
            ))}
          </div>
        </div>
        {Object.entries(colors).map(([color, shades]) => (
          <div key={color} className="flex flex-col items-center gap-2">
            <h4 className="capitalize text-caption-1">{color}</h4>
            <div className="flex flex-col gap-1">
              {shades.map((shade) => (
                <div
                  key={shade}
                  className={cn(
                    "size-14 flex items-center justify-center rounded-xl",
                    shade,
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
