export function filterData(searchText, resturants) {
  const filterValue = resturants.filter((value) =>
    value?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterValue;
}
