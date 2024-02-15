import { v4 } from "uuid";
import { Group } from "../../schema/objects/Group";
import pg from "../../../../../../db/client";

const createGroupResolver = async () => {
  const uuid = v4();

  await pg("groups").insert({ id: uuid });

  return new Group(uuid, []);
};

export default createGroupResolver;
