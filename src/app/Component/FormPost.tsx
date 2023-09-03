// @ts-nocheck
'use client'
import { useState } from 'react'

const FormPost = () => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState("")

    const handleForm = async (e: any) => {
        e.preventDefault()

        setLoading(true)

        const sujet = document.getElementById('sujet')?.value 
        const ton = document.getElementById('ton')?.value 
        const idea = document.getElementById('idea')?.value 
        const pronom = document.getElementById('pronom')?.value 
        const longueur = document.getElementById('longueur')?.value 
    
        if(!sujet || !ton || !idea || !pronom || !longueur) {
          console.error("Veuillez remplir tous les champs")
          setLoading(false)
          return
        }

        try{
          const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sujet,
              ton,
              idea,
              pronom,
              longueur
            })
          })
          const data = await response.json();
          console.log(data.choices[0].message.content)
          setPost(data.choices[0].message.content)
          setLoading(false)
        } catch {
          console.error("Une erreur est survenue")
          setLoading(false)
        }
    }

  const renderHTML = () => {
    return {__html: post}
  }

  console.log(post)

  return (
      <>
      <div className="mt-8 flex gap-8 min-w-full">
        <div className="p-16 rounded-lg w-4/12 shadow-lg">
            <h2 className="mb-8 text-4xl">Étape 1 : Formulaire</h2>
            <form action="" onSubmit={handleForm}>
              <div className="flex flex-col mb-4">           
                <label for="sujet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">De quoi veux-tu parler ?</label>
                <input type="text" id="sujet" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="my-4">
                <label for="idea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Des idées à évoquer ?</label>
                <textarea type="text" id="idea" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="my-4">
                <label for="ton" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rends ton post unique !</label>
                <select name="ton" id="ton" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="humour">Humour</option>
                  <option value="serieux">serieux</option>
                </select>
              </div>
              <div className="my-4">
                <label for="pronom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Un pronom à utiliser ?</label>
                <select name="pronom" id="pronom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="tu">tu</option>
                  <option value="vous">vous</option>
                </select>
              </div>
              <div className="mt-4">
                <label for="longueur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taille du post ?</label>
                <select name="longueur" id="longueur" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="court">Court</option>
                  <option value="long">Long</option>
                </select>
              </div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6" type="submit">Créer une super publication</button>
            </form>
          </div>
          <div className="p-16 rounded-lg w-8/12 whitespace-pre-line shadow-lg">
            {loading ? 
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div> :  
            <div dangerouslySetInnerHTML={{ __html: post }} />}
          </div>
        </div>
      </>
  )
}

export default FormPost
