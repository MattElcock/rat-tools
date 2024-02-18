import pg from "../../../../../../db/client";
import { Fur } from "../../schema/enums/Fur";
import { Sex } from "../../schema/enums/Sex";
import { Pet } from "../../schema/objects/Pet";

export type UpdatePetResolverArgs = {
  id: string;
  name: string;
  sex: Sex;
  dateOfBirth: string;
  fur: Fur[];
};

const updatePetResolver = async (
  _parent: any,
  args: UpdatePetResolverArgs
): Promise<Pet> => {
  try {
    const updatedPet = await pg("pets")
      .update({
        name: args.name,
        sex: args.sex,
        date_of_birth: args.dateOfBirth,
        fur: args.fur,
      })
      .where({ id: args.id })
      .returning("*");

    return new Pet(
      updatedPet[0].id,
      updatedPet[0].group_id,
      updatedPet[0].species,
      updatedPet[0].name,
      updatedPet[0].date_of_birth,
      updatedPet[0].sex,
      updatedPet[0].fur
    );
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in updatePetResolver:", error);
    throw error;
  }
};

export default updatePetResolver;
