const isInArrayList = (item, arrayList) => {
  return arrayList.find((arrayItem) => arrayItem._id === item._id)
    ? true
    : false;
};

export { isInArrayList };
