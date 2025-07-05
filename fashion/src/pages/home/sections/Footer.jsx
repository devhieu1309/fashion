export default function Footer(){
    return (
        <div className="flex flex-col">
           <div className="flex-1 flex bg-[#0AACDD] justify-between px-40 py-10">
            <div className="">
                <h3 className="text-white text-[18px] font-bold font-[family-name:var(--font-roboto)] py-2">Liên hệ</h3>
                <ul className="space-y-2">
                    <li>&rsaquo; Địa chỉ: Quận Hoàng Mai, TP.Hà Nội</li>
                    <li>&rsaquo; Hotline: 09999999999</li>
                    <li>&rsaquo; Email: pmhieudev1309@gmail.com</li>
                    <li className="flex space-x-2">
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-facebook-50.png" alt="" />
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-instagram-50.png" alt="" />
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-tiktok-50.png" alt="" />
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-mail-50.png" alt="" />
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-telephone-50.png" alt="" />
                        <img className="text-white h-[22px] w-[22px]" src="/images/icons8-youtube-logo-50.png" alt="" />
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-white text-[18px] font-bold font-[family-name:var(--font-roboto)] py-2">Chính sách chung</h3>
                <ul className="space-y-2">
                    <li>&rsaquo; Chính sách, quy định chung</li>
                    <li>&rsaquo; Chính sách vận chuyển</li>
                    <li>&rsaquo; Chính sách bảo hành</li>
                    <li>&rsaquo; Chính sách đổi trả và hoàn tiền</li>
                    <li>&rsaquo; Chính sách cho doanh nghiệp</li>
                    <li>&rsaquo; Chính sách chính hãng</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-white text-[18px] font-bold font-[family-name:var(--font-roboto)] py-2">Hướng dẫn dịch vụ</h3>
                <ul className="space-y-2">
                    <li>&rsaquo; Hướng dẫn mua hàng trực tuyến</li>
                    <li>&rsaquo; Hướng dẫn thanhh toán</li>
                    <li>&rsaquo; Hướng dẫn mua hàng trả góp</li>
                    <li>&rsaquo; In hóa đơn điện tử</li>
                    <li>&rsaquo; Gửi yêu cầu bảo hành</li>
                    <li>&rsaquo; Góp ý, khiếu nại    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-white text-[18px] font-bold font-[family-name:var(--font-roboto)] py-2">Giờ làm việc</h3>
                <ul className="space-y-2">
                    <li>&rsaquo; Gọi mua: 1800.1111 (7:30 - 22:00)</li>
                    <li>&rsaquo; Kỹ thuật: 1800.2222 (7:30 - 22:00)</li>
                    <li>&rsaquo; Kỹ thuật: 1800.2222 (7:30 - 22:00)</li>
                    <li>&rsaquo; Bảo hành: 1.800.3333 (8:00 - 21:30)</li>
                    <li>
                         <img className="text-white h-[25px]" src="/images/payment-2.png" alt="" />
                    </li>
                </ul>
            </div>
           </div>
           <div className="h-12 bg-[#0A91CC] flex items-center justify-center text-[14.4px]">Copyright 2025 @ Fashion.</div>
        </div>
    );
}