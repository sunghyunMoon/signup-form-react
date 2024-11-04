import { useEffect, useRef, useState } from 'react'

const $html = document.documentElement
const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12

const getHtmlFontSize = () => {
    return parseFloat(window.getComputedStyle($html).fontSize)
}

const FontControlBox = () => {
    const [fontSize, setFontSize] = useState(getHtmlFontSize())

    const onClickFontsizeControl = (flag) => {
        if (flag === 'increase') {
            setFontSize((prev) => prev + 1)
        } else {
            setFontSize((prev) => prev - 1)
        }
    }

    useEffect(() => {
        $html.style.fontSize = fontSize + 'px'
    }, [fontSize])

    return (
        <aside id="font-control-box" className="flex fixed bottom-0 right-0">
            <button
                id="increase-font-btn"
                onClick={() => onClickFontsizeControl('increase')}
                disabled={fontSize >= MAX_FONT_SIZE}
                className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
            >
                +
            </button>
            <button
                id="decrease-font-btn"
                onClick={() => onClickFontsizeControl('decrease')}
                disabled={fontSize <= MIN_FONT_SIZE}
                className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
            >
                -
            </button>
        </aside>
    )
}

export default FontControlBox
