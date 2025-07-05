export default function Section1() {
    return (
        <div className="bg-[#F2F1F6] container mx-auto px-40 pb-5 mt-[160px] py-5">
            <div className="flex">
                <div className="text-black bg-white p-5 h-fit">
                    <table>
                        <thead className="">
                            <tr className="text-left border-b-3 border-gray-300">
                                <th className="p-2">Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="space-x-5  border-b-1 border-gray-300">
                                <td className="flex p-4">
                                    <img src="/images/icons8-trash.svg" alt="" />
                                    <div className="flex">
                                        <div className="w-15 h-15">
                                            <img src="/images/IMG_0880-247x296.jpg" alt="" />
                                        </div>
                                        <div className="p-2">
                                            <div className="font-[family-name:var(--font-roboto)] text-[14.4px] text-[#0A0A0A]">Áo sơ mi nam dài tay Cafe-Dris khử mùi - Đen</div>
                                            <div className="uppercase text-[12.25px] text-[#666666] font-[family-name:var(--font-roboto)]">Màu sắc: Trắng</div>
                                            <div className="uppercase text-[12.25px] text-[#666666] font-[family-name:var(--font-roboto)]">Size: 2xl</div>
                                        </div>
                                    </div>
                                </td>
                                <td>390.000đ</td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2 border-1 border-gray-400">
                                        <button
                                            type="button"
                                            className="text-gray-700 rounded w-5"
                                        >
                                            -
                                        </button>
                                        <div className="flex items-center justify-center flex-1">
                                            <input
                                                type="number"
                                                value="1"
                                                className="relative left-[6px] outline-none text-center w-8 leading-8 appearance-none"
                                                readOnly
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="text-gray-700 rounded w-5"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>390.000đ</td>
                            </tr>
                            <tr className="space-x-5  border-b-1 border-gray-300">
                                <td className="flex p-4">
                                    <img src="/images/icons8-trash.svg" alt="" />
                                    <div className="flex">
                                        <div className="w-15 h-15">
                                            <img src="/images/IMG_0880-247x296.jpg" alt="" />
                                        </div>
                                        <div className="p-2">
                                            <div className="font-[family-name:var(--font-roboto)] text-[14.4px] text-[#0A0A0A]">Áo sơ mi nam dài tay Cafe-Dris khử mùi - Đen</div>
                                            <div className="uppercase text-[12.25px] text-[#666666] font-[family-name:var(--font-roboto)]">Màu sắc: Trắng</div>
                                            <div className="uppercase text-[12.25px] text-[#666666] font-[family-name:var(--font-roboto)]">Size: 2xl</div>
                                        </div>
                                    </div>
                                </td>
                                <td>390.000đ</td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center gap-2 border-1 border-gray-400">
                                        <button
                                            type="button"
                                            className="text-gray-700 rounded w-5"
                                        >
                                            -
                                        </button>
                                        <div className="flex items-center justify-center flex-1">
                                            <input
                                                type="number"
                                                value="1"
                                                className="relative left-[6px] outline-none text-center w-8 leading-8 appearance-none"
                                                readOnly
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="text-gray-700 rounded w-5"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td>390.000đ</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex text-white uppercase font-bold text-[14.4px] space-x-3 pt-4">
                        <div className="bg-[#2058A1] p-2 rounded-sm">Tiếp tục xem sản phẩm</div>
                        <div className="bg-[#E09766] p-2 rounded-sm">Cập nhật giỏ hàng</div>
                    </div>
                </div>
                <div className="w-5 bg-[#F2F1F6]"></div>
                <div className="text-black bg-white p-5 flex-1">
                    <table>
                        <thead className="">
                            <tr className="text-left border-b-3 border-gray-300">
                                <th className="p-2 uppercase" colSpan={4}>Cột giỏ hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="space-x-5 border-b-1 border-gray-300 py-2">
                                <td className="flex p-4" colSpan={2}>
                                   Tạm tính
                                </td>
                                <td className="text-right font-semibold" colSpan={2}>390.000đ</td>
                            </tr>
                            <tr className="space-x-5 border-b-1 border-gray-300 text-gray-500">
                              <td className="p-2" colSpan={1}>Giao hàng</td>
                              <td className="text-right text-[13px] space-y-2 py-3" colSpan={3}>
                                <div>Đồng giá: <span className="font-semibold">30.000đ</span></div>
                                <div>Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh toán</div>
                                <div>Tính phí giao hàng</div>
                              </td>
                            </tr>
                             <tr className="space-x-5 border-b-1 border-gray-300 py-2">
                                <td className="flex p-4" colSpan={2}>
                                   Tổng
                                </td>
                                <td className="text-right font-bold" colSpan={2}>390.000đ</td>
                            </tr>        
                        </tbody>
                    </table>
                    <button className="bg-[#CC5200] p-2 rounded-sm w-full my-5 uppercase text-white">Tiến hành thanh toán</button>
                    <div className="flex text-2xl space-x-2 items-center">
                        <img src="/images/icons8-sale-30.png" alt="" />
                        <div className="text-[#228BE6] text-[18px]">Phiêu ưu đãi</div>
                    </div>
                    <div className="py-4">
                        <input type="text" className="border-1 border-gray-300 rounded-sm w-full p-2 outline-none" name="" id="" placeholder="Mã ưu đãi"/>
                    </div>
                    <button className="bg-[#1A4681] p-2 rounded-sm w-full text-white">Áp dụng</button>
                </div>
            </div>
        </div>
    );
}