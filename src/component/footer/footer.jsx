import { FaInstagram, FaTelegram} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-wrap max-w-[1200px] items-center justify-between m-auto text-center">
<div>
  <p className="text-[25px] font-bold">Restaurant</p>
</div>

<div className="flex items-center text-center">
  <a target="https://www.instagram.com/shokirbek_coder" href="https://www.instagram.com/shokirbek_coder">
<FaInstagram  className="text-[30px] "/>
  </a>
  <a target="https://t.me/shokir06" href="https://t.me/shokir06">
    <FaTelegram className="ml-3 text-[30px]"/>
  </a>
  <p className="font-bold text-[15px] ml-2">Murojaat uchun tel: +998936976880</p>
</div>
      
        </div>
  )
}

export default Footer