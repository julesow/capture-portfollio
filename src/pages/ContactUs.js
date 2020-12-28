import React from 'react'
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
    return (
        <motion.div style={{background:"#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            Contact Us
        </motion.div>
    )
}

export default ContactUs
