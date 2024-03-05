 class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);

console.log(helper.pageCount());

// assert.strictEqual(helper.pageCount(), 3, "pageCount()");
// assert.strictEqual(helper.itemCount(), 24, "itemCount()");

// assert.strictEqual(helper.pageItemCount(1), 10, "pageItemCount(1)");
// assert.strictEqual(helper.pageItemCount(2), 4, "pageItemCount(2)");
// assert.strictEqual(helper.pageItemCount(3), -1, "pageItemCount(3)");

// assert.strictEqual(helper.pageIndex(40), -1, "pageIndex(40)");
// assert.strictEqual(helper.pageIndex(22), 2, "pageIndex(22)");
// assert.strictEqual(helper.pageIndex(3), 0, "pageIndex(3)");
// assert.strictEqual(helper.pageIndex(0), 0, "pageIndex(0)");
// assert.strictEqual(helper.pageIndex(-1), -1, "pageIndex(-1)");
// assert.strictEqual(helper.pageIndex(-23), -1, "pageIndex(-23)");
// assert.strictEqual(helper.pageIndex(-15), -1, "pageIndex(-15)");
