/* eslint-disable arrow-parens */
// eslint-disable-next-line arrow-parens
const arraySumFromRight = arr => {
  const arrayRHandSum = [];
  arr.reduceRight((acc, curr) => {
    const rightTotal = acc + curr;
    arrayRHandSum.push(rightTotal);

    return rightTotal;
  });
  return arrayRHandSum;
};

const arraySumFromLeft = arr => {
  const arrayLeftHandSum = [];
  arr.reduce((acc, curr) => {
    const leftTotal = acc + curr;
    arrayLeftHandSum.push(leftTotal);

    return leftTotal;
  });
  return arrayLeftHandSum;
};

const arrayCenterIndex = (arrayRight, arrayLeft, originalArray) => {
  let result = null;

  arrayRight.forEach(elem => {
    const rightIndex = arrayRight.indexOf(elem);
    // eslint-disable-next-line array-callback-return
    arrayLeft.find(item => {
      const leftIndex = arrayLeft.indexOf(item);
      if (
        item === elem &&
        rightIndex + leftIndex + 2 === originalArray.length - 1
      ) {
        result = leftIndex + 1;
      }
    });
  });
  return result;
};

module.exports = {
  arraySumFromRight,
  arraySumFromLeft,
  arrayCenterIndex,
};
