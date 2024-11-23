import { BaseLayout } from "@/layouts/base";
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
      </Route>
    </Routes>
  </BrowserRouter>
);
