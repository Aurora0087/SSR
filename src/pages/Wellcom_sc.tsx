import { imgs } from "./wellcom_sc_img"
import '../css/weallcom_sc.css'

function Wellcom_sc() {
    return (
        <main>
            <div className="top_img">
                <div className="left">
                    <div className="img1"><img src={imgs.lt} alt="" /></div>
                    <div className="img2"><img src={imgs.ld} alt="" /></div>
                </div>
                <div className="mid">
                <div className="top">
                    <div className="img1"><img src={imgs.mt1} alt="" /></div>
                    <div className="img2"><img src={imgs.mt2} alt="" /></div>
                    <div className="img1"><img src={imgs.ld} alt="" /></div>
                    <div className="img2"><img src={imgs.rd} alt="" /></div>
                </div>
                <div className="email-input">
                        <h2 className="disc">Learn creative skills to achieve your personal goals.</h2>
                        <form action="/register">
                            <input type="email" name="email-id" id="email" placeholder="Email address" required />
                            <button id="email-submit-btn" type="submit">start learning today</button>
                        </form>
                </div>
                <div className="botm">
                    <div className="img1"><img src={imgs.md1} alt="" /></div>
                    <div className="img2"><img src={imgs.md2} alt="" /></div>
                </div>
                </div>
                <div className="right">
                    <div className="img1"><img src={imgs.rt} alt="" /></div>
                    <div className="img2"><img src={imgs.rd} alt="" /></div>
                </div>
            </div>
        </main>
    )
}

export default Wellcom_sc