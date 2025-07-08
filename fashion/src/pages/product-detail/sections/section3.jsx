export default function Section3() {
    return (
        <div className="bg-red-300 container px-40 mx-auto flex">
            <div className="w-1/2">
                <h2>Đánh giá sản phẩm</h2>
                <h3>Đánh giá “Áo sơ mi nam dài tay Café-DriS khử mùi – Xanh nhạt” </h3>
                <div className="flex pb-5">
                    <div className="flex px-2 border-r">
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                    </div>
                    <div className="flex px-2 border-r">
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                    </div>
                    <div className="flex px-2 border-r">
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                    </div>
                    <div className="flex px-2 border-r">
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                    </div>
                    <div className="flex px-2 border-r">
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                    </div>
                </div>
                <textarea className="bg-amber-200 outline-1 w-[445px] rounded-sm h-20" name="" id=""></textarea>
                <div className="flex space-x-10 pb-4">
                    <div>
                        <h4>Tên *</h4>
                        <input type="text" className="border py-2 rounded-sm"/>
                    </div>
                    <div>
                        <h4>Email *</h4>
                        <input type="text" className="border py-2 rounded-sm"/>
                    </div>
                </div>
                <div className="flex items-start space-x-2 pb-5">
                    <input type="checkbox" name="" id="" className="w-5 h-5"/>
                    <p className="font-bold">Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</p>
                </div>
                <button className="bg-blue-500 text-white uppercase font-bold py-2 px-4 rounded-sm">Gửi đi</button>
                <p className="py-5">
                    Chưa có đánh giá nào
                </p>
            </div>
            <div className="flex-1">
                <h2>Bình luận trên facebook</h2>
                <p>Hỗ trợ cài đặt bình luận facebook vào website nếu khách hàng mong muốn</p>
            </div>
        </div>
    );
}