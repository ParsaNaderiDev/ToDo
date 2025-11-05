import Image from "next/image";

import Spline from "@splinetool/react-spline/next";
import Robo_Footer from "./Robo_Footer";


export default function Robot() {
    return (
        <>
            <Spline scene="https://prod.spline.design/y59lqlb2dbafZbBu/scene.splinecode" />

            <div className="Rubikamp-Logo absolute top-0 flex gap-48 m-2">
                <div className="Rubikamp flex gap-1.5">
                    <div className="Image">
                        <Image className="rounded-full w-8" src={"/Rubikamp.jpg"} alt={"Rubikamp-Logo"} width={100} height={100} />
                    </div>

                    <div className="Text flex items-center">
                        <a className="text-white font-light text-[18px] hover:underline" 
                        href="https://rubikamp.org" target="blank">Rubikamp</a>
                    </div>
                </div>

                <div className="ParsaNaderi flex gap-1.5">
                    <div className="Image">
                        <Image className="rounded-full w-8" src={"/ParsaNaderi.jpg"} alt={"ParsaNaderi's Image"} width={100} height={100} />
                    </div>

                    <div className="Text flex items-center">
                        <a className="text-white font-light text-[18px] hover:underline" 
                        href="https://parsanaderi.alphaedu.ir" target="blank">ParsaNaderi</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full z-20">
                <Robo_Footer />
            </div>
        </>
    );
}
