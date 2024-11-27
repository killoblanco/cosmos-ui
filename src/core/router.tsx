import { BaseLayout } from "@/layouts/base";
import { ButtonPage } from "@/pages/components/button";
import { ColorsPage } from "@/pages/foundation/colors";
import { TypographyPage } from "@/pages/foundation/typography";
import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="foundation">
          <Route path="colors" element={<ColorsPage />} />
          <Route path="typography" element={<TypographyPage />} />
        </Route>
        <Route path="components">
          <Route path="button" element={<ButtonPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
