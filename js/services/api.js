async function loadData() {

  const response = await fetch('./data/dataBahanAjar.json')

  return await response.json()

}