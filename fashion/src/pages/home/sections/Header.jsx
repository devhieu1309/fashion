export default function Header() {
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
                            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="flex-1 border text-black text-[13.2px] border-[#0AACDD] p-2 outline-0 rounded-tl-sm rounded-bl-sm" />
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
            <div className="container mx-auto bg-[#0AACDD] px-40 flex items-center">
                <div className="flex-1">
                    <ul className="flex justify-between font-[family-name:var(--font-roboto)] text-[16px] text-white cursor-pointer">
                        <li className="uppercase py-3">
                            Trang chủ
                        </li>
                        <li className="uppercase group py-3">
                            Cửa hàng
                            <div className="hidden group-hover:block shadow-[0_2px_10px_rgba(0,0,0,0.15)] bg-white fixed top-[156px] rounded-md left-0 right-0 w-[1220px] mx-auto py-4 px-2 pb-6">
                                <h2 className="text-[#0AACDD] font-bold text-[26px] pb-2">Thực phẩm chức năng</h2>
                                <div className="grid grid-cols-8 justify-items-center pb-5">
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/ao_polo-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Áo Polo Nam</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/ao-so-mi-1-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Áo sơ mi</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/mu-cate-247x296.png" alt="" />

                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Mũ</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/quan_kk_tui_cheo_ceff_cm-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Quần Kaki</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/quan_lot-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Quần lót</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/do_the_thao_-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Quần thể thao</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/tui-xach-247x296.jpg" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Túi xách</h3>
                                    </div>
                                    <div className="w-[140px] h-[200px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-2xl">
                                        <img className="text-white" src="/images/ao_thun-247x296.png" alt="" />
                                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] text-[#0AACDD] font-bold">Áo thun</h3>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 space-x-4">
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Săn deal Now</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Quần áo mùa đông</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Quần áo mùa hè</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Phụ kiện thời trang</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Săn deal Now</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0AACDD] font-bold text-[14px] cursor-default">Săn deal Now</h3>
                                        <ul className="text-black text-[13px] space-y-1">
                                            <li className="border-b-1 border-gray-200 py-1">Áo polo nam</li>
                                            <li className="border-b-1 border-gray-200 py-1">Quần Kaki</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo Hoodie</li>
                                            <li className="border-b-1 border-gray-200 py-1">Áo thể thao</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className="uppercase py-3">Áo</li>
                        <li className="uppercase py-3">Quần</li>
                        <li className="uppercase py-3">Phụ Kiện</li>
                        <li className="uppercase py-3">Chọn size</li>
                        <li className="uppercase py-3">Hệ thống của hàng fashion</li>
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