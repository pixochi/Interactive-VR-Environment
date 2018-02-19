
// rotation format - 'x y z' -> '0 0 0'
export const transformByValue = (currentTransform, transformBy) => {
  if(typeof currentTransform === 'object') {
    currentTransform = objectToAframeString(currentTransform);
  }

  if(transformBy === 'object') {
    transformBy = objectToAframeString(transformBy);
  }

  const currentDegrees = currentTransform.split(' ');
  const transform = transformBy.split(' ');
  const result = currentDegrees.map((axis, i) => Number(axis) + Number(transform[i])).join(' ');

  return result;
}

const objectToAframeString = (obj) => {
  return `${obj.x} ${obj.y} ${obj.z}`;
}