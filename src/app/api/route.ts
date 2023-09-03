// @ts-nocheck
import openai from './../utils/openai'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: `
                Ta mission : Rédige un post Linkedin authentique et humain qui reprend la structure des publications sur Linkedin avec les retours et les sauts de lignes, les émoticones et 3 hashtags. Nous allons te donner 
                - Le sujet général 
                - Des idées à développer dans ta publication
                - Une tonalité à respecter 
                - Un pronom à utiliser 
                - Une longueur

                Contrainte : Tu dois respecter la structure suivante : 

                - Introduction : 2 phrases qui sont séparées par un saut de ligne. La première phrase doit être une accroche captivante. La seconde doit donner envie de lire la suite du contenu comme du teasing. Ta réponse doit commencer directement par l'accroche. N'ajoute pas de titre.

                - Contenu : Le contenu doit aller à l'essentiel, être une démonstration ou une liste de conseils donnés. Pour cela tu utiliseras le concept d'écriture : 
                Question + Affirmation. 
                Tu peux aussi utiliser des listes avec des bullets points. Dans ce cas-là tu utiliseras "→" à la place des points. 
                Si tu fais une liste numérotée, tu utiliseras les émoticones suivants : 1️⃣2️⃣ .... 

                - Conclusion : La conclusion doit donner la morale générale qui résume le contenu de la publication et doit inclure un appel à l'action pour les lecteurs comme une question par exemple. 

                - Tu proposeras 3 variantes de publications qui seront intégrées dans un fichier Json de la façon suivante : 
                {
                variante1 : 
                {
                intro: "introduction", 
                content: "contenu", 
                conclusion: "conclusion"
                }, 
                variante2 : 
                {
                intro: "introduction", 
                content: "contenu", 
                conclusion: "conclusion"
                }, 
                variante3: 
                {
                intro: "introduction", 
                content: "contenu", 
                conclusion: "conclusion"
                }, 
                } 
                `
            },
            { 
                role: 'user', 
                content: `
                    Thème : ${body.sujet}
                    Idées à développer : ${body.idea}
                    Ton : ${body.ton}
                    Pronom : ${body.pronom}
                    Longueur : ${body.longueur}
                `
            }
        ],
        model: 'gpt-3.5-turbo-16k',
    })
    return NextResponse.json(completion, { status: 200 })
}
