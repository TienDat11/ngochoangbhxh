export interface NavigationLink {
  label: string;
  href: string;
}
export interface Service {
  title: string;
  image: string;
  items: readonly string[];
}

export interface Benefit {
  title: string;
  description: string;
}


export interface WorkflowStep {
  title: string;
  description: string;
  image: string;
}

export interface NewsItem {
  title: string;
  image: string;
}

export const COMPANY = {
  name: "CÔNG TY TNHH TƯ VẤN & DỊCH VỤ NGỌC HOÀNG",
  address: "Thôn Phước Khương, xã Bà Nà",
  city: "Thành phố Đà Nẵng",
  phone: "0963 548 333",
  phoneHref: "tel:+84963548333",
  hotline: "0963 548 333",
  hotlineHref: "tel:+84963548333",
  zaloHref: "https://zalo.me/0963548333",
  email: "",
} as const;

export const NAVIGATION: readonly NavigationLink[] = [
  { label: "Trang chủ", href: "#top" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Tư Vấn Lập Công Ty", href: "#thanh-lap" },
  { label: "Chia sẻ", href: "#co-hoi-moi" },
  { label: "Faqs", href: "#quy-trinh" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const SERVICES: readonly Service[] = [
  {
    title: "DỊCH VỤ PHÁP LÝ DOANH NGHIỆP",
    image: "/assets/company-300x300-57c03f3f.png",
    items: [
      "Tư vấn thủ tục thành lập doanh nghiệp trong nước",
      "Thành lập chi nhánh, văn phòng đại diện và đơn vị phụ thuộc",
      "Thay đổi giấy phép kinh doanh; tạm ngưng hoạt động hoặc giải thể doanh nghiệp",
    ],
  },
  {
    title: "DỊCH VỤ THUẾ",
    image: "/assets/tax-300x300-ca352e40.png",
    items: [
      "Kê khai thuế",
      "Rà soát tính tuân thủ pháp luật thuế",
      "Quyết toán thuế cuối năm cho doanh nghiệp",
      "Quyết toán thuế thu nhập cá nhân (TNCN)",
    ],
  },
  {
    title: "DỊCH VỤ KẾ TOÁN",
    image: "/assets/accounting-300x300-2b340415.png",
    items: [
      "Kế toán thuế trọn gói; tư vấn, thiết lập hệ thống kế toán",
      "Kiểm tra, hoàn thiện sổ sách kế toán; lập báo cáo tài chính cuối năm; đánh giá nhanh báo cáo tài chính, quyết toán cuối năm và lập hóa đơn GTGT",
    ],
  },
  {
    title: "DỊCH VỤ NHÂN SỰ",
    image: "/assets/employee-300x300-b0d92d6c.png",
    items: [
      "Dịch vụ nhân sự ban đầu, bao gồm bảo hiểm xã hội (BHXH)",
      "Dịch vụ tính lương",
      "Theo dõi trích nộp BHXH và thuế thu nhập cá nhân (TNCN)",
    ],
  },
  {
    title: "GIẢI PHÁP HỖ TRỢ DOANH NGHIỆP",
    image: "/assets/accounting-1-300x300-32be194d.png",
    items: [
      "Đại lý chữ ký số, hóa đơn điện tử và phần mềm kê khai BHXH (đối tác Viettel)",
      "Bảng hiệu và dấu tên",
      "Thành lập tài khoản ngân hàng số đẹp (đối tác Techcombank)",
    ],
  },
];

export const BENEFITS: readonly Benefit[] = [
  {
    title: "Phục vụ khách hàng bằng cả trái tim",
    description: "Tận tâm lắng nghe, đồng cảm và chủ động tư vấn để khách hàng an tâm.",
  },
  {
    title: "Kinh nghiệm chuyên môn",
    description: "Đội ngũ kế toán trưởng có trên 10 năm kinh nghiệm qua nhiều lĩnh vực doanh nghiệp.",
  },
  {
    title: "Chi phí hợp lý, trọn gói",
    description: "Chính sách giá phù hợp, trọn gói không phát sinh phụ phí ngoài sản phẩm cộng thêm.",
  },
  {
    title: "Trách nhiệm và tuân thủ",
    description: "Cam kết chịu trách nhiệm với sai sót do nhân sự Ngọc Hoàng và luôn tuân thủ pháp luật.",
  },
  {
    title: "Cập nhật quy định kịp thời",
    description: "Theo dõi sự thay đổi liên tục của quy định thuế và các quy định liên quan.",
  },
  {
    title: "Được đào tạo bài bản",
    description: "Đội ngũ được đào tạo về chuyên môn, kỹ năng và đạo đức nghề nghiệp.",
  },
  {
    title: "Đồng hành ổn định",
    description: "Trưởng bộ phận làm việc tại Ngọc Hoàng từ 5 năm trở lên.",
  },
];


export const WORKFLOW_STEPS: readonly WorkflowStep[] = [
  {
    title: "TIẾP NHẬN THÔNG TIN",
    description:
      "Lắng nghe nhu cầu, khó khăn và thông tin doanh nghiệp để xác định nội dung cần tư vấn.",
    image: "/assets/1-1-6ec7cdde.jpg",
  },
  {
    title: "TIẾN HÀNH XỬ LÝ",
    description:
      "Thực hiện công việc theo quy trình dịch vụ, tuân thủ quy định pháp luật liên quan.",
    image: "/assets/2-1-b317dd30.jpg",
  },
  {
    title: "CẬP NHẬT TIẾN ĐỘ",
    description:
      "Phản hồi tiến độ xử lý và chủ động trao đổi khi khách hàng cần được tư vấn.",
    image: "/assets/3-6f1fd527.jpg",
  },
  {
    title: "HOÀN TRẢ HỒ SƠ",
    description:
      "Bàn giao hồ sơ để khách hàng lưu trữ sau khi hoàn thành công việc.",
    image: "/assets/4-62414391.jpg",
  },
];

export const NEWS_ITEMS: readonly NewsItem[] = [
  {
    title: "Loại hình Công ty TNHH một thành viên",
    image: "/assets/tnhh-mtv-500x281-9062b88d.jpg",
  },
  {
    title: "Quy định về hưởng chế độ ốm đau đối với người lao động",
    image: "/assets/che-do-om-dau-500x281-49bc54a6.jpg",
  },
  {
    title: "Quy định về trợ cấp mất việc làm",
    image: "/assets/tro-cap-mat-viec-500x281-74822570.jpg",
  },
  {
    title: "Các khoản phụ cấp tính đóng và không tính đóng BHXH 2026",
    image: "/assets/pc-dong-bhxh-500x281-86540f91.jpg",
  },
];

export const FOOTER_LINK_GROUPS = [
  {
    title: "Dịch vụ",
    links: [
      ["Tư vấn thành lập doanh nghiệp", "#dich-vu"],
      ["Dịch vụ Thuế", "#dich-vu"],
      ["Dịch vụ Kế toán", "#dich-vu"],
      ["Dịch vụ Nhân sự", "#dich-vu"],
      ["Dịch vụ Pháp lý", "#dich-vu"],
    ],
  },
  {
    title: "Tin tức",
    links: [
      ["Câu hỏi thường gặp", "#quy-trinh"],
      ["Liên hệ Ngọc Hoàng", "#lien-he"],
    ],
  },
] as const;
