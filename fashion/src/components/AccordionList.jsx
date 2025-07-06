"use client"
import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center space-x-2 py-3 text-left text-[17.6px] font-[family-name:var(--font-roboto)] text-[#0A0A0A] group-hover:text-[#9b4800]"
      >
        
        <svg
          className={`w-4 h-4 transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span>{title}</span>
      </button>
      {open && (
        <div className="p-4 text-gray-600 text-[15px] bg-[#EDF9F8]">
          {children}
        </div>
      )}
    </div>
  );
};


export default function AccordionList() {
  return (
    <div className="">
      <AccordionItem title="01. Liên hệ Chăm sóc khách hàng dễ dàng">
        Tổng đài AZnet với số Hotline 0905.539.666 (Để mua theme này) rất dễ tìm kiếm và xuất hiện khắp mọi nơi từ Website, Email, Fanpage, trong nhãn mác, bao bì đóng gói… Hơn thế nữa, đội ngũ chăm sóc khách hàng Fashion cam kết 100% cuộc gọi sẽ được trả lời, nếu như bị gọi nhỡ (do quá tải) sẽ được gọi lại ngay lập tức.Tổng đài CSKH Fashion sẽ thực sự là nơi luôn luôn nghe khi khách hàng gọi, theo đúng ý nghĩa của 1 tổng đài chăm sóc khách hàng thực sự.Ngoài ra khách hàng có thể liên hệ với Coolmate thông qua rất nhiều kênh khác nhau như: Email, Chat, Để lại đánh giá, bình luận ở các kênh mạng xã hội của Fashion.
      </AccordionItem>
      <AccordionItem title="02. Thời gian trao đổi với các bạn tổng đài viên là không hạn chế">
        Nội dung chi tiết cho mục 2...
      </AccordionItem>
      <AccordionItem title="03. Văn hóa say YES trong xử lý tình huống">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="04. Sự tương tác mang tính cá nhân hóa">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="05. CSKH hoạt động 13.5h/1 ngày và 7 ngày /1 tuần">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="06. Dịch vụ đổi trả miễn phí 60 ngày với BẤT KỲ LÝ DO NÀO">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="07. Dịch vụ đổi trả tận nơi của Fashion">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="08. Trả hàng hoàn tiền và có bưu tá lấy hàng tận nơi">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
      <AccordionItem title="09. Giao hàng nhanh không thêm phí">
        Nội dung chi tiết cho mục 3...
      </AccordionItem>
    </div>
  );
}