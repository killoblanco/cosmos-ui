import { themeToggler } from "@/ui/utils";
import { Icon } from "@iconify/react";
import { type FC, useEffect } from "react";
import { Outlet } from "react-router";

const sidebarOpts = [
  {
    group: "Foundations",
    children: [
      {
        label: "Colors",
        icon: <Icon icon="tabler:palette" className="size-5" />,
        path: "/foundation/colors",
      },
      {
        label: "Typography",
        icon: <Icon icon="tabler:typography" className="size-5" />,
        path: "/foundation/typography",
      },
    ],
  },
];

export const BaseLayout: FC = () => {
  useEffect(() => {
    themeToggler();
  }, []);

  return (
    <div className="container flex gap-8 h-full">
      <aside className="w-full max-w-72 flex flex-col gap-4">
        <h4 className="text-title-large">Cosmos UI</h4>
        <nav>
          {sidebarOpts.map(({ group, children }) => (
            <div key={group} className="flex flex-col gap-2.5">
              <h5 className="text-title-3">{group}</h5>
              <ul className="flex flex-col gap-2">
                {children.map(({ label, icon, path }) => (
                  <li key={path} className="text-callout">
                    <a
                      href={path}
                      className="flex items-center gap-4 hover:underline hover:underline-offset-4"
                    >
                      {icon}
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};
