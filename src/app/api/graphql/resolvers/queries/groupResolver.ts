import pg from "../../../../../../db/client";
import { Group } from "../../schema/objects/Group";
import { Pet } from "../../schema/objects/Pet";
import getWeightsByPetIdResolver from "./getWeightsByPetIdResolver";

const groupResolver = async (_parent: any, _args: any) => {
  try {
    const groupsFromDb = await pg("groups").select("*");

    const groups: Group[] = await Promise.all(
      groupsFromDb.map(async (group: any) => {
        const petsFromDb = await pg("pets")
          .select("*")
          .where({ group_id: group.id });

        const pets: Pet[] = await Promise.all(
          petsFromDb.map(async (petDb: any): Promise<Pet> => {
            const weights = await getWeightsByPetIdResolver(null, {
              petId: petDb.id,
            });

            return new Pet(
              petDb.id,
              petDb.group_id,
              petDb.species,
              petDb.name,
              petDb.date_of_birth,
              petDb.sex,
              petDb.fur,
              weights
            );
          })
        );

        return new Group(group.id, pets);
      })
    );

    return groups;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in groupResolver:", error);
    throw error;
  }
};

export default groupResolver;
