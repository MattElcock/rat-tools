import pg from "../../../../../../db/client";
import { Group } from "../../schema/objects/Group";

const groupResolver = async () => {
  try {
    const groupsFromDb = await pg("groups").select("*");

    const groups: Group[] = groupsFromDb.map(
      async (group: any) => new Group(group.id)
    );

    return groups;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in groupResolver:", error);
    throw error;
  }
};

export default groupResolver;
