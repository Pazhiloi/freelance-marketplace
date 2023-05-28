export const writeClassForGrids = (id: number) => {
  if (id >= 0 && id <= 2) {
    return "item__a";
  } else if (id >= 3 && id <= 4) {
    return "item__b";
  } else if (id >= 5 && id <= 6) {
    return "item__c";
  }
};
