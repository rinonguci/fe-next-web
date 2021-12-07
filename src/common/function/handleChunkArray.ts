function handleChunkArray<T extends any>(
  inputArray: Array<T> | undefined,
  perChunk: number
): Array<T[]> {
  var result =
    inputArray &&
    inputArray.reduce((resultArray: any, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
  return result;
}

export default handleChunkArray;
