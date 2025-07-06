import Banner from '@/components/Banner';

export default function Section1() {
    return (
        <div className="w-full h-[420px] flex p-3 pb-8 bg-white shadow-[0_6px_12px_-2px_rgba(0,0,0,0.2)] mt-[155px]">
            {/* <div className="h-full flex-1 bg-[url(/images/banner-1.jpg)] w-full bg-[length:auto_394px] bg-no-repeat bg-center rounded-xl"></div> */}
            <div>
                <Banner />
            </div>
            <div className="w-5"></div>
            <div className="w-[400px] flex flex-col">
                <div className="bg-[url(/images/imager_47835.jpg)] h-[45%] w-full bg-no-repeat bg-center rounded-xl bg-cover"></div>
                <div className="h-[2%]"></div>
                <div className="flex-1 bg-[url(/images/fashion-banner-design-with-outfit-camera-case-vector-31175490.jpg)] h-full w-full bg-cover bg-no-repeat bg-center rounded-xl"></div>
            </div>
        </div>
    );
}