import { v4 } from "uuid";
import pg from "../../../../../../db/client";
import { Fur } from "../../schema/enums/Fur";
import { Metric } from "../../schema/enums/Metric";
import { Sex } from "../../schema/enums/Sex";
import { Species } from "../../schema/enums/Species";
import { Pet } from "../../schema/objects/Pet";
import { Weight } from "../../schema/objects/Weight";
import createGroupResolver from "./createGroupResolver";
import createWeightResolver from "./createWeightResolver";
import groupResolver from "../queries/groupResolver";

export type CreatePetResolverArgs = {
  name: string;
  species: Species;
  sex: Sex;
  dateOfBirth: string;
  fur: Fur[];
  weightValue: number;
  weightDateTaken: string;
  weightMetric: Metric;
};

const createPetResolver = async (
  _parent: any,
  args: CreatePetResolverArgs
): Promise<Pet> => {
  try {
    const weightId = v4();
    const petId = v4();
    const group = await groupResolver(null, null);

    let groupId;
    if (!group || group.length === 0) {
      const { id } = await createGroupResolver();
      groupId = id;
    } else {
      groupId = group[0].id;
    }

    const createdWeight = new Weight(
      weightId,
      petId,
      args.weightMetric,
      args.weightValue,
      args.weightDateTaken
    );

    const createdPet = new Pet(
      petId,
      groupId,
      args.species,
      args.name,
      args.dateOfBirth,
      args.sex,
      args.fur,
      [createdWeight]
    );

    await pg("pets").insert({
      id: createdPet.id,
      group_id: createdPet.groupId,
      name: createdPet.name,
      sex: createdPet.sex,
      date_of_birth: createdPet.dateOfBirth,
      fur: createdPet.fur,
      species: createdPet.species,
    });

    await createWeightResolver(null, createdWeight);

    return createdPet;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in createPetResolver:", error);
    throw error;
  }
};

export default createPetResolver;
