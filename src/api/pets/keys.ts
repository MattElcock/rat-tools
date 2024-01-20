export const all = ["pets"];
export const detail = (id: string) => [...all, `pet-${id}`];
