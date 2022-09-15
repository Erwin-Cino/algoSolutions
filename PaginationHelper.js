// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const remainder = this.itemCount() % this.itemsPerPage;
  if (pageIndex >= this.pageCount() || pageIndex < 0) return -1
  if (pageIndex === this.pageCount() - 1) return remainder;
  return this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (this.collection.length === 0) return -1
  if (itemIndex < 0 || itemIndex > this.itemCount()) return -1;
  if (itemIndex <= this.itemsPerPage) return 0;
  return Math.floor(itemIndex/this.itemsPerPage);
}

//test cases
collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
helper = new PaginationHelper(collection, 10)

Test.expect(helper.pageCount() == 3, 'pageCount is returning incorrect value.')

Test.expect(helper.pageItemCount(1) == 10, 'pageItemCount is returning incorrect value.')
Test.expect(helper.pageItemCount(2) == 4, 'pageItemCount is returning incorrect value')
Test.expect(helper.pageItemCount(3) == -1, 'pageItemCount is returning incorrect value')
Test.expect(helper.pageIndex(40) == -1, 'pageIndex returned incorrect value when provided a itemIndex argument that was out of range')

Test.expect(helper.pageIndex(22) == 2, 'pageIndex returned incorrect value')
Test.expect(helper.pageIndex(3) == 0, 'pageIndex returned incorrect value')
Test.expect(helper.pageIndex(0) == 0, 'pageIndex returned incorrect value. pageIndex(0) should return 0')
Test.expect(helper.pageIndex(-1) == -1, 'pageIndex returned incorrect value when provided a itemIndex argument that was out of range. pageIndex(-1) should return -1')
Test.expect(helper.pageIndex(-23) == -1, 'pageIndex returned incorrect value when provided a item_index argument that was out of range. pageIndex(-23) shoudl return -1')
Test.expect(helper.pageIndex(-15) == -1, 'pageIndex returned incorrect value when provided a item_index argument that was out of range.')


Test.expect(helper.itemCount() == 24, 'itemCount returned incorrect value')

helper = new PaginationHelper([], 10)
Test.assertEquals(helper.pageIndex(0), -1, 'pageIndex(0) called when there was an empty collection')
