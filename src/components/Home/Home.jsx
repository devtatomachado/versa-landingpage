// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

import { FaInstagram, FaTiktok } from "react-icons/fa";
import "./home.css"
import { BiEnvelope } from "react-icons/bi";
function Home() {
    return (
        <section className="home">
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
                }}>
                <img src="LogoBranco.png" alt="Logo da banda Versa" />
            </motion.h1>
            <ul className="list-socialmedia">
                <li><a href=""><FaInstagram /></a></li>
                <li><a href=""><FaTiktok /></a></li>
                <li><a href=""><BiEnvelope /></a></li>
            </ul>
        </section>
    )
}

export default Home;