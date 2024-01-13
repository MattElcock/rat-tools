import { PageSection } from "@/layouts/PageSection";
import { List } from "./components/List";
import { Pet } from "@/types";

const PetMenu = () => {
  const data: Pet[] = [
    { id: "1", name: "Biscoff" },
    { id: "2", name: "Pan" },
  ];

  return (
    <PageSection title="Your Mischief">
      <List pets={data} />
    </PageSection>
  );
};

export { PetMenu };
