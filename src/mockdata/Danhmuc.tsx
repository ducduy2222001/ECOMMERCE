const manstyle = ["ÁO NAM", "QUẦN NAM", "GIÀY NAM"];
const womanstyle = ["ÁO NŨ", "QUẦN NỮ", "GIÀY NỮ"];
const accessory = ["PHỤ KIỆN NAM", "PHỤ KIỆN NỮ"];
const bag = ["TÚI SÁCH NAM", "TÚI SÁCH NỮ"];
const arr = [manstyle, womanstyle, accessory, bag];
const danhmuc = ["THỜI TRANG NAM", "THỜI TRANG NỮ", "PHỤ KIỆN", "TÚI XÁCH"];

let menuDanhMuc: {
  key: number;
  label: string;
  children: { key: string; label: string }[];
}[] = [];

danhmuc.map((value: string, index: number, array: string[]) => {
  menuDanhMuc.push({
    key: index,
    label: value,
    children: arr[index].map((value1, index1) => {
      return {
        key: `${Math.random()} + ${index1}`,
        label: value1,
      };
    }),
  });
});

export default menuDanhMuc;
