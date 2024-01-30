import { v4 } from "uuid";
import { Group } from "../../schema/objects/Group";

const createGroupResolver = (_parent: any, _args: any) => {
  const uuid = v4();

  return new Group(uuid, []);
};

export default createGroupResolver;
