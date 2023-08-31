import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

type Props = {
    text: string
}

export default function FadeInText({
    text
}: Props) {

    const ref = useRef([])
    const container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        createAnimation()
    }, [])

    const lineStyle = {
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '2.8rem',
    }

    const letterStyle = {
        opacity: 0.2,
    }

    const wordStyle = {
        margin: '0',
    }

    const containerStyle = {
        padding: '30px 0'
    }

    const createAnimation = () => {
        gsap.to(ref.current, {
            opacity: 1,
            ease: "none", 
            stagger: 0.1,
            scrollTrigger: {
                trigger: container.current, 
                start: 'top-0%',
                end: 'bottom-50',
                scrub: true,
            }
        })
    }

    // Split all words 
    const splitWords = () => {
        let body = [] as any
        text.split(" ").forEach((word: string, index: number) => {
            const letters = splitLetters(word) as any
            body.push(<p style={wordStyle} key={`word_${index}`}>{letters}</p>)
        })
        return body
    }

    const splitLetters = (word: string) => {
        let letters = [] as any
        word.split("").forEach((letter: string, index: number) => {
            // @ts-ignore
            letters.push(<span ref={el => {ref.current.push(el)}} style={letterStyle} key={`letter_${index}`}>{letter}</span>)
        })
        return letters
    }

  return (
    <div style={containerStyle} ref={container}>
        {/* @ts-ignore */}
        <div style={lineStyle}>{splitWords()}</div>
    </div>
  )
}