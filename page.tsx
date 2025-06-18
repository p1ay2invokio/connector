'use client'

import { useEffect, useRef } from "react"
import Header from "../Components/Header"
import { Howl, Howler } from 'howler'
import { FcBullish, FcDocument, FcRefresh, FcTimeline } from "react-icons/fc"
import { useRouter } from "next/navigation"
import { BiArchive, BiCoin, BiGitBranch, BiLogoAndroid, BiLogoApple, BiLogoGoogle, BiMoney, BiUser, BiWallet } from "react-icons/bi"
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const LandingPage = () => {

    let navigate = useRouter()

    const lists = ['Forex', 'Stocks', 'Crypto', 'Commodities', 'Indices', "ETFs"]

    let country = ["japan.webp", "swe.webp", "us.webp", 'star.webp']

    let news_list = [
        {
            title: 'Pomp เขย่าวงการคริปโต! เตรียมระดมทุน 2.7 หมื่นล้าน ลุยซื้อ Bitcoin รับกระแส "ทรัมป์ฟีเวอร์"'
        },
        {
            title: 'พิษเทรดวอร์ยืดเยื้อ! เอกชนพร้อมใจ "เบรก" ลงทุน-ส่งออกชะลอตัว'
        },
        {
            title: 'เปิดตลาดร่วงแรง! Bitcoin ดิ่งแตะ $102,000 – Altcoin ทรุดหนัก ทะลุ -10%'
        },
        {
            title: 'Pomp เขย่าวงการคริปโต! เตรียมระดมทุน 2.7 หมื่นล้าน ลุยซื้อ Bitcoin รับกระแส "ทรัมป์ฟีเวอร์"'
        },
        {
            title: 'พิษเทรดวอร์ยืดเยื้อ! เอกชนพร้อมใจ "เบรก" ลงทุน-ส่งออกชะลอตัว'
        },
        {
            title: 'เปิดตลาดร่วงแรง! Bitcoin ดิ่งแตะ $102,000 – Altcoin ทรุดหนัก ทะลุ -10%'
        }
    ]

    const ref = useRef(null)
    const box = useRef(null)
    const isInView = useInView(ref, { once: true })
    const boxInView = useInView(box, { once: true })
    const download = useRef(null)
    const isInDownload = useInView(download, { once: true })

    const news = useRef(null)
    const isInNews = useInView(news, { once: true })

    return (
        <div className="">
            <Header />


            <div className="w-full h-[120vh] bg-[rgb(24,24,24)] flex justify-center items-center">
                <div className="grid grid-cols-2 place-items-center p-6">
                    <div>
                        <div>
                            <div className="flex items-baseline gap-5">
                                <div className="flex text-[55px] text-blue-600">
                                    <p className="font-[regular]">OUTWIT</p>
                                    <p className="font-[bold]">TRADER</p>
                                </div>
                                <p className="text-blue-600 text-[60px] font-[pbold]">Investing</p>
                            </div>
                            <p className="text-white text-[40px] font-[bold]">การเริ่มต้นสู่โลกของการเทรด</p>
                            <p className="text-white text-[40px] font-[bold]">กับโบรกเกอร์ที่ดีที่สุด</p>
                            <p className="text-white/60 mt-5 text-[20px] font-[medium]">การซื้อขายสินทรัพย์ทางการเงิน CFDs ใน Forex, สินค้าโภคภัณฑ์, พันธบัตร, โลหะ, พลังงาน, หุ้น, ดัชนี และอื่นๆ โดยมีเป้าหมายเพื่อสร้างกำไรจากความแตกต่างของราคาที่เปลี่ยนแปลงในตลาด</p>
                            <button className="p-2 from-blue-600 to-blue-400 bg-gradient-to-t text-white font-[medium] rounded-full w-[200px] mt-5 animate-text-color-change">เปิดบัญชี</button>
                        </div>

                        <div className="w-[300px] rounded-xl relative overflow-hidden mt-5">

                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bg-gradient-to-r"></div>
                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bottom-0 bg-gradient-to-r"></div>

                            <div className="w-full rounded-xl bg-[rgb(43,43,43)] p-3 flex gap-5 items-center border-l-[3px] border-blue-600 ">
                                <BiCoin className="text-[white]" size={50} />
                                <div>
                                    <p className="text-white font-[bold] text-[24px]">Privilege</p>
                                    <p className="text-gray-400 font-[regular]">รับสิทธิ์ก่อนใคร ไลฟ์สไตล์ที่ใช่</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[300px] rounded-xl relative overflow-hidden mt-3">

                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bg-gradient-to-r"></div>
                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bottom-0 bg-gradient-to-r"></div>

                            <div className="w-full rounded-xl bg-[rgb(43,43,43)] p-3 flex gap-5 items-center border-l-[3px] border-blue-600 ">
                                <BiArchive className="text-[white]" size={50} />
                                <div>
                                    <p className="text-white font-[bold] text-[24px]">Tournament</p>
                                    <p className="text-gray-400 font-[regular]">Online Trading</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="relative">

                        <motion.img className="absolute w-[110px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1 } }} src="japan.webp"></motion.img>
                        <motion.img className="absolute right-0 w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.2 } }} src="us.webp"></motion.img>
                        <motion.img className="absolute bottom-0 w-[100px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.4 } }} src="swe.webp"></motion.img>
                        <motion.img className="absolute top-[200px] left-[-120px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.6 } }} src="star.webp"></motion.img>
                        <motion.img className="absolute top-[400px] right-[-40px] w-[60px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.8 } }} src="tesla.webp"></motion.img>
                        <motion.img className="absolute top-[400px] left-[-100px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 2.0 } }} src="apple.webp"></motion.img>
                        <motion.img className="absolute top-[600px] right-[0px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 2.2 } }} src="nvidia.webp"></motion.img>



                        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-3 absolute bottom-20 z-[10]">
                            {lists.map((item, index) => {
                                console.log(index)

                                return (
                                    <motion.div initial={{ x: 0, opacity: 0 }} animate={{ x: index * -15, opacity: 1 }} transition={{ delay: index * 0.1 }} className={`p-3 w-[200px] h-[50px] flex justify-center items-center text-white from-blue-600 to-blue-600/20 bg-gradient-to-t rounded-xl skew-y-6 shadow z-[11] cursor-pointer`}>
                                        <p className="font-[bold] text-[20px]">{item}</p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[0px] top-[0px] absolute z-0" src="/ef.png"></motion.img>
                        {/* <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[-00px] bottom-[-100px] absolute z-0" src="/ef.png"></motion.img> */}
                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[0px] bottom-[-100px] absolute z-0" src="/ef.png"></motion.img>



                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-[500px] z-[0] relative" src="/iphone.webp"></motion.img>
                        <motion.img initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-[350px] absolute right-[-50px] bottom-[70px] z-10" src="/displayright.webp"></motion.img>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100px] bg-[rgb(24,24,24)] ">
                <Marquee>
                    <div className="flex gap-10">
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-400 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                    </div>
                </Marquee>
            </div>

            <motion.div className="w-full bg-[rgb(24,24,24)]">
                <div className="flex justify-center items-center gap-20">
                    <motion.img ref={ref} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }} transition={{ duration: 2, type: 'spring' }} className="w-[600px]" src="/computer.png"></motion.img>
                    <div className="grid grid-cols-2 gap-3">
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiUser size={60} />
                                <p className="font-[bold] text-[25px]">255K</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px]">ผู้ที่กำลังใช้งาน</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiWallet size={60} />
                                <p className="font-[bold] text-[25px]">13K+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px] w-[150px] text-center">รายได้นักเทรดต่อเดือน</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiMoney size={60} />
                                <p className="font-[bold] text-[25px]">255K</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px] w-[120px]">มูลค่าการซื้อขายสุทธิ ($)</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiGitBranch size={60} />
                                <p className="font-[bold] text-[25px]">120+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px]">สินทรัพย์การเทรด</p>
                        </motion.div>
                    </div>
                </div>

                <motion.div ref={download} animate={isInDownload ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="text-white h-[60vh] font-[medium] text-center flex justify-center items-center flex-col">

                    <div>
                        <p className="text-[24px]">เริ่มต้นเทรด ได้ทุกที่ ทุกเวลา</p>
                        <p className="text-gray-400">ดาวน์โหลดแอปพลิเคชัน บน iOS และ Android เพื่อเข้าเทรด ลูกค้ามากกว่า 8 ล้านคนทั่วโลกให้ความไว้วางใจเราและมีรายได้ประจำทุกวัน</p>
                    </div>

                    <div className="flex justify-center items-center mt-5 gap-3">
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoAndroid className="text-green-400" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">Android</p>
                        </div>
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoApple className="text-white" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">IOS</p>
                        </div>
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoGoogle className="text-blue-600" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">Web</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            <div className="w-full bg-[rgb(24,24,24)] flex justify-center items-start pt-0 ">
                <motion.div ref={news} animate={isInNews ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="font-[medium] text-white text-center">
                    <p className="text-[24px]">ก้าวนำทุกเหตุการณ์</p>
                    <p className="font-[light] text-gray-400">เติบโตในสังคมของนักเทรด ด้วยคำแนะนำจากผู้เชี่ยวชาญ</p>


                    <div className=" grid grid-cols-3 items-baseline gap-[5px] place-items-center p-10">
                        {news_list.map((item: any) => {
                            return (
                                <div>
                                    <div className="h-[300px] bg-gray-300 rounded-xl"></div>
                                    <p className="text-start">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>


            <div className="h-[70vh] bg-[rgb(20,20,20)] grid grid-cols-2 p-20 gap-x-[100px]">
                <div className="space-y-[-5px] text-white gap-3 flex flex-col">
                    <div className="flex gap-3">
                        <img className="w-[40px] h-[40px]" src="/images/logo.webp"></img>
                        <div className="flex">
                            <p className=" font-[pmedium] text-[20px] max-[600px]:text-[16px]">OUTWIT</p>
                            <p className=" font-[pbold] text-[20px] max-[600px]:text-[16px]">TRADER</p>
                        </div>
                    </div>
                    {/* <p className="text-white font-[light] text-[10px]">ผู้ให้บริการปล่อยเช่าสัญญาน</p> */}
                    <p className="text-[14px] font-[light]">คำเตือนความเสี่ยง:การเทรดในตลาดการเงินมีความเสี่ยง สัญญาเทรดส่วนต่าง (‘CFD’) เป็นผลิตภัณฑ์ทางการเงินที่ซับซ้อน ซึ่งมีการเทรดด้วยมาร์จิ้น การเทรด CFD นั้นมีความเสี่ยงสูง เนื่องจากเลเวอเรจสามารถให้ทั้งคุณและ โทษได้ ด้วยเหตุนี้ CFD จึงอาจ ไม่เหมาะสำหรับนักลงทุนทุกรายเนื่องจากคุณอาจสูญเงินทุนทั้งหมดได้ คุณไม่ควร เสี่ยงเกินกว่าที่ คุณพร้อมจะเสียก่อนตัดสินใจเทรดคุณต้องแน่ใจว่าคุณเข้าใจความเสี่ยงที่เกี่ยวข้องและคำนึงถึง วัตถุประสงค์ในการลงทุนและระดับประสบการณ์ของคุณ</p>

                    <p className="text-[14px] font-[light]">TrendProis a brand operated by Sun Wave LLC, is a company registered in St. Kitts and Nevis with company registration number L 22402 and having its registered address at Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis (hereinafter “Sun Wave” and/or “Company”) .</p>
                </div>

                <div className="grid grid-cols-3 ">
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">หน้าหลัก</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>เข้าสู่ระบบ</p>
                            <p>สมัครสมาชิก</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">การซื้อขาย</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>ประเภทบัญชี</p>
                            <p>คำถามที่พบบ่อย</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">บริษัท</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>เกี่ยวกับเรา</p>
                            <p>ระเบียบข้อบังคับ</p>
                            <p>ศูนย์ช่วยเหลือ</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t-[1px] border-gray-300">

                    <div className="pt-3 flex gap-3">
                        <p className="text-white font-[medium]">Terms & Condition</p>
                        <p className="text-white font-[medium]">Privacy Policy</p>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default LandingPage