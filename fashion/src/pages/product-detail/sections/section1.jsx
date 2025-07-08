import ProductDetail from "@/components/ProductDetail";

export default function Section1() {
    const images = [
        'IMG_1077.jpg',
        'IMG_1035.jpg',
        'IMG_1059.jpg',
        'IMG_1067.jpg',
        '2.jpg',
        // 'IMG_1077-100x100.jpg',
        // 'IMG_1035-100x100.jpg',
        // 'IMG_1059-100x100.jpg',
        // 'IMG_1067-100x100.jpg',
        // '2-100x100.jpg',
    ];
    return (
        <div className="mt-[155px]">
            <div className="bg-gray-300 container px-40 mx-auto">
                <nav className="text-sm py-3">
                    <ol className="list-reset flex text-[#466082] text-[14px]">
                        <li>
                            <a href="/" className="">Trang chủ</a>
                        </li>
                        <li><span className="mx-2">»</span></li>
                        <li>
                            <a href="/ao" className="">Áo</a>
                        </li>
                        <li><span className="mx-2">»</span></li>
                        <li className="font-medium">Áo sơ mi</li>
                    </ol>
                </nav>
            </div>
            <div className="bg-white container px-40 mx-auto flex py-3">
                <ProductDetail images={images} />
                {/* <div className="w-1/2 flex">
                    <div className="w-2/10 space-y-3">
                        <div className="">
                            <img className="border border-black" src="/images/IMG_1077-100x100.jpg" alt="" />
                        </div> 
                        <div className="">
                            <img className="border border-black" src="/images/IMG_1035-100x100.jpg" alt="" />
                        </div> 
                        <div className="">
                            <img className="border border-black" src="/images/IMG_1059-100x100.jpg" alt="" />
                        </div> 
                        <div className="">
                            <img className="border border-black" src="/images/IMG_1067-100x100.jpg" alt="" />
                        </div> 
                        <div className="">
                            <img className="border border-black" src="/images/2-100x100.jpg" alt="" />
                        </div> 
                    </div>
                    <div className="flex-1">
                        <img src="/images/IMG_1077.jpg" alt="" />
                    </div>
                </div> */}
                <div className="flex-1 px-5 py-2 space-y-3">
                    <h2 className="font-[family-name:var(--font-roboto)] text-[25.6px] text-[#0AACDD] pb-2">Áo sơ mi nam dài tay Café-DriS khử mùi – Xanh nhạt</h2>
                    <div className="flex space-x-2 items-end">
                        <div className="font-[family-name:var(--font-roboto)] text-[#FF6600] text-[30px]  font-bold">390.000đ</div>
                        <span className="font-[family-name:var(--font-roboto)] text-black">Freeship cho đơn hàng từ 400.000đ</span>
                    </div>
                    <div className="text-black">Giá thị trường: 469.000đ - Tiết kiệm: 79.000đ <span className="text-[#FF6600]">(17%)</span></div>
                    <div>
                        <div className="text-black font-bold pb-2">Màu sắc:</div>
                        <div className="flex space-x-3">
                            <div className={`w-[50px] h-[50px] bg-[url(/images/IMG_0963-247x296.jpg)] bg-no-repeat bg-center bg-cover border border-black rounded-[3px] hover:border-amber-600`}></div>
                            <div className={`w-[50px] h-[50px] bg-[url(/images/IMG_0963-247x296.jpg)] bg-no-repeat bg-center bg-cover border border-black rounded-[3px] hover:border-amber-600`}></div>
                            <div className={`w-[50px] h-[50px] bg-[url(/images/IMG_0963-247x296.jpg)] bg-no-repeat bg-center bg-cover border border-black rounded-[3px] hover:border-amber-600`}></div>
                            <div className={`w-[50px] h-[50px] bg-[url(/images/IMG_0963-247x296.jpg)] bg-no-repeat bg-center bg-cover border border-black rounded-[3px] hover:border-amber-600`}></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-black font-bold pb-2">Size:</div>
                        <div className="flex space-x-4 text-black">
                            <div className={`w-auto h-auto px-2 py-1 border border-gray-400 rounded-[3px] text-center`}>2XL</div>
                            <div className={`w-auto h-auto px-2 py-1 border border-gray-400 rounded-[3px] text-center`}>L</div>
                            <div className={`w-auto h-auto px-2 py-1 border border-gray-400 rounded-[3px] text-center`}>M</div>
                            <div className={`w-auto h-auto px-2 py-1 border border-gray-400 rounded-[3px] text-center`}>S</div>
                            <div className={`w-auto h-auto px-2 py-1 border border-gray-400 rounded-[3px] text-center`}>XL</div>
                        </div>
                    </div>
                    <div className="flex space-x-10 py-2">
                        <div className="w-[250px] flex items-center gap-2">
                            <button
                                type="button"
                                className="rounded w-10 h-10 bg-[#088AB1] text-white text-2xl"
                            >
                                -
                            </button>
                            <div className="flex items-center justify-center flex-1">
                                <input
                                    type="number"
                                    value="1"
                                    className="relative outline-none font-bold text-black text-center w-32 h-10 leading-8 appearance-none rounded border border-[#088AB1]"
                                    readOnly
                                />
                            </div>
                            <button
                                type="button"
                                className="rounded w-10 h-10 bg-[#088AB1] text-white text-2xl"
                            >
                                +
                            </button>
                        </div>
                        <div className="flex-1">
                            <button className="bg-[#088AB1] py-2 px-4 text-white uppercase font-semibold rounded-sm">Thêm vào giỏ</button>
                        </div>
                    </div>
                    <div className="w-full bg-[#0A627C] rounded-sm py-1">
                        <button className="flex flex-col justify-center w-full">
                            <p className="text-center font-bold">Mua Ngay</p>
                            <p className="text-[13px]">Now Free 2H(Hà Nội - Hồ Chí Minh)</p>
                        </button>
                    </div>
                    <div className="border-t-1 pt-3 border-dashed text-black flex">
                        <div className="pr-3">
                            <img src="/images/deliverynowmyapham.png" alt="" className="w-[120px] h-auto" />
                        </div>
                        <p className="text-[14px]"><span className="font-bold">Giao hàng: </span>Miễn phí giao hàng toàn quốc với đơn hàng &gt; 400k hoặc mua 3 sản phẩm bất kỳ. <span className="font-bold">Giao hàng hỏa tốc</span> trong 2h miễn phí với đơn hàng &gt; 600k hoặc mua 5 sản phẩm bất kỳ.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}