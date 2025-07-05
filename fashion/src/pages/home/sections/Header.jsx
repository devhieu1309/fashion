export default function Header(){
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto bg-[#0AACDD] px-40 flex p-1">
                <div className="">
                    <h3 className="font-[family-name:var(--font-roboto)] uppercase text-[12px] text-white">Chào mừng bạn đến với mẫu website thời trang 9 tại AZNET</h3>
                </div>
                <div className="flex-1"></div>
                <div className="">
                    <ul className="flex space-x-4 font-[family-name:var(--font-roboto)] text-[12.8px] text-white">
                        <li className="pr-4 border-r border-gray-200">Về chúng tôi</li>
                        <li className="pr-4 border-r border-gray-200">Tin tức</li>
                        <li className="pr-4 border-r border-gray-200">Khuyến mãi</li>
                        <li className="pr-4 border-r border-gray-200">Tuyển dụng</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto bg-white px-40 flex items-center">
                <div className="px-2 py-3">
                    <img className="text-white w-[217px] h-[57px]" src="/images/logo.png" alt="" />
                </div>
                <div className="flex-1 pl-5">
                    <form action="">
                        <div className="flex w-[70%]">
                            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="flex-1 border text-black text-[13.2px] border-[#0AACDD] p-2 outline-0 rounded-tl-sm rounded-bl-sm"/>
                            <button type="submit" className="w-[15%] bg-[#0AACDD] rounded-tr-sm rounded-br-sm text-white text-[13.2px]">Tìm Kiếm</button>
                        </div>         
                    </form>
                </div>
                <div className="w-56">
                    <ul>
                        <li className="pl-4 border-l border-gray-300">
                            <a href="" className="flex bg-[#0AACDD] border py-1 rounded-2xl w-[60%] justify-center items-center">
                                <span className="pr-2 uppercase font-[family-name:var(--font-roboto)] text-[12.8px] font-medium">Giỏ hàng</span>
                                <img className="text-white h-[25px] w-[25px]" src="/images/icons8-cart-30.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto bg-[#0AACDD] px-40 flex items-center py-2">
                <div className="flex-1">
                    <ul className="flex justify-between font-[family-name:var(--font-roboto)] text-[16px] uppercase text-white">
                        <li className="">Trang chủ</li>
                        <li>Cửa hàng</li>
                        <li>Áo</li>
                        <li>Quần</li>
                        <li>Phụ Kiện</li>
                        <li>Chọn size</li>
                        <li>Hệ thống của hàng fashion</li>
                    </ul>
                </div>
                <div className="w-14"></div>
                <div className="w-56 flex">
                    <div className="text-white border-2 border-white rounded-full relative left-6 bg-[#0AACDD]">
                        <img className="text-white h-[33px] w-[33px] p-2" src="/images/icons8-telephone-50.png" alt="" />
                    </div>
                    <div className="border-2 py-1 px-6 rounded-2xl">098.7654.321</div>
                </div>
            </div>
        </div>
        
        
    );
}