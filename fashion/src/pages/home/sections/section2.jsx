import ProductImageGallery from "@/components/ProductImageGallery";

export default function Section2() {
    const images = [
        'IMG_0963-247x296.jpg',
        'IMG_0880-100x100.jpg',
        'IMG_1035-100x100.jpg',
        'Somi_den-054-100x100.jpg',
    ];

    return (
        <div className="bg-white container mx-auto px-40 flex p-1">
            <div className="w-[30%] flex flex-col p-4">
                <div className="bg-[#00b8ec] text-white text-[16px] uppercase py-2 px-1 inline-block relative custom-clip-1">Danh mục sản phẩm</div>
                <div className="grid grid-cols-2 pt-2">
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/ao_polo-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Áo Polo Nam</h3>
                    </div>
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/ao_polo-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Mũ</h3>
                    </div>
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/mu-cate-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Áo Sơ Mi</h3>
                    </div>
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/quan_kk_tui_cheo_ceff_cm-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Quần Kaki</h3>
                    </div>
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/ao-so-mi-1-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Áo Sơ Mi</h3>
                    </div>
                    <div className="w-[160px] h-[240px] bg-white my-1 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                        <img className="text-white" src="/images/quan_kk_tui_cheo_ceff_cm-247x296.png" alt="" />
                        <h3 className="text-center font-[family-name:var(--font-roboto)] text-[16px] uppercase text-[#0AACDD] font-bold">Quần Kaki</h3>
                    </div>
                </div>
                <div className="bg-[url(/images/16327287814b5037b6d592f15dbe1d2c4a770b94c1.webp)] h-[380px] w-[325px] bg-no-repeat bg-center bg-cover">1</div>
            </div>
            <div className="flex-1 flex flex-col p-4">
                <div className="flex items-center justify-between pr-2 mb-1">
                    <div className="bg-[#00b8ec] text-white text-[16px] w-[300px] uppercase py-2 px-1 inline-block relative custom-clip-2">Sản phẩm quần Kaki</div>
                    <div className="relative -bottom-2 text-[16px] font-semibold font-[family-name:var(--font-roboto)] text-[#0AACDD]">Xem thêm &rsaquo;</div>
                </div>
                <div className="grid grid-cols-4">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
                            return (
                                <div className="p-2" key={index}>
                                    <ProductImageGallery images={images} />
                                    <div className="text-[15px] font-[family-name:var(--font-roboto)] text-black">Áo sơ mi nam dài tay Cafe-Dris khử mùi - Đen</div>
                                    <div className="flex justify-between pr-10">
                                        <span className="text-[14.4px] text-gray-400"><del>469.000đ</del></span>
                                        <span className="text-[20px] text-[#0AACDD] font-bold">390.000đ</span>
                                    </div>
                                    <div className="relative">
                                        <button className="border border-[#0AACDD] w-[100%] rounded-md text-[16px] py-1 text-[#0AACDD] uppercase">Mua ngay</button>
                                        <span className="text-orange-400 absolute right-1 top-1 text[8px]">-17%</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}