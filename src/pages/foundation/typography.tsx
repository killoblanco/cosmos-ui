import type { FC } from "react";

export const TypographyPage: FC = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-title-large">Typography</h1>
      <div className="flex flex-col gap-4">
        <h4 className="text-title-large">Title Large</h4>
        <h4 className="text-title-1">Title One</h4>
        <h4 className="text-title-2">Title Two</h4>
        <h4 className="text-title-3">Title Three</h4>
        <h4 className="text-headline">Headline</h4>
        <p className="text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          corporis voluptatibus doloremque explicabo quasi. Quos, cumque, dolor
          eius harum aut beatae voluptatibus nemo velit unde tenetur odit minima
          fuga sed?
        </p>
        <p className="text-callout">Callout</p>
        <p className="text-subheadline">Subheadline</p>
        <p className="text-footnote">Footnote</p>
        <p className="text-caption-1">Caption 1</p>
        <p className="text-caption-2">Caption 2</p>
      </div>
    </main>
  );
};
