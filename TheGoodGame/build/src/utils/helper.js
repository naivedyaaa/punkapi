export const filterData = (searchedKey, dataAPI) => {
    let filterData=dataAPI.filter((e) => {
        if (e.name.toLowerCase().includes(searchedKey.toLowerCase())) {
          return e;
        }
      })
    return filterData
};