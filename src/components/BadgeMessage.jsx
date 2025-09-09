import React from 'react'
import { motion } from 'framer-motion'

const BadgeMessage = ({message, isGreen, textSize=0.8}) => {

    // expects text size in proportion of 1 rem

  return (
        isGreen ?

        <motion.p className={`self-center text-[${textSize}rem] font-merri text-gray-700 mt-8 rounded-full px-6 py-1`}
            style={{
                border : "2px solid rgb(42, 161, 74, 0.6)",
                backgroundColor : "rgb(42, 161, 74, 0.2)"
            }}
            initial={{
                opacity : 0,
                scale : 0.8
            }}
            animate={{
                opacity : 1,
                scale : 1,
            }}
            transition={{
                duration : 0.3,
                ease : "easeInOut"
            }}
        >
            {message}
        </motion.p>

        :

        <motion.p className={`self-center text-[${textSize}rem] font-merri text-gray-700 mt-8 rounded-full px-6 py-1`}
            style={{
                border : "2px solid rgb(179, 59, 50, 0.6)",
                backgroundColor : "rgb(179, 59, 50, 0.2)"
            }}
            initial={{
                opacity : 0,
                scale : 0.8
            }}
            animate={{
                opacity : 1,
                scale : 1,
            }}
            transition={{
                duration : 0.3,
                ease : "easeInOut"
            }}
        >
            {message}
        </motion.p>
            

    )
}

export default BadgeMessage
